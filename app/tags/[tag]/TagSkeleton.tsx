const TagSkeleton = () => {
  const placeholderCount = 4; // Adjust based on expected article count
  const shimmerEffect =
    "animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200";

  return (
    <div className="container mx-auto max-w-screen-lg my-24 sm:my-32">
      <div className="grid grid-cols-1 gap-8 mt-10">
        {Array.from({ length: placeholderCount }, (_, index) => (
          <div
            key={`tag-skeleton-${index}`}
            className="bg-white border md:rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row items-start"
          >
            {/* Image placeholder */}
            <div className={`${shimmerEffect} md:w-1/2 rounded h-72`}></div>
            {/* Text placeholder */}
            <div className="p-6 md:w-1/2 flex flex-col justify-between">
              <div className={`${shimmerEffect} h-8 w-3/4 rounded mb-4`}></div>
              <div className={`${shimmerEffect} h-4 w-5/6 rounded`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagSkeleton;
