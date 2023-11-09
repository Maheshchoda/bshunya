import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Fitness", href: "fitness", logo: "" },
  { name: "Health", href: "health", logo: "" },
  { name: "Yoga", href: "yoga", logo: "" },
  { name: "Food", href: "food", logo: "" },
];

const CategoryTabs = () => {
  return (
    <div className="flex justify-between max-w-screen-lg mx-auto">
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.href}`}>
          <div className="flex flex-col items-center cursor-pointer">
            <Image
              src="/next.svg"
              width={50}
              height={50}
              alt={`${category.name} logo`}
            />
            <span>{category.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryTabs;
