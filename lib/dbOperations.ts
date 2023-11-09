import { connectToDatabase, closeDatabaseConnection } from "@/database/mongodb";
import { ArticleData } from "@/types/ArticleProps";
import config from "@/config/index";

export async function getArticleBySlug(
  slug: string
): Promise<ArticleData | null> {
  try {
    const db = await connectToDatabase();
    if (!db) {
      throw new Error("Failed to connect to the database");
    }
    console.log("from the config", config);
    const articlesCollection = db.collection<ArticleData>(config.collection);
    return (await articlesCollection.findOne({ slug: slug })) || null;
  } finally {
    await closeDatabaseConnection();
  }
}
