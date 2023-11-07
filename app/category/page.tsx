"use client";
import { useState, FC } from "react";
import ArticleCard from "./ArticleCard";
import CategoryTabs from "./CategoryTabs";

interface Article {
  image: string;
  title: string;
  content: string;
  tags: string[];
  category: string;
}

const dummyArticles: Article[] = [
  {
    title: "Eat Fit and stay Fit",
    image: "/images/Screenshot 2023-10-20 at 7.56.58 PM.png",
    content: "Eat at the right time and right quantiy",
    tags: ["now", "justNow"],
    category: "Fitness",
  },
  {
    title: "Fitness is Everything",
    image: "/images/Screenshot 2023-10-20 at 7.56.58 PM.png",
    content:
      "Inorder to do anything in life, first you need to be fit, than you could have achieve something",
    tags: ["now", "justNow"],
    category: "Fitness",
  },
  {
    title: "Impact on fitness when you sleep early",
    image: "/images/Screenshot 2023-10-21 at 7.51.23 PM.png",
    content:
      "Just come in rythm with the nature, eating early will do have a large impact on the health.",
    tags: ["now", "justNow"],
    category: "Fitness",
  },
  {
    title: "hey There bro",
    image: "/images/Screenshot 2023-10-21 at 1.55.48 PM.png",
    content: "asdfasdf",
    tags: ["now", "justNow"],
    category: "Health",
  },
  {
    title: "hey There bro",
    image: "/images/Screenshot 2023-10-20 at 7.56.58 PM.png",
    content: "asdfasdf",
    tags: ["now", "justNow"],
    category: "Health",
  },
  {
    title: "hey There bro",
    image: "/images/Screenshot 2023-10-20 at 7.56.58 PM.png",
    content: "asdfasdf",
    tags: ["now", "justNow"],
    category: "Health",
  },
  {
    title: "hey There bro",
    image: "/images/Screenshot 2023-10-20 at 7.56.58 PM.png",
    content: "asdfasdf",
    tags: ["now", "justNow"],
    category: "Yoga",
  },
  {
    title: "hey There bro",
    image: "/images/Screenshot 2023-10-20 at 7.56.58 PM.png",
    content: "asdfasdf",
    tags: ["now", "justNow"],
    category: "Food",
  },
  {
    title: "hey There bro",
    image: "/images/Screenshot 2023-10-20 at 7.56.58 PM.png",
    content: "asdfasdf",
    tags: ["now", "justNow"],
    category: "Food",
  },
];

const CategoryPage: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Fitness");

  const filteredArticles = dummyArticles.filter(
    (article) => article.category === selectedCategory
  );

  return (
    <div className="mt-20 max-w-screen-lg mx-auto">
      <CategoryTabs setSelectedCategory={setSelectedCategory} />
      {filteredArticles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  );
};

export default CategoryPage;
