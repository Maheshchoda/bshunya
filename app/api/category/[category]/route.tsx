import { createApiResponse } from "@/lib/apiResponses";
import { getArticlesByCategory } from "@/lib/dbOperations";

export async function GET(request: Request, context: any) {
  const category = context.params?.category;
  if (!category) {
    return createApiResponse({ message: "category is required" }, 400);
  }
  try {
    const article = await getArticlesByCategory(category);
    if (!article) {
      return createApiResponse({ message: "Article not found" }, 404);
    }
    return createApiResponse(article);
  } catch (error) {
    console.error("Error fetching article:", error);
    return createApiResponse({ message: "Internal Server Error" }, 500);
  }
}
