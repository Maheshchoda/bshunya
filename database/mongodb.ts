import { MongoClient, Db } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  throw new Error("MongoDB URL is not found.");
}
const client = new MongoClient(MONGODB_URI);

async function connectToDatabase(): Promise<Db> {
  try {
    await client.connect();
    return client.db();
  } catch (error) {
    console.error("Connection to MongoDB failed:", error);
    throw error;
  }
}

async function closeDatabaseConnection(): Promise<void> {
  try {
    await client.close();
  } catch (error) {
    console.error("Failed to close the database connection:", error);
    throw error;
  }
}

export { connectToDatabase, closeDatabaseConnection };
