const config = {
  get mongoURI() {
    const mongoURI = process.env.MONGODB_URI;
    if (!mongoURI) {
      throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
      );
    }
    return mongoURI;
  },
  get collection() {
    const collectionName = process.env.DATABASE_COLLECTION;
    if (!collectionName) {
      throw new Error(
        "The DATABASE_COLLECTION environment variable is not set."
      );
    }
    return collectionName;
  },
};

export default config;
