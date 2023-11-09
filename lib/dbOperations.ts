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

export async function getArticleBySlug(
  slug: string
): Promise<ArticleDataProps | null> {
  try {
    const articlesCollection = await getCollection();
    return (await articlesCollection.findOne({ slug })) || null;
  } catch (error) {
    console.log(error);
    throw error;
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
    console.log(error);
    throw error;
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
    console.error(error);
    throw error;
  }
}
