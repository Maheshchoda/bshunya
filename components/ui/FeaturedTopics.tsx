import Link from "next/link";
import React from "react";

const FeaturedTopics = () => {
  const articles = [
    {
      id: 1,
      title: "Ditch Late Dinners: The Surprising Secret to Better Health!",
      slug: "/articles/midnight-feasts-vs.-sunrise-eats:-the-best-time-to-have-your-big-meal",
    },
    {
      id: 2,
      title: "Discover Time-Honored Oil Extraction Techniques Today!",
      slug: "/articles/reviving-tradition:-the-power-of-pure-oils-in-health-and-community",
    },
    {
      id: 3,
      title: "Exposed: The Real Scoop on Iodized Salt!",
      slug: "/articles/exposed:-the-real-scoop-on-iodized-salt!",
    },
    {
      id: 4,
      title: "Organic Morning Feast: Vitality Through Nature",
      slug: "/articles/nature's-bounty-breakfast:-energise-your-day-the-organic-way",
    },
    {
      id: 5,
      title: "Reviving Gut Health with Ancient Wisdom",
      slug: "/articles/cultivating-gut-health:-beyond-probiotics-to-traditional-indian-wisdom",
    },

    {
      id: 6,
      title: "Unlock Health Secrets: Millets Revolutionize Wellness!",
      slug: "/articles/balancing-our-health:-microbial,-glucose,-and-hormone-harmony-through-diet",
    },
  ];

  return (
    <div className="p-4">
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
