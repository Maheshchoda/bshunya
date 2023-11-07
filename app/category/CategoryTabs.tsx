import { FC } from "react";
import Image from "next/image";

interface Category {
  name: string;
  logo: string;
}

const categories: Category[] = [
  { name: "Fitness", logo: "" },
  { name: "Health", logo: "" },
  { name: "Yoga", logo: "" },
  { name: "Food", logo: "" },
];

interface CategoryTabsProps {
  setSelectedCategory: (category: string) => void;
}

const CategoryTabs: FC<CategoryTabsProps> = ({ setSelectedCategory }) => {
  return (
    <div className="flex justify-between max-w-screen-lg mx-auto">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => setSelectedCategory(category.name)}
        >
          <Image
            src="/next.svg"
            width={50}
            height={50}
            alt={`${category.name} logo`}
          />
          <span>{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryTabs;
