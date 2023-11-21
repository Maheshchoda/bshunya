const TrendingStoriesSkeleton = () => {
  const placeholderCount = 4; // Assume 4 articles for the skeleton
  const placeholders = Array(placeholderCount).fill({});
  const shimmerEffect =
    "animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200";

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Trending</h2>
        <hr className="border-t border-gray-300 w-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8">
        {placeholders.map((_, index) => (
          <div
            key={`trending-skeleton-${index}`}
            className="w-full max-w-md px-4 py-2"
          >
            <div className="cursor-pointer bg-white border rounded-lg overflow-hidden shadow-md animate-pulse">
              <div className="flex flex-col md:flex-row md:items-start">
                <div className="w-full md:w-1/2">
                  <div
                    className={`${shimmerEffect} w-full h-36 md:h-44 rounded-t-lg md:rounded-none md:rounded-l-lg`}
                  ></div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <div
                    className={`${shimmerEffect} h-8 w-3/4 md:w-full rounded-md mb-4`}
                  ></div>
                  <div
                    className={`${shimmerEffect} h-4 w-5/6 md:w-full rounded-md`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingStoriesSkeleton;
