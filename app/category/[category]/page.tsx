import CategoryTabs from "./CategoryTabs";
import { Suspense } from "react";
import CategoryPageSkeleton from "./CategorySkeleton";
import Categories from "./Categories";
import { categoriesList } from "./CategoryTabs";
import { notFound } from "next/navigation";

interface Props {
  params: { category: string };
}

export const generateStaticParams = async () => {
  const categories = categoriesList.map((category) => category.href);
  return categories;
};

export async function generateMetadata({ params: { category } }: Props) {
  const title = "Explore Health & Wellness Categories";
  const description =
    "Delve into our curated categories spanning health, nutrition, yoga, and fitness. Bshunya is your sanctuary for timeless health practices and modern wellness wisdom.";
  return {
    title: title,
    description: description,
    category: "Health, Yoga, Nutrition, Fitness",
    alternates: {
      canonical: `/category/${category}`,
    },
    openGraph: {
      title: title,
      description: description,
      locale: "en_US",
      url: `/category/${category}`,
      type: "website",
      siteName: process.env.DOMAIN,
    },
  };
}

const CategoryPage = async ({ params: { category } }: Props) => {
  const categoryExists = categoriesList.some((item) => item.href === category);
  if (!categoryExists) notFound();
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
