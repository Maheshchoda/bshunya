import React from "react";
import ArticleContent from "./ArticleRenderer";

async function getArticle(slug) {
  const response = await fetch(
    "http://localhost:3000/api/articles" + "/" + slug,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) return null;
  return response.json();
}

const ArticlePage = async (slug) => {
  const Article = await getArticle("how-to-deal-with-something");
  console.log(Article, "From the Render Page");
  return <ArticleContent content={Article.content.root.children} />;
};

export default ArticlePage;
