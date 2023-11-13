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
    <div className="container mx-auto">
      {/* Mobile Layout */}
      <div className="md:hidden space-y-4 mx-4 mt-24 mb-16">
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
                className="w-full h-full object-fit"
                sizes="100vw"
                width={article.image.width}
                height={article.image.height}
              />
            </div>
            <h2 className="text-2xl font-bold my-2 text-left">
              {article.title}
            </h2>
            <p className="text-sm font-normal text-gray-700 text-left">
              {mainArticle.caption}
            </p>
          </Link>
        ))}
      </div>
      {/* Tablet and Laptop Layout */}
      <div className="hidden md:block max-w-6xl mx-auto mt-32 mb-40">
        <div className="flex flex-row items-stretch gap-x-12">
          {mainArticle && (
            <Link href={`/articles/${mainArticle.slug}`} className="w-1/2">
              <div className="overflow-hidden">
                <Image
                  src={mainArticle.image.cloud.url}
                  alt={mainArticle.image.alt}
                  width={470}
                  height={360}
                  className="w-[470px] h-[360px] object-fit"
                  priority
                />
              </div>
              <h2 className="text-4xl font-bold my-4 group-hover:text-blue-600">
                {mainArticle.title}
              </h2>
              <p className="text-base font-normal text-gray-700 text-left">
                {mainArticle.caption}
              </p>
            </Link>
          )}
          {/* Right Part - Secondary Hero Articles */}
          <div className="flex-1 flex flex-col space-y-8">
            {secondaryArticles.map((article, index) => (
              <Link
                className="flex group items-center" // Center items vertically
                href={`/articles/${article.slug}`}
                key={index}
              >
                {/* Secondary Article Image */}
                <div className="w-1/3 overflow-hidden">
                  <Image
                    src={article.image.cloud.url}
                    alt={article.image.alt}
                    className="w-[185px] h-[138px] object-cover"
                    width={185}
                    height={138}
                    priority
                  />
                </div>
                {/* Secondary Article Text */}
                <div className="w-2/3 flex flex-col justify-center pl-6">
                  <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600">
                    {article.title}
                  </h2>
                  <p className="text-sm md:text-base lg:text-lg xl:text-xl font-normal text-gray-700">
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
