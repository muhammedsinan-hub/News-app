export async function getNews() {
  const res = await fetch(
    "http://localhost:3000/api/news",
    { cache: "no-store" }
  );

  const data = await res.json();

  return data.results;
}

export async function getCategoryNews(
  category: string
) {
  const res = await fetch(
    `http://localhost:3000/api/news?category=${category}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  return data.results;
}