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
  const heroArticles = await getHeroArticles();
  const mainArticle = heroArticles[0];
  const secondaryArticles = heroArticles.slice(1);

  return (
    <div className="container mx-auto mt-24 mb-24">
      {/* Mobile Layout */}
      <div className="md:hidden space-y-4">
        {heroArticles.map((article, index) => (
          <Link
            key={index}
            href={`/articles/${article.slug}`}
            className="block p-4 border-b border-gray-200"
          >
            <div className="mb-4 overflow-hidden">
              <Image
                src={article.cloud.url}
                alt={article.title}
                className="w-full h-full object-cover"
                layout="responsive"
                sizes="100vw"
                width={100}
                height={100}
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
      <div className="hidden md:block max-w-screen-lg mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-start space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Left Part - Main Hero Article */}
          {mainArticle && (
            <Link
              href={`/articles/${mainArticle.slug}`}
              className="w-full lg:w-1/2"
            >
              <div className="h-[70%] w-full overflow-hidden mb-4">
                <Image
                  src={mainArticle.cloud.url}
                  alt={mainArticle.title}
                  className="w-full h-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-left h-[25%]">
                {mainArticle.title}
              </h2>
              <p className="text-left h-[5%]">{mainArticle.meta.description}</p>
            </Link>
          )}

          {/* Right Part - Secondary Hero Articles */}
          <div className="w-full lg:w-1/2 grid md:grid-rows-2 lg:grid-rows-3 gap-4">
            {secondaryArticles.map((article, index) => (
              <Link
                key={index}
                href={`/articles/${article.slug}`}
                className="bg-white p-4 flex items-start"
              >
                <div className="w-2/5 h-full overflow-hidden mr-4">
                  <Image
                    src={article.cloud.url}
                    alt={`Article ${index}`}
                    className="w-full h-full object-cover"
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    layout="responsive"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="w-3/5">
                  <h2 className="text-2xl text-left font-bold mb-2 h-[80%]">
                    {article.title}
                  </h2>
                  <p className="h-[20%] text-left">
                    {article.meta.description}
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
