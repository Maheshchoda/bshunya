import React from "react";
import ArticleContent from "./ArticleRenderer";

interface Props {
  params: {
    slug: string;
  };
}

async function getArticle(slug: String) {
  const response = await fetch(`http://localhost:3000/api/articles/${slug}`, {
    cache: "no-store",
  });
  if (!response.ok) return null;
  return response.json();
}

const ArticlePage = async ({ params: { slug } }: Props) => {
  const Article = await getArticle(slug);
  return (
    <div className="mx-auto max-w-screen-lg mt-24">
      <ArticleContent content={Article.content.root.children} />
    </div>
  );
};

export default ArticlePage;
