import axios from "axios";

import { NextResponse } from "next/server";

const url = process.env.BASE_URL + "equipamentos";

export async function GET(request, { params }) {
    const { type } = params;
    try {
        const response = await axios.get(`${url}?type=${type}`);
        return NextResponse.json(response.data);
    } catch (error) {
        console.log("[ORDER_DELETE]", error);
        return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
}
