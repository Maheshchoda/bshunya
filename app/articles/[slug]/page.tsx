import { ArticleDataProps } from "@/types/ArticleProps";
import ArticleContent from "./ArticleRenderer";

async function getArticle(slug: String): Promise<ArticleDataProps | null> {
  const response = await fetch(`http://localhost:3000/api/articles/${slug}`, {
    cache: "no-store",
  });
  if (!response.ok) return null;
  return response.json();
}

export default async function ArticlePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const article = await getArticle(slug);
  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="mx-auto max-w-screen-lg mt-24">
      <ArticleContent Article={article} />
    </div>
  );
}
