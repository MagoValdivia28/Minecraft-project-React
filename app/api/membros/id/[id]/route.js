import axios from "axios";

import { NextResponse } from "next/server";

const url = process.env.BASE_URL + "membros";

export async function DELETE(req, { params }) {
    const { id } = params;
    try {
        const response = await axios.delete(`${url}/${id}`);
        return NextResponse.json(response.data);
    }
    catch (error) {
        console.log(error);
        return new NextResponse("Erro interno no servidor", {status: 500});
    }
}

