import axios from "axios";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await axios.get("http://localhost:4000/equipamentos");
    return NextResponse.json(response.data.equipamentos);
  } catch (error) {
    console.log("[ORDER_GET]", error);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}

export async function POST(request) {
  const params = await request.json();

  try {
    const response = await axios.post("http://localhost:4000/equipamentos", params);
    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[ORDER_POST]", error);
    return new NextResponse("Erro interno do servidor! Teste", { status: 500 });
  }
}