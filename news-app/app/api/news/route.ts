import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.NEWSDATA_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ results: [] });
    }

    const category = req.nextUrl.searchParams.get("category");

    const allowed = [
      "business",
      "sports",
      "technology",
      "health",
      "science",
      "entertainment",
    ];

    const safeCategory =
      category && allowed.includes(category)
        ? category
        : undefined;

    const url = safeCategory
      ? `https://newsdata.io/api/1/news?apikey=${apiKey}&category=${safeCategory}&language=en`
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