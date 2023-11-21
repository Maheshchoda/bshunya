const FeaturedSkeleton = () => {
  const placeholderCount = 6; // Number of articles to simulate in the skeleton
  const shimmerEffect =
    "animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200";

  return (
    <div className="p-4 mt-6">
      <h1 className="text-3xl font-bold mb-4">Featured Topics</h1>
      <hr className="mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {Array.from({ length: placeholderCount }, (_, index) => (
          <div
            key={`featured-topic-skeleton-${index}`}
            className={`${shimmerEffect} block p-4 border-b border-gray-300 text-lg font-semibold rounded`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSkeleton;
