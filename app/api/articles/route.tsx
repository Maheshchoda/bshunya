import { type NextRequest } from "next/server";
import { createApiResponse } from "@/lib/apiResponses";
import { getArticlesByQuery } from "@/lib/dbOperations";
import { Sort } from "mongodb";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const queryKey = searchParams.get("query");

    // Define the query and sorting options
    let query: { [key: string]: boolean } = {};
    let sort: Sort | undefined;

    switch (queryKey) {
      case "isHeroArticle":
        query = { isHeroArticle: true };
        sort = { heroPosition: 1 };
        break;
      case "isTrending":
        query = { isTrending: true };
        break;
      case "isRecommended":
        query = { isRecommended: true };
        break;
      default:
        return createApiResponse(
          { message: "Query parameter is invalid" },
          400
        );
    }

    const articles = await getArticlesByQuery(query, sort);

    if (articles?.length === 0) {
      return createApiResponse({ message: "No articles found" }, 404);
    }
    return createApiResponse(articles);
  } catch (error) {
    console.error("GET request error:", error);
    return createApiResponse({ message: "Internal Server Error" }, 500);
  }
}
