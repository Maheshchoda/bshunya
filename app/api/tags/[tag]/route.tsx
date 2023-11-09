import { createApiResponse } from "@/lib/apiResponses";
import { getArticlesByTag } from "@/lib/dbOperations";

export async function GET(request: Request, context: any) {
  const tag = context.params?.tag;
  if (!tag) {
    return createApiResponse({ message: "tag is required" }, 400);
  }
  try {
    const article = await getArticlesByTag(tag);
    if (!article) {
      return createApiResponse({ message: "Article not found" }, 404);
    }
    return createApiResponse(article);
  } catch (error) {
    console.error("Error fetching article:", error);
    return createApiResponse({ message: "Internal Server Error" }, 500);
  }
}
