const CategorySkeleton = () => {
  const placeholderCount = 4; // Adjust based on expected article count
  const shimmerEffect =
    "animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200";

  return (
    <div className="container mx-auto max-w-screen-lg my-24 sm:my-32">
      <div className="grid grid-cols-1 gap-8">
        {Array.from({ length: placeholderCount }, (_, index) => (
          <div
            key={`article-skeleton-${index}`}
            className="bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row items-start"
          >
            {/* Image placeholder */}
            <div
              className={`${shimmerEffect} md:w-1/2 h-64 rounded my-4 md:px-4`}
            ></div>
            {/* Content placeholder */}
            <div className="p-6 md:w-1/2 flex flex-col justify-between">
              <div className={`${shimmerEffect} h-8 w-3/4 rounded mb-4`}></div>
              <div className={`${shimmerEffect} h-4 w-5/6 rounded mb-4`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySkeleton;
