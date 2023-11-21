import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4 bg-gray-50">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
        Article Not Found
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-600">
        The article you&apos;re looking for may have been removed or is
        temporarily unavailable.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block bg-blue-500 text-white text-sm md:text-base px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
