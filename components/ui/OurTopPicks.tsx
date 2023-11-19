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
        {RecommendedArticles.map((article) => (
          <Link href={`/articles/${article.slug}`} key={article._id}>
            <div className={`${articleClassNames} flex-shrink-0`}>
              <div className="relative rounded-t-lg overflow-hidden h-40">
                <Image
                  src={article.image.cloud.url}
                  alt={article.image.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-gray-100 bg-opacity-0 hover:bg-opacity-20 transition ease-in-out"></div>
              </div>
              <div className="h-16 flex items-center justify-center bg-white rounded-b-lg pt-2">
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
