import { MongoClient, Db } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  throw new Error("MongoDB URL is not found.");
}

const client = new MongoClient(MONGODB_URI);
let isConnected = false;

async function connectToDatabase(): Promise<Db> {
  if (isConnected) {
    return client.db(); // Use the existing connection if it's already established
  }

  try {
    await client.connect();
    isConnected = true; // Set the flag to true once connected
    return client.db();
  } catch (error) {
    console.error("Connection to MongoDB failed:", error);
    throw error;
  }
}

async function closeDatabaseConnection(): Promise<void> {
  if (!isConnected) {
    return; // No need to close if it's not connected
  }

  try {
    await client.close();
    isConnected = false; // Reset the flag once the connection is closed
  } catch (error) {
    console.error("Failed to close the database connection:", error);
    throw error;
  }
}

export { connectToDatabase, closeDatabaseConnection };
