import {NextRequest, NextResponse} from "next/server";

export async function GET (request: NextRequest){
    const results = await fetch('https://api.escuelajs.co/api/v1/products')
    return NextResponse.json(await results.json());
}