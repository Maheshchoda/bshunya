import React from "react";
import Image from "next/image";
import { ArticleDataProps } from "@/types";
import Link from "next/link";

async function getTrendingArticles() {
  const response = await fetch(
    `http://localhost:3000/api/articles?query=isTrending`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) throw new Error("Failed to fetch Trending articles");
  return response.json();
}

const TrendingStories = async () => {
  const TrendingArticles: ArticleDataProps[] = await getTrendingArticles();
  return (
    <div className="p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Trending</h2>
        <hr className="border-t border-gray-300 w-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TrendingArticles.map((article) => (
          <Link href={`/articles/${article.slug}`} key={article._id}>
            <div className="cursor-pointer  bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2">
                  <div className="relative w-auto h-44">
                    <Image
                      src={article.image.cloud.url}
                      alt={article.image.alt}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full hover:bg-gray-100 bg-opacity-0 hover:bg-opacity-20 transition ease-in-out"></div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-4 p-2">
                  <h3 className="md:text-xl md-lg:text-sm font-semibold mb-2 text-gray-800">
                    {article.title}
                  </h3>
                  <p className="md:text-xs sm:text-xs text-gray-600">
                    {article.caption}
                  </p>
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
