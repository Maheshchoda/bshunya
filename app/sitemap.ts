import { getAllArticleSlugs } from "@/lib/dbOperations";
import { categoriesList } from "./category/[category]/CategoryTabs";

export default async function sitemap() {
  const baseUrl = process.env.DOMAIN;
  const slugs = await getAllArticleSlugs();
  const NavTags = ["haircare", "skincare", "eatright", "recipes"];

  const slugUrls =
    slugs?.map((slug) => {
      return {
        url: `${baseUrl}/articles/${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.5,
      };
    }) ?? [];

  const navTagUrls = NavTags.map((tag) => {
    return {
      url: `${baseUrl}/tags/${tag}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });

  const categoriesUrls = categoriesList.map((category) => {
    return {
      url: `${baseUrl}/category/${category.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...navTagUrls,
    ...categoriesUrls,
    ...slugUrls,
    {
      url: `${baseUrl}/about/about-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about/contact-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about/disclaimer`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
