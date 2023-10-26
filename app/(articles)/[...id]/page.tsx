import React from "react";
import ArticleContent from "./ArticleRenderer";
import Article from "./Article";

const ArticlePage = () => {
  return <ArticleContent content={Article.content.root.children} />;
};

export default ArticlePage;
