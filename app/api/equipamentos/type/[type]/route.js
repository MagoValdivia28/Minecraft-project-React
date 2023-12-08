import axios from "axios";

import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { type } = params;
    try {
        const response = await axios.get(`http://192.168.68.176:4000/equipamentos?type=${type}`);
        return NextResponse.json(response.data);
    } catch (error) {
        console.log("[ORDER_DELETE]", error);
        return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
}
