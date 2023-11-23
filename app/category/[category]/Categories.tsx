import { ArticleDataProps } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { getArticlesByCategory } from "@/lib/dbOperations";
import { notFound } from "next/navigation";

async function fetchArticlesByCategory(category: string) {
  const categories = await getArticlesByCategory(category);
  if (!categories) return notFound();
  return categories;
}
const Categories = async ({ category }: { category: string }) => {
  const articles: ArticleDataProps[] = await fetchArticlesByCategory(category);
  return (
    <div className="grid grid-cols-1 gap-8 px-4 sm:px-6 lg:px-8">
      {articles.map((article, index) => (
        <Link href={`/articles/${article.slug}`} key={index}>
          <div className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col sm:max-w-xl md:max-w-full md:flex-row items-center mx-auto">
            <div className="w-full md:w-1/2 relative">
              <Image
                src={article.image.cloud.url}
                alt={article.image.alt}
                width={380}
                height={217}
                sizes="380px"
                className="w-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-gray-100 bg-opacity-0 hover:bg-opacity-20 transition ease-in-out"></div>
            </div>
            <div className="p-3 md:p-6 flex flex-col justify-between w-full md:w-1/2">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 leading-snug mb-4 hover:text-blue-600">
                {article.title}
              </h1>
              <p className="text-sm sm:text-base text-gray-600 text-left">
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
