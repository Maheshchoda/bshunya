import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl md:text-2xl text-gray-600 mt-2">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block bg-blue-500 text-white text-sm md:text-base px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFoundPage;
