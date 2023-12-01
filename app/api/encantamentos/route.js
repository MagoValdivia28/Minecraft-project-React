// import axios from "axios";

// import { NextResponse } from "next/server";

// export async function GET() {
//     try {
//         const response = await axios.get("http://10.88.200.205:4000/encantamentos");
//         return NextResponse.json(response.data.encantamentos);
//     } catch (error) {
//         console.log("[ORDER_GET]", error);
//         return new NextResponse("Erro interno do servidor!", { status: 500 });
//     }
// }

// export async function POST(request) {
//     const params = await request.json();

//     try {
//         const response = await axios.post("http://10.88.200.205:4000/encantamentos", params);
//         return NextResponse.json(response.data);
//     } catch (error) {
//         console.log("[ORDER_POST]", error);
//         return new NextResponse("Erro interno do servidor! Teste", { status: 500 });
//     }
// }