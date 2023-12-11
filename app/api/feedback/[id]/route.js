import axios from "axios";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const { id } = params;
  console.log(id, "na route")

  try {
    const response = await axios.delete(`http://localhost:4000/feedback/${id}`);
    return NextResponse.json(response.data);
  } catch (error) {
    console.log("Entrou aqui2")
    console.log("[ORDER_DELETE]", error);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}

export async function PUT(request, {params}) {
  const {id} = params;
  const data = await request.json();
  try {
    const response = await axios.put(`http://localhost:4000/feedback/${id}`, data);
    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[ORDER_PUT]", error);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}