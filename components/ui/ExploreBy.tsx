import Image from "next/image";
import nutriImage from "@/public/images/Screenshot 2023-10-20 at 7.56.58 PM.png";
import Link from "next/link";

const ImageData = [
  {
    imageUrl: nutriImage,
    imageHeading: "Nutrition",
  },
  {
    imageUrl: nutriImage,
    imageHeading: "Nutrition",
  },
  {
    imageUrl: nutriImage,
    imageHeading: "Nutrition",
  },
  {
    imageUrl: nutriImage,
    imageHeading: "Nutrition",
  },
];

const ExploreBy = () => {
  return (
    <div className="container mb-10 mx-auto px-4">
      <h2 className="text-2xl font-bold mb-2 border-b-2 border-gray-300">
        Explore by
      </h2>
      <Link href="/category">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          {ImageData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                className="w-24 h-24 md:w-32 md:h-32 sm:w-28 sm:h-28 rounded-full"
                src={item.imageUrl}
                alt={item.imageHeading}
                sizes="100vw"
              />
              <p className="mt-2 text-center">{item.imageHeading}</p>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default ExploreBy;
