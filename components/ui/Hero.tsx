import { ArticleDataProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

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
  const heroArticles: ArticleDataProps[] = await getHeroArticles();
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
        <div className="flex flex-row items-stretch">
          {/* Left Part - Main Hero Article */}
          {mainArticle && (
            <Link href={`/articles/${mainArticle.slug}`} className="w-1/2">
              <div
                className="overflow-hidden mb-8 relative"
                style={{ paddingTop: "56.25%" }}
              >
                <Image
                  src={mainArticle.image.cloud.url}
                  alt={mainArticle.image.alt}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  fill
                />
              </div>
              <h2 className="text-4xl font-bold mb-4">{mainArticle.title}</h2>
              <p>{mainArticle.meta.description}</p>
            </Link>
          )}
          {/* Right Part - Secondary Hero Articles */}
          <div className="w-1/2 flex flex-col space-y-8 pl-8">
            {secondaryArticles.map((article, index) => (
              <Link
                className="flex"
                href={`/articles/${article.slug}`}
                key={index}
              >
                {/* Secondary Article Image */}
                <div className="w-1/2 overflow-hidden">
                  <Image
                    src={article.image.cloud.url}
                    alt={article.image.alt}
                    className="w-full h-full object-cover"
                    width={article.image.width}
                    height={article.image.height}
                  />
                </div>
                <div className="w-1/2 pl-4 flex flex-col justify-center">
                  <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                  <p>{article.meta.description}</p>
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
