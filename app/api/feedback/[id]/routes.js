import axios from "axios";
import {NextResponse} from "next/server";

export async function DELETE(request, { params }) {
    const { id } = params;
    try {
      const response = await axios.delete(`http://localhost:4000/feedback/${id}`);
      return NextResponse.json(response.data);
    } catch (error) {
      console.log("[ORDER_DELETE]", error);
      return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
  }