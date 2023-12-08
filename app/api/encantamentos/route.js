import axios from "axios";

import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await axios.get("http://192.168.68.176:4000/encantamentos");
        return NextResponse.json(response.data.encantamentos);
    } catch (error) {
        console.log("[ORDER_GET]", error);
        return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
}

export async function POST(request) {
    const params = await request.json();

    try {
        const response = await axios.post("http://192.168.68.176:4000/encantamentos", params);
        return NextResponse.json(response.data);
    } catch (error) {
        console.log("[ORDER_POST]", error);
        return new NextResponse("Erro interno do servidor! Teste", { status: 500 });
    }
}

export async function PUT(request) {
    const params = await request.json();

    try {
        const response = await axios.put("http://192.168.68.176:4000/encantamentos", params);
        return NextResponse.json(response.data);
    }
    catch (error) {
        console.log("[ORDER_PUT]", error);
        return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
}

export async function DELETE(request) {
    const params = await request.json();
    console.log("AAAAAAAAAAAAA");
    console.log(params.id);

    try {
        const response = await axios.delete(`http://192.168.68.176:4000/encantamentos` + params.id);
        return NextResponse.json(response.data);
    }
    catch (error) {
        console.log("[ORDER_DELETE]", error);
        return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
}