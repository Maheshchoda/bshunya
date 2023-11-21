"use client";
interface Props {
  error: Error;
}

const ErrorPage = ({ error }: Props) => {
  console.log("Error", error);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Something went wrong...
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          An unexpected error has occurred.Our team has been notified.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
