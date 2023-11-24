import { cache } from "react";
import { notFound } from "next/navigation";
import { ArticleDataProps } from "@/types/ArticleProps";
import { getArticleBySlug } from "@/lib/dbOperations";
import ArticleContent from "./ArticleRenderer";

interface Props {
  params: {
    slug: string;
  };
}

const fetchArticle = cache((slug: string) => {
  const decodedSlug = decodeURIComponent(slug);
  return getArticleBySlug(decodedSlug);
});

async function getArticle(slug: string): Promise<ArticleDataProps | null> {
  const articleData = await fetchArticle(slug);
  if (!articleData) notFound();
  return articleData;
}

export default async function ArticlePage({ params: { slug } }: Props) {
  const article = await getArticle(slug);
  if (!article) notFound();

  return (
    <div className="mx-auto max-w-screen-lg mt-24">
      <ArticleContent Article={article} />
    </div>
  );
}

export async function generateMetadata({ params: { slug } }: Props) {
  const article = await fetchArticle(slug);
  const categories = article?.categories.map((category) => category.name);
  return {
    title: article?.meta.title,
    description: article?.meta.description,
    category: categories,
    alternates: {
      canonical: `/articles/${article?.slug}`,
    },
    openGraph: {
      title: article?.meta.title,
      description: article?.meta.description,
      url: `/articles/${article?.slug}`,
      siteName: process.env.DOMAIN,
      images: [
        {
          url: article?.meta.image.cloud.url,
          alt: article?.meta.image.alt,
          width: article?.meta.image.width,
          height: article?.meta.image.height,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  };
}
