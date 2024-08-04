import { getArticlesByQuery } from "@/lib/dbOperations";
import getBase64 from "@/lib/plaiceHolder";
import { ArticleDataProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getHeroArticles() {
  const HeroArticles = await getArticlesByQuery(
    { isHeroArticle: true },
    { heroPosition: 1 }
  );
  if (!HeroArticles) notFound();
  return HeroArticles;
}

const fetchBase64Images = async (articles: ArticleDataProps[]) => {
  return await Promise.all(
    articles.map(async (article) => {
      const myBlurDataUrl = await getBase64(article.image.id);
      return {
        ...article,
        blurDataUrl: myBlurDataUrl,
      };
    })
  );
};
const Hero = async () => {
  const heroArticles: ArticleDataProps[] = await getHeroArticles();
  const articlesWithDataUrl = await fetchBase64Images(heroArticles);
  const mainArticle = articlesWithDataUrl[0];
  const secondaryArticles = articlesWithDataUrl.slice(1);

  return (
    <div className="container mx-auto px-1 relative">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-16 sm:mt-24 mb-16 md:mt-32 lg:mb-32 md:mb-16 justify-center">
        {/* Main Article for all viewports */}
        <Link
          href={`/articles/${mainArticle.slug}`}
          className="flex flex-col md:w-1/2 items-center py-4 px-2 md:py-0 border-b md:border-b-0 border-gray-200"
        >
          <div className="relative overflow-hidden ">
            
            <Image
            src={`/BshunyaImages/${mainArticle.image.id}.webp`}
              // src={mainArticle.image.cloud.url}
              alt={mainArticle.image.alt}
              width={520}
              height={390}
              sizes="(min-width: 1024px) 508px, (min-width: 768px) 380px, 100vw"
              placeholder="blur"
              blurDataURL={mainArticle.blurDataUrl}
              priority
              className="object-cover lg:h-96 md:h-64"
            />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-gray-100 bg-opacity-0 hover:bg-opacity-20 transition ease-in-out"></div>
          </div>
          <h1 className="sm:w-auto text-2xl md:text-4xl font-bold my-2 md:my-4 md:text-left hover:text-blue-600">
            {mainArticle.title}
          </h1>
          <p className="sm:w-auto text-sm md:text-base font-normal text-gray-700 md:text-left">
            {mainArticle.caption}
          </p>
        </Link>
        {/* Secondary Articles for all viewports */}
        <div className="flex flex-col md:flex-1 space-y-4 md:space-y-10">
          {secondaryArticles.map((article) => (
            <Link
              href={`/articles/${article.slug}`}
              key={article._id}
              className="flex flex-col items-center py-4 px-2 border-b md:flex-row md:items-start md:py-0 md:border-0 border-gray-200 "
            >
              <div className="relative overflow-hidden md:w-1/3">
                <Image
                 src={`/BshunyaImages/${article.image.id}.webp`}
                  alt={article.image.alt}
                  width={448}
                  height={256}
                  sizes="(min-width: 1024px) 153px, (min-width: 768px) 380px, 100vw"
                  placeholder="blur"
                  blurDataURL={article.blurDataUrl}
                  priority
                  className="object-cover lg:h-40 md:h-32"
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-gray-100 bg-opacity-0 hover:bg-opacity-20 transition ease-in-out"></div>
              </div>
              <div className="flex flex-col justify-center md:justify-start md:w-80 md:px-3">
                <h1 className="text-2xl md:text-xl font-bold my-2 md:my-0 hover:text-blue-600">
                  {article.title}
                </h1>
                <p className="text-sm md:text-base font-normal  md:my-2 text-gray-700">
                  {article.caption}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Hero;
