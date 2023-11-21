const articleClassNames = "min-w-[250px] h-[200px] m-2";
const OurTopPicksSkeleton = () => {
  const placeholderCount = 5; // Number of articles to simulate in the skeleton
  const shimmerEffect =
    "animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200";

  return (
    <div className="mt-14 relative">
      <h1 className="text-3xl font-bold mb-4">Our Top Picks</h1>
      <hr className="mb-6" />
      <div className="relative">
        {/* Skeleton for ScrollButtons could also be added here if needed */}
        <div className="scrollable-container scroll-smooth flex overflow-x-auto pb-6 space-x-2">
          {Array.from({ length: placeholderCount }, (_, index) => (
            <div
              key={`top-picks-skeleton-${index}`}
              className={`${articleClassNames} flex-shrink-0`}
            >
              <div
                className={`${shimmerEffect} relative rounded-t-lg w-full h-40`}
              ></div>
              <div className="h-16 bg-white rounded-b-lg pt-2">
                <div className={`${shimmerEffect} h-4 mt-2 mx-2 rounded`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTopPicksSkeleton;
