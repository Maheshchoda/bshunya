import Link from "next/link";
import React from "react";

const FeaturedTopics = () => {
  const articles = [
    { id: 1, title: "Article 1", href: "/article1" },
    { id: 2, title: "Article 2", href: "/article2" },
    { id: 3, title: "Article 3", href: "/article3" },
    { id: 4, title: "Article 4", href: "/article4" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Featured Topics</h1>
      <hr className="mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={article.href}
            className="block p-4 border-b border-gray-300 last:border-0 text-lg font-semibold hover:text-blue-600 transition"
            passHref
          >
            {article.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTopics;
