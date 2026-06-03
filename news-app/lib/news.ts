export async function getNews() {
  try {
    const res = await fetch("/api/news", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch news");
    }

    const data = await res.json();

    return data?.results || [];
  } catch (error) {
    console.error("getNews error:", error);
    return [];
  }
}

export async function getCategoryNews(category: string) {
  try {
    const res = await fetch(
      `/api/news?category=${category}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch category news");
    }

    const data = await res.json();

    return data?.results || [];
  } catch (error) {
    console.error("getCategoryNews error:", error);
    return [];
  }
}