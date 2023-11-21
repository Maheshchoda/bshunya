const Skeleton = () => {
  const placeholderCount = 4; // The number of items you have
  const placeholders = Array(placeholderCount).fill({});
  const shimmerEffect =
    "animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200";

  return (
    <div className="container mb-10 mx-auto px-4">
      <h2 className="text-2xl font-bold mb-2 border-b-2 pb-4 border-gray-300">
        Explore by
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
        {placeholders.map((_, index) => (
          <div
            key={`explore-skeleton-${index}`}
            className="flex flex-col items-center"
          >
            <div
              className={`${shimmerEffect} w-24 h-24 md:w-32 md:h-32 sm:w-28 sm:h-28 rounded-full overflow-hidden`}
            ></div>
            <div
              className={`${shimmerEffect} mt-2 h-6 w-3/4 md:w-full rounded-md`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;
