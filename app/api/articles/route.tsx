import { ArticleData } from "@/app/articles/[slug]/ArticleComponents/ArticleProps";
import {
  connectToDatabase,
  closeDatabaseConnection,
} from "../../../database/mongodb";
import { Collection } from "mongodb";
import { type NextRequest } from "next/server";

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

async function getTrendingArticles(
  articlesCollection: Collection<ArticleData>
): Promise<ArticleData | null> {
  try {
    const TrendingArticles = await articlesCollection
      .find({ isTrending: true })
      .toArray();
    return TrendingArticles || null;
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
    const collection = process.env.DATABASE_COLLECTION;
    if (!collection) throw Error("Collection is Required");

    const articlesCollection = db.collection<ArticleData>(collection);
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
    } else if (query === "isTrending") {
      const TrendingArticles = await getTrendingArticles(articlesCollection);
      if (!TrendingArticles) {
        return new Response(
          JSON.stringify({ message: "Trending Articles not found" }),
          {
            status: 404,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }
      return new Response(JSON.stringify(TrendingArticles), {
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
