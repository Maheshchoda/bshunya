import Link from "next/link";

const categories = [
  { name: "Nutrition", href: "nutrition" },
  { name: "Yoga", href: "yoga" },
  { name: "Health", href: "health" },
  { name: "Fitness", href: "fitness" },
];

const CategoryTabs = ({ selectedCategory }: { selectedCategory: string }) => {
  return (
    <div className="flex justify-center mx-auto max-w-2xl w-full mb-8 sm:mb-12">
      <div className="flex justify-between space-x-1 rounded-lg shadow w-full border p-2">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/category/${category.href}`}
            passHref
          >
            <div
              className={`flex-1 text-center py-2 px-2 text-sm sm:text-base md:text-lg font-medium rounded-md transition duration-200 ease-in-out ${
                selectedCategory === category.href
                  ? "bg-[#0f0f0f] text-white"
                  : "bg-[rgba(0,0,0,0.05)] text-[#0f0f0f] hover:bg-[rgba(26,26,24,0.1)]"
              }`}
            >
              {category.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
