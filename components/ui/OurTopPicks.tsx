import React from "react";
import Image from "next/image";
import { ArticleData } from "@/app/articles/[slug]/ArticleComponents/ArticleProps";
import Link from "next/link";

async function getRecommendedArticles() {
  const response = await fetch(
    `http://localhost:3000/api/articles?query=isRecommended`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) throw new Error("Failed to fetch Recommended Articles");
  return response.json();
}

const OurTopPicks = async () => {
  const RecommendedArticles: ArticleData[] = await getRecommendedArticles();
  return (
    <div className="mt-14">
      <h1 className="text-3xl font-bold mb-4">Our Top Picks</h1>
      <hr className="mb-6" />
      <div className="flex overflow-x-scroll sm:flex-row md:flex-row lg:flex-nowrap xl:flex-nowrap md:justify-center">
        {RecommendedArticles.map((article, index) => (
          <Link href={`/articles/${article.slug}`} key={index}>
            <div className="min-w-[250px] sm:min-w-[200px] md:min-w-[150px] lg:min-w-[250px] xl:min-w-[250px] h-[200px] sm:h-[150px] md:h-[150px] lg:h-[200px] xl:h-[200px] m-2">
              <div className="h-4/5 relative rounded-t-lg overflow-hidden">
                <Image
                  src={article.image.cloud.url}
                  alt={article.image.alt}
                  width={article.image.width}
                  height={article.image.height}
                />
              </div>
              <div className="h-1/5 flex items-center justify-center bg-white rounded-b-lg">
                <h3 className="text-center">{article.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurTopPicks;
