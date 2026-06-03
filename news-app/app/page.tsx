"use client";

import { useEffect, useState } from "react";
import NewsCard from "@/components/NewsCard";

export default function Home() {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/news");
      const data = await res.json();
      setNews(data.results || []);
    }

    load();
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 py-6">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-5">
        LATEST HEADLINES
      </h1>

      <p className="text-center text-white mb-12">
        Stay updated with breaking news
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {news.length > 0 ? (
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
            Loading...
          </p>
        )}
      </div>
    </main>
  );
}