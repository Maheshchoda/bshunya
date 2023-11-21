import CategoryTabs from "./CategoryTabs";
import { Suspense } from "react";
import CategoryPageSkeleton from "./CategorySkeleton";
import Categories from "./Categories";

const CategoryPage = async ({
  params: { category },
}: {
  params: { category: string };
}) => {
  return (
    <div className="container mx-auto  max-w-screen-lg my-24 sm:my-32">
      <CategoryTabs selectedCategory={category} />
      <Suspense fallback={<CategoryPageSkeleton />}>
        <Categories category={category} />
      </Suspense>
    </div>
  );
};

export default CategoryPage;
