import Image from "next/image";
import Nutrition from "@/public/images/nutrition.webp";
import Yoga from "@/public/images/yoga.webp";
import Health from "@/public/images/health.webp";
import Fitness from "@/public/images/fitness.webp";
import Link from "next/link";

const ImageData = [
  {
    id: 1,
    imageSRC: Nutrition,
    imageTitle: "Nutrition",
    category: "nutrition",
  },
  {
    id: 2,
    imageSRC: Yoga,
    imageTitle: "Yoga",
    category: "yoga",
  },
  {
    id: 3,
    imageSRC: Health,
    imageTitle: "Health",
    category: "health",
  },
  {
    id: 4,
    imageSRC: Fitness,
    imageTitle: "Fitness",
    category: "fitness",
  },
];

const ExploreBy = () => {
  return (
    <div className="container mb-10 mx-auto px-4">
      <h2 className="text-2xl font-bold mb-2 border-b-2 pb-4 border-gray-300">
        Explore by
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
        {ImageData.map((item) => (
          <Link key={item.id} href={`/category/${item.category}`}>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 sm:w-28 sm:h-28 rounded-full overflow-hidden">
                <Image
                  src={item.imageSRC}
                  alt={item.imageTitle}
                  className="object-cover object-center w-full h-full"
                  width={145}
                  height={145}
                />
              </div>
              <p className="mt-2 text-base md:text-xl font-semibold text-center">
                {item.imageTitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExploreBy;
