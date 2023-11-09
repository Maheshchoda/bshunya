import {
  connectToDatabase,
  closeDatabaseConnection,
} from "../../../../database/mongodb";
import { ArticleData } from "@/app/articles/[slug]/ArticleComponents/ArticleProps";

async function getArticleBySlug(slug: string): Promise<ArticleData | null> {
  let db;
  try {
    db = await connectToDatabase();
    if (!db) throw new Error("Db is not initiated");

    const articlesCollection = db.collection<ArticleData>("completeArticle");
    const article = await articlesCollection.findOne({ slug: slug });
    return article || null;
  } catch (error) {
    console.error("Error fetching article:", error);
    throw error;
  } finally {
    await closeDatabaseConnection();
  }
}
export async function GET(request: Request, context: any) {
  const {
    params: { slug },
  } = context;
  if (!slug) {
    return new Response(JSON.stringify({ message: "Slug is required" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    const article = await getArticleBySlug(slug);
    if (!article) {
      return new Response(JSON.stringify({ message: "Article not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return new Response(JSON.stringify(article), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
