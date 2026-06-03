import NewsCard from "@/components/NewsCard";
import { getCategoryNews } from "@/lib/news";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;

  const news = await getCategoryNews(category);

  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-5xl font-extrabold text-center mb-4 capitalize text-blue-500">
        {category} News
      </h1>

      <p className="text-center text-gray-500 mb-10">
        Latest updates from {category}
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {news.length > 0 ? (
          news.map((item: any) => (
            <NewsCard
              key={item.article_id}
              title={item.title || "No title"}
              description={item.description || "No description available"}
              image={item.image_url || "/noimage.png"}
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