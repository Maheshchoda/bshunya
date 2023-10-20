import Image from "next/image";
import rightImage from "@/public/images/Screenshot 2023-10-20 at 3.13.22 PM.png";
import leftImage from "@/public/images/Screenshot 2023-10-20 at 3.13.17 PM.png";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 mt-12">
      {/* Mobile Layout */}
      <div className="md:hidden space-y-4">
        {[leftImage, rightImage, rightImage, rightImage].map((image, index) => (
          <div key={index} className="p-4 border-b border-gray-200">
            <div className="mb-4 overflow-hidden">
              <Image
                src={image}
                alt={`Image ${index}`}
                className="w-full h-full object-cover"
                sizes="100vw"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-left">
              {index === 0
                ? "50 Shades of Self-Care: How to Give Yourself TLC for Every Occasion"
                : "Is Aluminum in Deodorant Something to Sweat About?"}
            </h2>
            <p>
              {index === 0
                ? "Self-care isn't selfish."
                : "Is it *actually* bad for you?"}
            </p>
          </div>
        ))}
      </div>

      {/* Tablet and Laptop Layout */}
      <div className="hidden md:block lg:flex justify-center items-start space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Left Part */}
        <div className="w-full lg:w-1/2 p-4">
          <div className="h-[50%] md:h-[70%] lg:h-[70%] w-full overflow-hidden mb-4">
            <Image
              src={leftImage}
              alt="Left Image"
              className="w-full h-full object-cover"
              sizes="100vw"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-left">
            50 Shades of Self-Care: How to Give Yourself TLC for Every Occasion
          </h2>
          <p>Self-care isn't selfish.</p>
        </div>
        {/* Right Part */}
        <div className="w-full lg:w-1/2 grid md:grid-rows-2 lg:grid-rows-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-4 flex items-start">
              <div className="w-2/5 h-full overflow-hidden mr-4">
                <Image
                  src={rightImage}
                  alt={`Right Image ${item}`}
                  className="w-full h-full object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="w-3/5">
                <h2 className="text-2xl text-left font-bold mb-2">
                  Is Aluminum in Deodorant Something to Sweat About?
                </h2>
                <p>Is it *actually* bad for you?</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
