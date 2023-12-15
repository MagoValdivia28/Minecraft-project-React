import axios from "axios";

import { NextResponse } from "next/server";

const url = process.env.BASE_URL + "membros";

export async function GET() {
    try {
        const response = await axios.get(url);
        return NextResponse.json(response.data.membros);
    } catch (error) {
        console.log("[ORDER_GET]", error);
        return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
}

export async function POST(request) {
    const params = await request.json();
    try {
        console.log("POSTTTTTTTTTTT");
        const response = await axios.post(url, params);
        return NextResponse.json(response.data);
    } catch (error) {
        console.log("[ORDER_POST]", error);
        return new NextResponse("Erro interno do servidor! Teste", { status: 500 });
    }
}

export async function PUT(request) {
    const params = await request.json();

    try {
        const response = await axios.put(
            `${url}/${params.id}`,
            params
        );
        return NextResponse.json(response.data);
    } catch (error) {
        console.log("[ORDER_PUT]", error);
        return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
}

export async function DELETE(request) {
    const params = await request.json();

    try {
        const response = await axios.delete(
            `${url}/${params.id}`
        );
        return NextResponse.json(response.data);
    } catch (error) {
        console.log("[ORDER_DELETE]", error);
        return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
}