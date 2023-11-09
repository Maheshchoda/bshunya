// database/mongodb.ts
import { MongoClient, Db } from "mongodb";
import config from "@/config/index";

let client: MongoClient | null = null;
let dbInstance: Db | null = null;

async function connectToDatabase(): Promise<Db> {
  if (dbInstance) {
    return dbInstance; // If dbInstance is already created, return it
  }

  try {
    // If client is not initialized or not connected, connect it
    if (!client) {
      client = new MongoClient(config.mongoURI);
    }
    await client.connect();
    dbInstance = client.db(); // Assign the db instance after connection
    return dbInstance;
  } catch (error) {
    // Handle connection error
    console.error("Failed to connect to MongoDB", error);
    throw error;
  }
}

async function closeDatabaseConnection(): Promise<void> {
  if (client) {
    try {
      await client.close();
    } catch (error) {
      console.error("Failed to close the database connection:", error);
      throw error;
    } finally {
      client = null; // Reset the client to null after disconnection
      dbInstance = null; // Also reset the dbInstance to null
    }
  }
}

process.on("SIGINT", async () => {
  await closeDatabaseConnection();
  console.log("Application terminated. Database connection closed.");
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await closeDatabaseConnection();
  console.log("Application terminated. Database connection closed.");
  process.exit(0);
});

export { connectToDatabase, closeDatabaseConnection };
