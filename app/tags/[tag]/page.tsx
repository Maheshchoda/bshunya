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

const TagPage = async ({ params: { tag } }: { params: { tag: string } }) => {
  const articles: ArticleDataProps[] = await fetchArticlesByTag(tag);
  return (
    <div className="container mx-auto  max-w-screen-lg my-32">
      <div className="grid grid-cols-1 gap-8">
        {articles.map((article, index) => (
          <Link href={`/articles/${article.slug}`} key={index}>
            <div className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row items-center space-x-0 md:space-x-4 p-6">
              <div className="relative w-full h-32">
                <Image
                  src={article.image.cloud.url}
                  alt={article.image.alt}
                  width={article.image.width}
                  height={article.image.height}
                />
              </div>
              <div className="flex flex-col justify-center w-full">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {article.meta.description}
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
