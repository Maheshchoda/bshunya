import { ArticleDataProps } from "@/types/ArticleProps";
import ArticleContent from "./ArticleRenderer";
import { notFound } from "next/navigation";
import { getArticleBySlug } from "@/lib/dbOperations";

async function getArticle(slug: string): Promise<ArticleDataProps | null> {
  const decodedSlug = decodeURIComponent(slug);
  const articleData = await getArticleBySlug(decodedSlug);
  if (!articleData) notFound();
  return articleData;
}

export default async function ArticlePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const article = await getArticle(slug);
  if (!article) notFound();

  return (
    <div className="mx-auto max-w-screen-lg mt-24">
      <ArticleContent Article={article} />
    </div>
  );
}
