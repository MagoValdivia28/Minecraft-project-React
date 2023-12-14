import axios from "axios";

import { NextResponse } from "next/server";

const url = process.env.BASE_URL + "mobs";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const filtragemNome = searchParams.get("name");
    const filtragemTipo = searchParams.get("type");
    try {
        if (filtragemNome || filtragemTipo) {
            const nameCondition = filtragemNome ? `name=${filtragemNome}` : "";
            const typeCondition = filtragemTipo ? `type=${filtragemTipo}` : "";
            const response = await axios.get(`${url}?${nameCondition}&${typeCondition}`);
            return NextResponse.json(response.data.mobs);
          } else {
            const response = await axios.get(url);
            return NextResponse.json(response.data.mobs);
          }
    } catch (error) {
        console.log("[ORDER_GET]", error);
        return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
}

export async function POST(request) {
    const params = await request.json();

    try {
        const response = await axios.post(url, params);
        return NextResponse.json(response.data);
    } catch (error) {
        console.log("[ORDER_POST]", error);
        return new NextResponse("Erro interno do servidor! Teste", { status: 500 });
    }
}
