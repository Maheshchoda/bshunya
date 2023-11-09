const config = {
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
