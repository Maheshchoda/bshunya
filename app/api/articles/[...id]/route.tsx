import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

interface GetParams {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: GetParams) {
  const Article = await getArticleBySlug(params.id[0]);
  return NextResponse.json(Article);
}
export async function getArticleBySlug(slug: String) {
  if (!slug) return null;
  try {
    const MONGODB_URL = process.env.MONGODB_URL;

    if (!MONGODB_URL) throw new Error("Mongodb URL is not found.");

    const client = await MongoClient.connect(MONGODB_URL);
    const db = client.db();

    const articlesCollection = db.collection("articles");
    const article = await articlesCollection.findOne({ slug: slug });
    client.close();

    if (!article) {
      return { notFound: true };
    }
    return JSON.parse(JSON.stringify(article));
  } catch (error) {
    console.log(error);
  }
}
