import React from "react";
import Image from "next/image";
import ourTopPick from "@/public/images/Screenshot 2023-10-21 at 1.55.48 PM.png";

const data = [
  {
    imageSrc: ourTopPick,
    altText: "description",
    heading: "Your Heading",
  },
  {
    imageSrc: ourTopPick,
    altText: "description",
    heading: "Your Heading",
  },
  {
    imageSrc: ourTopPick,
    altText: "description",
    heading: "Your Heading",
  },
  {
    imageSrc: ourTopPick,
    altText: "description",
    heading: "Your Heading",
  },
];

const OurTopPicks = () => {
  return (
    <div className="mt-14">
      <h1 className="text-3xl font-bold mb-4">Our Top Picks</h1>
      <hr className="mb-6" />
      <div className="flex overflow-x-scroll sm:flex-row md:flex-row lg:flex-nowrap xl:flex-nowrap md:justify-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="min-w-[250px] sm:min-w-[200px] md:min-w-[150px] lg:min-w-[250px] xl:min-w-[250px] h-[200px] sm:h-[150px] md:h-[150px] lg:h-[200px] xl:h-[200px] m-2"
          >
            <div className="h-4/5 relative rounded-t-lg overflow-hidden">
              <Image
                src={item.imageSrc}
                alt={item.altText}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="h-1/5 flex items-center justify-center bg-white rounded-b-lg">
              <h3 className="text-center">{item.heading}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTopPicks;
