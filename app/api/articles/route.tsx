import {
  connectToDatabase,
  closeDatabaseConnection,
} from "../../../database/mongodb";
import { Collection } from "mongodb";
import { type NextRequest } from "next/server";

interface ArticleData {}

async function getHeroArticle(
  articlesCollection: Collection<ArticleData>
): Promise<ArticleData | null> {
  try {
    const heroArticles = await articlesCollection
      .find({ isHeroArticle: true })
      .sort({ heroPosition: 1 })
      .toArray();
    return heroArticles || null;
  } catch (error) {
    console.error("Error fetching Hero Articles:", error);
    throw error;
  }
}

export async function GET(request: NextRequest) {
  let db;
  try {
    db = await connectToDatabase();
    if (!db) throw new Error("Db is not initiated");
    const articlesCollection = db.collection<ArticleData>("articles");
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    if (query === "isHeroArticle") {
      const heroArticles = await getHeroArticle(articlesCollection);
      if (!heroArticles) {
        return new Response(
          JSON.stringify({ message: "Hero Articles not found" }),
          {
            status: 404,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }
      return new Response(JSON.stringify(heroArticles), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } finally {
    await closeDatabaseConnection();
  }
}
