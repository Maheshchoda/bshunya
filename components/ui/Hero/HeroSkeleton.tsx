const Skeleton = () => {
  const mobileArticlesCount = 4;
  const secondaryArticleCount = 3;
  const mobilePlaceholder = Array(mobileArticlesCount).fill({});
  const secondaryPlaceholder = Array(secondaryArticleCount).fill({});

  // Define a shimmer effect using Tailwind CSS gradients
  const shimmerEffect =
    "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200";

  return (
    <div className="container mx-auto md:px-1 relative">
      {/* Mobile Layout Skeleton */}
      <div className="md:hidden flex flex-col space-y-4 mt-16 sm:mt-24 mb-16">
        {mobilePlaceholder.map((_, index) => (
          <div
            key={`mobile-skeleton-${index}`}
            className="flex flex-col items-center py-4 px-2 border-b border-gray-200 animate-pulse"
          >
            <div
              className={`${shimmerEffect} w-full h-40 rounded bg-gray-200`}
            ></div>
            <div className={`${shimmerEffect} mt-2 w-3/4 h-6 rounded`}></div>
            <div className={`${shimmerEffect} mt-1 w-1/2 h-4 rounded`}></div>
          </div>
        ))}
      </div>
      {/* Tablet and Laptop Layout Skeleton */}
      <div className="hidden md:block max-w-6xl mx-auto mt-32 lg:mb-32 md:mb-16 justify-center animate-pulse">
        <div className="flex flex-row items-stretch gap-x-12">
          {/* Main Article Skeleton */}
          <div className="w-1/2">
            <div
              className={`${shimmerEffect} w-full h-96 rounded bg-gray-200`}
            ></div>
            <div className={`${shimmerEffect} mt-4 w-3/4 h-12 rounded`}></div>
            <div className={`${shimmerEffect} mt-2 w-1/2 h-6 rounded`}></div>
          </div>
          {/* Secondary Articles Skeleton */}
          <div className="flex flex-col flex-1 space-y-10">
            {secondaryPlaceholder.map((_, index) => (
              <div
                key={`secondary-skeleton-${index}`}
                className="flex items-center"
              >
                <div
                  className={`${shimmerEffect} w-1/3 h-32 rounded bg-gray-200`}
                ></div>
                <div className="w-2/3 pl-3 flex flex-col justify-center">
                  <div
                    className={`${shimmerEffect} mt-2 w-3/4 h-6 rounded`}
                  ></div>
                  <div
                    className={`${shimmerEffect} mt-1 w-1/2 h-4 rounded`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
