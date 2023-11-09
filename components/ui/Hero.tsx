import { ArticleData } from "@/app/articles/[slug]/ArticleComponents/ArticleProps";
import Image from "next/image";
import Link from "next/link";

// import type { HeroArticle } from '@/path/to/types';

async function getHeroArticles() {
  const response = await fetch(
    `http://localhost:3000/api/articles?query=isHeroArticle`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) throw new Error("Failed to fetch hero articles");
  return response.json();
}

const Hero = async () => {
  const heroArticles: ArticleData[] = await getHeroArticles();
  const mainArticle = heroArticles[0];
  const secondaryArticles = heroArticles.slice(1);

  return (
    <div className="container mx-auto my-32">
      {/* Mobile Layout */}
      <div className="md:hidden space-y-4 px-4">
        {heroArticles.map((article, index) => (
          <Link
            key={index}
            href={`/articles/${article.slug}`}
            className="block p-4 border-b border-gray-200"
          >
            <div className="overflow-hidden">
              <Image
                src={article.image.cloud.url}
                alt={article.image.alt}
                className="w-full h-full object-cover"
                sizes="100vw"
                width={article.image.width}
                height={article.image.height}
              />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-left">
              {article.title}
            </h2>
            <p>{article.meta.description}</p>
          </Link>
        ))}
      </div>
      {/* Tablet and Laptop Layout */}
      <div className="hidden md:block mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-start lg:space-x-16">
          {/* Left Part - Main Hero Article */}
          {mainArticle && (
            <Link
              href={`/articles/${mainArticle.slug}`}
              className="w-full lg:w-1/2 mb-12 "
            >
              <div className="overflow-hidden">
                <Image
                  src={mainArticle.image.cloud.url}
                  alt={mainArticle.image.alt}
                  className="w-full h-full object-cover min-h-[400px]"
                  sizes="100vw"
                  width={mainArticle.image.width}
                  height={mainArticle.image.height}
                />
              </div>
              <h2 className="text-4xl font-bold mt-4 mb-2 text-left">
                {mainArticle.title}
              </h2>
              <p className="text-left">{mainArticle.meta.description}</p>
            </Link>
          )}

          {/* Right Part - Secondary Hero Articles */}
          <div className="w-full lg:w-1/2 grid grid-cols-1">
            {secondaryArticles.map((article, index) => (
              <Link
                key={index}
                href={`/articles/${article.slug}`}
                className="bg-white mb-20 flex items-start"
              >
                <div className="flex-none w-2/5 overflow-hidden mr-4">
                  <Image
                    src={article.image.cloud.url}
                    alt={article.image.alt}
                    className="w-full h-full object-cover"
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    width={article.image.width}
                    height={article.image.height}
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl text-left font-bold mb-2">
                    {article.title}
                  </h2>
                  <p className="text-left">{article.meta.description}</p>
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
