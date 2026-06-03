export async function getNews() {
  const res = await fetch("/api/news", {
    cache: "no-store",
  });

  if (!res.ok) {
    return [];
  }

  const data = await res.json();
  return data?.results || [];
}

export async function getCategoryNews(category: string) {
  const res = await fetch(`/api/news?category=${category}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return [];
  }

  const data = await res.json();
  return data?.results || [];
}