import NewsCard from "@/components/NewsCard";
import { getCategoryNews } from "@/lib/news";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const news = await getCategoryNews(
    category
  );

  const filteredNews = news.filter(
    (item: any) =>
      item.image_url &&
      item.title &&
      item.description
  );

  return (
    <main className="max-w-7xl mx-auto p-6">
    <h1 className="text-5xl font-extrabold text-center mb-4 capitalize text-blue-500">
  {category} News
</h1>

<p className="text-center text-white mb-10">
  Latest updates from {category} 
</p>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredNews.map((item: any) => (
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