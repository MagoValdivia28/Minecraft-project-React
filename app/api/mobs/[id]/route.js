import axios from "axios";

import { NextResponse } from "next/server";

const url = process.env.BASE_URL + "mobs";

export async function GET() {
    try {
        const response = await axios.get(`${url}/${id}`);
        return NextResponse.json(response.data.mobs);
    } catch (error) {
        console.log("[ORDER_GET]", error);
        return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    const { id } = params;

    try {
        const response = await axios.delete(`${url}/${id}`);
        return NextResponse.json(response.data);
        
    }
    catch (error) {
        console.log("[ORDER_DELETE]", error);
        return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
}

export async function PUT(request, {params}) {
    const {id} = params;
    const data = await request.json();
    try {
      const response = await axios.put(`${url}/${id}`, data);
      return NextResponse.json(response.data);
    } catch (error) {
      console.log("[ORDER_PUT]", error);
      return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
  }