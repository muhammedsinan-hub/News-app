"use client";

import { use, useEffect, useState } from "react";
import NewsCard from "@/components/NewsCard";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = use(params);

  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      try {
        const res = await fetch(
          `/api/news?category=${category}`
        );

        const data = await res.json();

        setNews(data.results || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, [category]);

  return (
<main className="max-w-7xl mx-auto p-6 min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-6 capitalize text-red-500">
        {category} News
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">
          Loading...
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item: any) => (
            <NewsCard
              key={item.article_id}
              title={item.title}
              description={item.description}
              image={item.image_url}
              link={item.link}
            />
          ))}
        </div>
      )}
    </main>
  );
}