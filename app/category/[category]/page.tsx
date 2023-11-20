import { ArticleDataProps } from "@/types";
import CategoryTabs from "./CategoryTabs";
import Link from "next/link";
import Image from "next/image";

async function fetchArticlesByCategory(category: string) {
  const response = await fetch(
    `http://localhost:3000/api/category/${category}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok)
    throw new Error("Failed to fetch articles by given Category");
  return response.json();
}
const CategoryPage = async ({
  params: { category },
}: {
  params: { category: string };
}) => {
  const articles: ArticleDataProps[] = await fetchArticlesByCategory(category);
  return (
    <div className="container mx-auto  max-w-screen-lg my-24 sm:my-32">
      <CategoryTabs selectedCategory={category} />

      <div className="grid grid-cols-1 gap-8">
        {articles.map((article, index) => (
          <Link href={`/articles/${article.slug}`} key={index}>
            <div className="bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row items-start">
              <div className="md:w-1/2 relative my-4 md:px-4 md:h-64">
                <Image
                  src={article.image.cloud.url}
                  alt={article.image.alt}
                  className="w-full h-auto object-cover"
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
    </div>
  );
};

export default CategoryPage;
