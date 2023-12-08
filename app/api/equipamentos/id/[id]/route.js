import axios from "axios";

import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    const response = await axios.delete(`http://192.168.68.176:4000/equipamentos/${id}`);

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[ORDER_DELETE]", error);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}

export async function PUT(request, { params }) {
    const { id } = params;
    const body = await request.json();
  
    try {
      const response = await axios.put(`http://192.168.68.176:4000/equipamentos/${id}`, body);
  
      return NextResponse.json(response.data);
    } catch (error) {
      console.log("[ORDER_PUT]", error);
      return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
  }