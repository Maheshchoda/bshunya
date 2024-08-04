import Image from "next/image";
import { ArticleDataProps } from "@/types";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticlesByQuery } from "@/lib/dbOperations";

async function getTrendingArticles() {
  const TrendingArticles = await getArticlesByQuery({ isTrending: true });
  if (!TrendingArticles) notFound();
  return TrendingArticles;
}

const TrendingStories = async () => {
  const TrendingArticles: ArticleDataProps[] = await getTrendingArticles();
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Trending</h1>
        <hr className="border-t border-gray-300 w-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8">
        {TrendingArticles.map((article) => (
          <Link href={`/articles/${article.slug}`} key={article._id}>
            <div className="cursor-pointer  bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="flex flex-col md:flex-row md:items-start">
                <div className="w-full md:w-1/2">
                  <div className="relative">
                    <Image
                    src={`/BshunyaImages/${article.image.id}.webp`}
                      // src={article.image.cloud.url}
                      alt={article.image.alt}
                      width={450}
                      height={300}
                      sizes="(min-width: 1024px) 240px, (min-width: 768px) 168px, (min-width:425px) 380px, 100vw"
                      className="lg:h-44 md:h-36 object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full hover:bg-gray-100 bg-opacity-0 hover:bg-opacity-20 transition ease-in-out"></div>
                  </div>
                </div>
                <div className="w-full mx-1 max-w-md md:w-1/2 md:ml-2 p-1">
                  <h2 className="md:text-xl md-lg:text-sm font-semibold mb-2 text-gray-800 hover:text-blue-600">
                    {article.title}
                  </h2>
                  <p className="sm:text-xs text-gray-600">{article.caption}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingStories;
