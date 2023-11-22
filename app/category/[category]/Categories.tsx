import { ArticleDataProps } from "@/types";
import Link from "next/link";
import Image from "next/image";

async function fetchArticlesByCategory(category: string) {
  const response = await fetch(
    `${process.env.DOMAIN}/api/category/${category}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok)
    throw new Error("Failed to fetch articles by given Category");
  return response.json();
}
const Categories = async ({ category }: { category: string }) => {
  const articles: ArticleDataProps[] = await fetchArticlesByCategory(category);
  return (
    <div className="grid grid-cols-1 gap-8">
      {articles.map((article, index) => (
        <Link href={`/articles/${article.slug}`} key={index}>
          <div className="bg-white border md:rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row items-start">
            <div className="md:w-1/2 relative">
              <Image
                src={article.image.cloud.url}
                alt={article.image.alt}
                className="h-auto w-auto md:h-72 object-cover"
                width={511}
                height={292}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-gray-100 bg-opacity-0 hover:bg-opacity-20 transition ease-in-out"></div>
            </div>
            <div className="p-6 md:w-1/2 flex flex-col justify-between">
              <h3 className="lg:text-4xl md-lg:text-3xl md:text-2xl font-semibold text-gray-800 leading-snug mb-4">
                {article.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 text-left">
                {article.caption}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
