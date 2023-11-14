import React from "react";
import Image from "next/image";
import { ArticleDataProps } from "@/types";
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

const articleClassNames = "min-w-[250px] h-[200px] m-2";

const OurTopPicks = async () => {
  const RecommendedArticles: ArticleDataProps[] =
    await getRecommendedArticles();

  return (
    <div className="mt-14">
      <h1 className="text-3xl font-bold mb-4">Our Top Picks</h1>
      <hr className="mb-6" />
      <div className="flex overflow-x-auto pb-6 pl-2 space-x-2">
        {RecommendedArticles.map((article, index) => (
          <Link href={`/articles/${article.slug}`} key={index}>
            <div className={`${articleClassNames} flex-shrink-0`}>
              <div className="relative rounded-t-lg overflow-hidden h-4/5">
                <Image
                  src={article.image.cloud.url}
                  alt={article.image.alt}
                  width={260}
                  height={190}
                />
              </div>
              <div className="h-1/5 flex items-center justify-center bg-white rounded-b-lg pt-2">
                <h3 className="text-left text-sm font-semibold text-gray-800 p-2">
                  {article.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurTopPicks;
