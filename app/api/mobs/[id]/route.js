import axios from "axios";

import { NextResponse } from "next/server";

export async function PUT(request) {
    const params = await request.json();

    try {
        const response = await axios.put("http://localhost:4000/mobs", params);
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
        const response = await axios.delete(`http://localhost:4000/mobs` + params.id);
        return NextResponse.json(response.data);
    }
    catch (error) {
        console.log("[ORDER_DELETE]", error);
        return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
}