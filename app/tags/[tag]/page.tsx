import { ArticleDataProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

async function fetchArticlesByTag(tag: string) {
  const response = await fetch(`http://localhost:3000/api/tags/${tag}`, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Failed to fetch articles by given tag");
  return response.json();
}

function getTitleAndCaption(tag: string) {
  let tagPageTitle = "";
  let tagPageCaption = "";
  if (tag === "haircare") {
    tagPageTitle = "Hair Care";
    tagPageCaption =
      "Explore expert tips and natural remedies to revitalize your hair's health and shine.";
  } else if (tag === "skincare") {
    tagPageTitle = "Skin Care";
    tagPageCaption = "Discover Purity and Balance for Your Skin'sBliss";
  } else if (tag === "eatright") {
    tagPageTitle = "Healthy Bites";
    tagPageCaption = "Eat Smart, Live Strong: Your Diet, Your Wellness";
  } else if (tag === "recipes") {
    tagPageTitle = "Yummy Healthful Treats";
    tagPageCaption = "Where Good Taste and Good Health Unite.";
  }

  return { tagPageTitle, tagPageCaption };
}

const TagPage = async ({ params: { tag } }: { params: { tag: string } }) => {
  const articles: ArticleDataProps[] = await fetchArticlesByTag(tag);
  const { tagPageTitle, tagPageCaption } = getTitleAndCaption(tag);
  return (
    <div className="container mx-auto  max-w-screen-lg my-24 sm:my-32">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-center font-bold  text-gray-800">
        {tagPageTitle}
      </h2>
      <h4 className="text-xl md:text-2xl lg:text-3xl font-sans text-center font-medium my-10 text-gray-600">
        {tagPageCaption}
      </h4>

      <div className="grid grid-cols-1 gap-8">
        {articles.map((article, index) => (
          <Link href={`/articles/${article.slug}`} key={index}>
            <div className="bg-white border md:rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row items-start">
              <div className="md:w-1/2 relative">
                <Image
                  src={article.image.cloud.url}
                  alt={article.image.alt}
                  className="h-auto w-auto md:h-72 object-cover"
                  width={511}
                  height={292}
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-gray-100 bg-opacity-0 hover:bg-opacity-20 transition ease-in-out"></div>
              </div>
              <div className="p-6 md:w-1/2 flex flex-col justify-between">
                <h3 className="lg:text-4xl md-lg:text-3xl md:text-2xl font-semibold text-gray-800 leading-snug mb-4">
                  {article.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 text-left">
                  {article.caption}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TagPage;
