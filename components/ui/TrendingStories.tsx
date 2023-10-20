import React from "react";
import Image from "next/image";
import trendImage from "@/public/images/Screenshot 2023-10-20 at 8.36.09 PM.png";

const TrendingStories = () => {
  return (
    <div className="mx-auto max-w-screen-lg p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Example of a Card */}
        <div className="bg-white border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative w-20 h-20 md:w-1/4 md:h-full">
            <Image
              src={trendImage}
              alt="Image Description"
              className="object-cover rounded-lg"
              fill
            />
          </div>
          <div className="w-full flex flex-col justify-between">
            <h3 className="text-lg md:text-2xl lg:text-lg font-semibold mb-2">
              My Journey Through Dating with Alopecia Areata
            </h3>
            <p className="hidden md:block text-sm text-gray-600">
              Robyn Germyn details her experiences dating and getting into
              relationships after experiencing hair loss due to alopecia areata.
            </p>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative w-20 h-20 md:w-1/4 md:h-full">
            <Image
              src={trendImage}
              alt="Image Description"
              className="object-cover rounded-lg"
              fill
            />
          </div>
          <div className="w-full flex flex-col justify-between">
            <h3 className="text-lg md:text-2xl lg:text-lg font-semibold mb-2">
              My Journey Through Dating with Alopecia Areata
            </h3>
            <p className="hidden md:block text-sm text-gray-600">
              Robyn Germyn details her experiences dating and getting into
              relationships after experiencing hair loss due to alopecia areata.
            </p>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative w-20 h-20 md:w-1/4 md:h-full">
            <Image
              src={trendImage}
              alt="Image Description"
              className="object-cover rounded-lg"
              fill
            />
          </div>
          <div className="w-full flex flex-col justify-between">
            <h3 className="text-lg md:text-2xl lg:text-lg font-semibold mb-2">
              My Journey Through Dating with Alopecia Areata
            </h3>
            <p className="hidden md:block text-sm text-gray-600">
              Robyn Germyn details her experiences dating and getting into
              relationships after experiencing hair loss due to alopecia areata.
            </p>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative w-20 h-20 md:w-1/4 md:h-full">
            <Image
              src={trendImage}
              alt="Image Description"
              className="object-cover rounded-lg"
              fill
            />
          </div>
          <div className="w-full flex flex-col justify-between">
            <h3 className="text-lg md:text-2xl lg:text-lg font-semibold mb-2">
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
