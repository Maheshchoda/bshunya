import { Sort } from "mongodb";
import { connectToDatabase } from "@/database/mongodb";
import { ArticleDataProps } from "@/types/ArticleProps";
import config from "@/config/index";

async function getCollection() {
  const db = await connectToDatabase();
  if (!db) {
    throw new Error("Failed to connect to the database");
  }
  return db.collection<ArticleDataProps>(config.collection);
}

export async function getAllArticleSlugs(): Promise<string[]> {
  try {
    const articlesCollection = await getCollection();
    // Use projection to return only the 'slug' field from each document
    const slugs = await articlesCollection
      .find({}, { projection: { _id: 0, slug: 1 } })
      .toArray();
    return slugs.map((doc) => doc.slug);
  } catch (error) {
    console.error("Error retrieving all article slugs:", error);
    throw new Error(
      "Unable to retrieve article slugs. Please try again later."
    );
  }
}

export async function getArticleBySlug(
  slug: string
): Promise<ArticleDataProps | null> {
  try {
    const articlesCollection = await getCollection();
    return (await articlesCollection.findOne({ slug })) || null;
  } catch (error) {
    console.error("Error retrieving article by slug:", error);
    throw new Error("Unable to retrieve the article. Please try again later.");
  }
}

export async function getArticlesByQuery(
  query: { [key: string]: boolean },
  sort?: Sort
): Promise<ArticleDataProps[] | null> {
  try {
    const articlesCollection = await getCollection();
    const cursor = articlesCollection.find(query);
    if (sort) {
      cursor.sort(sort);
    }
    return cursor.toArray() || null;
  } catch (error) {
    console.error("Error retrieving articles with query:", error);
    throw new Error("Unable to retrieve articles. Please try again later.");
  }
}

export async function getArticlesByTag(
  tag: string
): Promise<ArticleDataProps[] | null> {
  try {
    const articlesCollection = await getCollection();
    const articles = await articlesCollection
      .find({
        "tags.tag": tag,
      })
      .toArray();
    if (articles.length === 0) return null;
    return articles;
  } catch (error) {
    console.error("Error retrieving articles with tag:", error);
    throw new Error("Unable to retrieve articles. Please try again later.");
  }
}

export async function getArticlesByCategory(
  category: string
): Promise<ArticleDataProps[] | null> {
  try {
    const articlesCollection = await getCollection();
    const articles = await articlesCollection
      .find({
        "categories.name": category,
      })
      .toArray();
    if (articles.length === 0) return null;
    return articles;
  } catch (error) {
    console.error("Error retrieving articles with category:", error);
    throw new Error("Unable to retrieve articles. Please try again later.");
  }
}
