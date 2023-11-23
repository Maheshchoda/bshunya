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
      const myBlurDataUrl = await getBase64(article.image.cloud.url);
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
    <div className="container mx-auto md:px-1 relative">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col space-y-4 mt-16 sm:mt-24 mb-16">
        {heroArticles.map((article) => (
          <Link
            key={article._id}
            href={`/articles/${article.slug}`}
            className="flex flex-col items-center py-4 px-2 border-b border-gray-200"
          >
            <div className="overflow-hidden">
              <Image
                src={article.image.cloud.url}
                alt={article.image.alt}
                width={380}
                height={150}
                className="w-auto h-auto object-contain"
                priority
              />
            </div>
            <h2 className="max-w-md sm:w-auto text-2xl font-bold my-2 text-left">
              {article.title}
            </h2>
            <p className="max-w-md sm:w-auto text-sm font-normal text-gray-700 text-left">
              {article.caption}
            </p>
          </Link>
        ))}
      </div>
      {/* Tablet and Laptop Layout */}
      <div className="hidden md:block max-w-6xl mx-auto mt-32 lg:mb-32 md:mb-16 justify-center">
        <div className="flex flex-row items-stretch gap-x-12">
          {mainArticle && (
            <Link href={`/articles/${mainArticle.slug}`} className="w-1/2">
              <div className="relative overflow-hidden">
                <Image
                  src={mainArticle.image.cloud.url}
                  alt={mainArticle.image.alt}
                  width={520}
                  height={390}
                  sizes="(min-width: 1024px) 508px, (min-width: 768px) 380px, 100vw"
                  placeholder="blur"
                  blurDataURL={mainArticle.blurDataUrl}
                  priority
                  className="rounded object-cover w-auto h-auto lg:h-96 md:h-64"
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-gray-100 bg-opacity-0 hover:bg-opacity-20 transition ease-in-out"></div>
              </div>
              <h1 className="text-4xl font-bold my-4 hover:text-blue-600">
                {mainArticle.title}
              </h1>
              <p className="text-base font-normal text-gray-700 text-left">
                {mainArticle.caption}
              </p>
            </Link>
          )}
          {/* Right Part - Secondary Hero Articles */}
          <div className="flex flex-col flex-1 space-y-10">
            {secondaryArticles.map((article) => (
              <Link
                className="flex group items-start" // Center items vertically
                href={`/articles/${article.slug}`}
                key={article._id}
              >
                {/* Secondary Article Image */}
                <div className="relative w-1/3 overflow-hidden">
                  <Image
                    src={article.image.cloud.url}
                    alt={article.image.alt}
                    width={185}
                    height={138}
                    sizes="(min-width: 1024px) 153px, (min-width: 768px) 110px, 100vw"
                    placeholder="blur"
                    blurDataURL={article.blurDataUrl}
                    priority
                    className="rounded object-cover lg:h-40 md:h-32"
                  />
                  <div className="absolute top-0 left-0 w-full h-full hover:bg-gray-100 bg-opacity-0 hover:bg-opacity-20 transition ease-in-out"></div>
                </div>
                {/* Secondary Article Text */}
                <div className="w-2/3 flex flex-col justify-center pl-3">
                  <h1 className="md:text-lg lg:text-xl font-bold mb-2 group-hover:text-blue-600">
                    {article.title}
                  </h1>
                  <p className="text-sm md:text-base lg:text-md font-normal text-gray-700">
                    {article.caption}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
