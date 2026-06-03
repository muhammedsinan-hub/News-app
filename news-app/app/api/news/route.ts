import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.NEWSDATA_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ results: [] });
    }

    const category = req.nextUrl.searchParams.get("category");

    const url = category
      ? `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${category}&language=en`
      : `https://newsdata.io/api/1/news?apikey=${apiKey}&country=in&language=en`;

    const res = await fetch(url);
    const data = await res.json();

    return NextResponse.json({
      results: data.results || [],
    });
  } catch (error) {
    return NextResponse.json({ results: [] });
  }
}