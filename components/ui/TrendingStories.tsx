import React from "react";
import Image from "next/image";
import trendImage from "@/public/images/Screenshot 2023-10-20 at 8.36.09 PM.png";

const TrendingStories = () => {
  return (
    <div className="p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Trending</h2>
        <hr className="border-t border-gray-300 w-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Example of a Card */}
        <div className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-row items-center space-x-4 p-6">
          <div className="relative w-full md:w-1/2 lg:w-1/3 h-32">
            <Image
              src={trendImage}
              alt="Image Description"
              className="object-cover rounded-lg"
              fill
            />
          </div>
          <div className="w-2/3 flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              My Journey Through Dating with Alopecia Areata
            </h3>
            <p className="hidden md:block text-sm text-gray-600">
              Robyn Germyn details her experiences dating and getting into
              relationships after experiencing hair loss due to alopecia areata.
            </p>
          </div>
        </div>

        <div className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-row items-center space-x-4 p-6">
          <div className="relative w-full md:w-1/2 lg:w-1/3 h-32">
            <Image
              src={trendImage}
              alt="Image Description"
              className="object-cover rounded-lg"
              fill
            />
          </div>
          <div className="w-2/3 flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              My Journey Through Dating with Alopecia Areata
            </h3>
            <p className="hidden md:block text-sm text-gray-600">
              Robyn Germyn details her experiences dating and getting into
              relationships after experiencing hair loss due to alopecia areata.
            </p>
          </div>
        </div>

        <div className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-row items-center space-x-4 p-6">
          <div className="relative w-full md:w-1/2 lg:w-1/3 h-32">
            <Image
              src={trendImage}
              alt="Image Description"
              className="object-cover rounded-lg"
              fill
            />
          </div>
          <div className="w-2/3 flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              My Journey Through Dating with Alopecia Areata
            </h3>
            <p className="hidden md:block text-sm text-gray-600">
              Robyn Germyn details her experiences dating and getting into
              relationships after experiencing hair loss due to alopecia areata.
            </p>
          </div>
        </div>

        <div className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-row items-center space-x-4 p-6">
          <div className="relative w-full md:w-1/2 lg:w-1/3 h-32">
            <Image
              src={trendImage}
              alt="Image Description"
              className="object-cover rounded-lg"
              fill
            />
          </div>
          <div className="w-2/3 flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              My Journey Through Dating with Alopecia Areata
            </h3>
            <p className="hidden md:block text-sm text-gray-600">
              Robyn Germyn details her experiences dating and getting into
              relationships after experiencing hair loss due to alopecia areata.
            </p>
          </div>
        </div>

        {/* Other cards go here */}
      </div>
    </div>
  );
};

export default TrendingStories;
