import React from "react";
import Image from "next/image";
import { ArticleData } from "@/app/articles/[slug]/ArticleComponents/ArticleProps";
import Link from "next/link";

async function getTrendingArticles() {
  const response = await fetch(
    `http://localhost:3000/api/articles?query=isTrending`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) throw new Error("Failed to fetch hero articles");
  return response.json();
}

const TrendingStories = async () => {
  const TrendingArticles: ArticleData[] = await getTrendingArticles();
  return (
    <div className="p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Trending</h2>
        <hr className="border-t border-gray-300 w-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {TrendingArticles.map((article, index) => (
          <Link href={`/articles/${article.slug}`}>
            <div
              key={index}
              className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-row items-center space-x-4 p-6"
            >
              <div className="relative w-full md:w-1/2 lg:w-1/3 h-32">
                <Image
                  src={article.image.cloud.url}
                  alt={article.image.alt}
                  width={article.image.width}
                  height={article.image.height}
                />
              </div>
              <div className="w-2/3 flex flex-col justify-center">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {article.title}
                </h3>
                <p className="hidden md:block text-sm text-gray-600">
                  {article.meta.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingStories;
