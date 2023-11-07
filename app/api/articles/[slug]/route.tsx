import { MongoClient } from "mongodb";

interface ArticleData {}

export async function GET(request: Request, context: any) {
  const {
    params: { slug },
  } = context;
  console.log("From the slug", slug);
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

async function getArticleBySlug(slug: string): Promise<ArticleData | null> {
  const MONGODB_URL = process.env.MONGODB_URL;
  if (!MONGODB_URL) throw new Error("MongoDB URL is not found.");

  const client = new MongoClient(MONGODB_URL);
  await client.connect();
  const db = client.db();

  const articlesCollection = db.collection<ArticleData>("articles");
  const article = await articlesCollection.findOne({ slug: slug });

  await client.close();

  if (!article) return null;

  // MongoDB stores _id as an ObjectID, which is not serializable to JSON.
  // If your ArticleData contains an _id field, you'll need to convert it like this:
  // article._id = article._id.toString();

  return article;
}

// import { MongoClient } from "mongodb";
// import { NextRequest, NextResponse } from "next/server";

// interface GetParams {
//   params: {
//     slug: string;
//   };
// }

// export async function GET(
//   request: NextRequest,
//   { params: { slug } }: GetParams
// ) {
//   const Article = await getArticleBySlug(slug);
//   return NextResponse.json(Article);
// }
// export async function getArticleBySlug(slug: String) {
//   if (!slug) return NextResponse.json({ message: "Null" });
//   try {
//     const MONGODB_URL = process.env.MONGODB_URL;

//     if (!MONGODB_URL) throw new Error("Mongodb URL is not found.");

//     const client = await MongoClient.connect(MONGODB_URL);
//     const db = client.db();

//     const articlesCollection = db.collection("articles");
//     const article = await articlesCollection.findOne({ slug: slug });
//     client.close();

//     if (!article) {
//       return NextResponse.json({ message: "Not Found" });
//     }

//     return JSON.parse(JSON.stringify(article));
//   } catch (error) {
//     console.log(error);
//   }
// }
