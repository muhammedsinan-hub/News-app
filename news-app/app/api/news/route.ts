import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.NEWSDATA_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing API Key" },
        { status: 500 }
      );
    }

    const category = req.nextUrl.searchParams.get("category");

    const url = category
      ? `https://newsdata.io/api/1/news?apikey=${apiKey}&category=${category}&language=en`
      : `https://newsdata.io/api/1/news?apikey=${apiKey}&country=in&language=en`;

    const res = await fetch(url);

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch news API" },
        { status: res.status }
      );
    }

    const data = await res.json();

    return NextResponse.json({
      results: data.results || [],
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}