"use client";

import { useEffect, useState } from "react";
import NewsCard from "@/components/NewsCard";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      try {
        const res = await fetch(
          `/api/news?category=${params.category}`
        );

        const data = await res.json();

        console.log(data);

        setNews(data.results || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, [params.category]);

  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 capitalize text-blue-500">
        {params.category} News
      </h1>

      {loading ? (
        <p className="text-center text-white">
          Loading...
        </p>
      ) : news.length === 0 ? (
        <p className="text-center text-red-500">
          No news found
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item: any) => (
            <NewsCard
              key={item.article_id}
              title={item.title}
              description={item.description}
              image={item.image_url || "/noimage.png"}
              link={item.link}
            />
          ))}
        </div>
      )}
    </main>
  );
}