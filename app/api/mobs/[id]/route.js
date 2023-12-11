import axios from "axios";

import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await axios.get(`http://localhost:4000/mobs/${id}`);
        return NextResponse.json(response.data.mobs);
    } catch (error) {
        console.log("[ORDER_GET]", error);
        return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    const { id } = params;

    try {
        const response = await axios.delete(`http://localhost:4000/mobs/${id}`);
        return NextResponse.json(response.data);
        
    }
    catch (error) {
        console.log("[ORDER_DELETE]", error);
        return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
}