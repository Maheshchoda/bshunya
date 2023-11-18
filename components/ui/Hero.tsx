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
        {heroArticles.map((article) => (
          <Link
            key={article._id}
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
            <h2 className="text-2xl font-bold my-2 text-left">
              {article.title}
            </h2>
            <p className="text-sm font-normal text-gray-700 text-left">
              {article.caption}
            </p>
          </Link>
        ))}
      </div>
      {/* Tablet and Laptop Layout */}
      <div className="hidden md:block max-w-6xl mx-auto mt-32 lg:mb-32 md:mb-16">
        <div className="flex flex-row items-stretch gap-x-12">
          {mainArticle && (
            <Link href={`/articles/${mainArticle.slug}`} className="w-1/2">
              <div className="overflow-hidden relative h-[100px] lg:h-[380px] md:h-[280px]">
                <Image
                  src={mainArticle.image.cloud.url}
                  alt={mainArticle.image.alt}
                  fill
                  sizes="100vw"
                  className="rounded object-cover"
                  priority
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-gray-100 bg-opacity-0 hover:bg-opacity-20 transition ease-in-out"></div>
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
          <div className="flex flex-col flex-1 space-y-10">
            {secondaryArticles.map((article) => (
              <Link
                className="flex group items-center" // Center items vertically
                href={`/articles/${article.slug}`}
                key={article._id}
              >
                {/* Secondary Article Image */}
                <div className="relative w-1/3 h-28 lg:w-56 lg:h-40 md:w-30  md:h-36 overflow-hidden ">
                  <Image
                    src={article.image.cloud.url}
                    alt={article.image.alt}
                    className="rounded object-cover"
                    fill
                    sizes="100vw"
                    priority
                  />
                  <div className="absolute top-0 left-0 w-full h-full hover:bg-gray-100 bg-opacity-0 hover:bg-opacity-20 transition ease-in-out"></div>
                </div>
                {/* Secondary Article Text */}
                <div className="w-2/3 flex flex-col justify-center pl-3">
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
