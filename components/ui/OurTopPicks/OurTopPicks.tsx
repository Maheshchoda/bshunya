import Image from "next/image";
import { ArticleDataProps } from "@/types";
import Link from "next/link";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { getArticlesByQuery } from "@/lib/dbOperations";

// Dynamically import the ScrollButtons with SSR turned off
const ScrollButtons = dynamic(() => import("./ScrollButtons"), {
  ssr: false,
});

async function getRecommendedArticles() {
  const RecommendedArticles = await getArticlesByQuery({ isRecommended: true });
  if (!RecommendedArticles) notFound();
  return RecommendedArticles;
}

const articleClassNames = "min-w-[250px] h-[200px] m-2";

const OurTopPicks = async () => {
  const RecommendedArticles: ArticleDataProps[] =
    await getRecommendedArticles();

  return (
    <div className="mt-14 relative">
      <h1 className="text-3xl font-bold mb-4">Our Top Picks</h1>
      <hr className="mb-6" />
      <div className="relative">
        <ScrollButtons />
        <div className="scrollable-container scroll-smooth flex overflow-x-auto pb-6 space-x-2">
          {RecommendedArticles.map((article) => (
            <Link href={`/articles/${article.slug}`} key={article._id}>
              <div className={`${articleClassNames} flex-shrink-0`}>
                <div className="relative rounded-t-lg overflow-hidden">
                  <Image
                  src={`/BshunyaImages/${article.image.id}.webp`}
                    alt={article.image.alt}
                    width={260}
                    height={149}
                    sizes="(min-width: 425px) 260px, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full hover:bg-gray-100 bg-opacity-0 hover:bg-opacity-20 transition ease-in-out"></div>
                </div>
                <div className="h-16 flex items-center justify-center bg-white rounded-b-lg pt-2">
                  <h2 className="text-left text-sm font-semibold text-gray-800 hover:text-blue-600 p-2">
                    {article.title}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTopPicks;
