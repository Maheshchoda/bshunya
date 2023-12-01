import Link from "next/link";
import React from "react";

const FeaturedTopics = () => {
  const articles = [
    {
      id: 1,
      title: "Ditch Late Dinners: The Surprising Secret to Better Health!",
      slug: "/articles/drawbacks-late-night-dining",
    },
    {
      id: 2,
      title: "Discover Time-Honored Oil Extraction Techniques Today!",
      slug: "/articles/traditional-oils-brain-health-connection",
    },
    {
      id: 3,
      title: "Exposed: The Real Scoop on Iodized Salt!",
      slug: "/articles/health-risks-commercial-flowing-salts",
    },
    {
      id: 4,
      title: "Organic Morning Feast: Vitality Through Nature",
      slug: "/articles/hydration-high-water-foods",
    },
    {
      id: 5,
      title: "Reviving Gut Health with Ancient Wisdom",
      slug: "/articles/microbial-diversity-traditional-indian-diet",
    },

    {
      id: 6,
      title: "Unlock Health Secrets: Millets Revolutionize Wellness!",
      slug: "/articles/protein-rich-italian-millet-benefits",
    },
  ];

  return (
    <div className="p-4 mt-6">
      <h1 className="text-3xl font-bold mb-4">Featured Topics</h1>
      <hr className="mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={article.slug}
            className="block p-4 border-b border-gray-300 text-lg font-semibold hover:text-blue-600 transition"
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
