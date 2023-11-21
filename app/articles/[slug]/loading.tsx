const paragraphCount = 4;
const shimmerEffect =
  "animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200";

const ArticleSkeleton = () => {
  return (
    <div className="mx-auto max-w-screen-lg mt-24 px-4">
      {/* Title placeholder */}
      <div className={`${shimmerEffect} h-8 w-3/4 rounded my-4`}></div>
      {/* Image placeholder */}
      <div
        className={`${shimmerEffect} w-full h-48 sm:h-64 md:h-96 rounded my-4`}
      ></div>
      {/* Caption placeholder */}
      <div className={`${shimmerEffect} h-6 w-1/2 rounded my-4`}></div>
      {/* Content placeholders */}
      {Array.from({ length: paragraphCount }, (_, index) => (
        <div key={index} className="flex flex-col space-y-4 my-4">
          <div className={`${shimmerEffect} h-4 w-full rounded`}></div>
          <div className={`${shimmerEffect} h-4 w-5/6 rounded`}></div>
          <div className={`${shimmerEffect} h-4 w-11/12 rounded`}></div>
        </div>
      ))}
    </div>
  );
};

export default ArticleSkeleton;
