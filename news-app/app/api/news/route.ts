import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const apiKey = process.env.NEWSDATA_API_KEY;

  const category =
    req.nextUrl.searchParams.get("category");

  const url = category
    ? `https://newsdata.io/api/1/news?apikey=${apiKey}&category=${category}&language=en`
    : `https://newsdata.io/api/1/news?apikey=${apiKey}&country=in&language=en`;

  const res = await fetch(url);

  const data = await res.json();

  return NextResponse.json(data);
}