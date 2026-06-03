import { getNews } from "@/lib/news";
import NewsCard from "@/components/NewsCard";

export default async function Home() {
  const news = await getNews();

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 py-6 overflow-hidden">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-5 blink-heading">
        LATEST HEADLINES
      </h1>

      <p className="text-center text-white mb-12 text-sm md:text-base">
        Stay updated with breaking news from around the world !
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.slice(0, 12).map((item: any) => (
          <NewsCard
            key={item.article_id}
            title={item.title}
            description={item.description}
            image={item.image_url}
            link={item.link}
          />
        ))}
      </div>
    </main>
  );
}