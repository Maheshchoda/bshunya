import { getArticleBySlug } from "@/lib/dbOperations";
import { createApiResponse } from "@/lib/apiResponses";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  if (!slug) {
    return createApiResponse({ message: "Slug is required" }, 400);
  }

  try {
    const article = await getArticleBySlug(slug);
    if (!article) {
      return createApiResponse({ message: "Article not found" }, 404);
    }
    return createApiResponse(article);
  } catch (error) {
    console.error("Error fetching article:", error);
    return createApiResponse({ message: "Internal Server Error" }, 500);
  }
}
