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

  const category = params?.category || "";

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);

        const res = await fetch(
          `/api/news?category=${category}`
        );

        const data = await res.json();

        setNews(data?.results || []);
      } catch (error) {
        setNews([]);
      } finally {
        setLoading(false);
      }
    }

    if (category) load();
  }, [category]);

  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6 capitalize text-blue-500">
        {category} News
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {loading ? (
          <p className="text-center col-span-3 text-gray-500">
            Loading...
          </p>
        ) : news.length > 0 ? (
          news.map((item) => (
            <NewsCard
              key={item.article_id}
              title={item.title}
              description={item.description}
              image={item.image_url}
              link={item.link}
            />
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            No news found
          </p>
        )}
      </div>
    </main>
  );
}