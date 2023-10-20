import Image from "next/image";
import rightImage from "@/public/images/Screenshot 2023-10-20 at 3.13.22 PM.png";
import leftImage from "@/public/images/Screenshot 2023-10-20 at 3.13.17 PM.png";

const Hero = () => {
  return (
    <div className="container mx-auto flex justify-center items-center px-[10%] mt-12 h-[70vh] flex-col lg:flex-row">
      <div className="w-full flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 h-full">
        {/* Left Part */}
        <div className="w-full lg:w-1/2 p-4 h-full lg:h-auto">
          <div className="h-[70%] w-full overflow-hidden mb-4">
            <Image
              src={leftImage}
              alt="Left Image"
              className="w-full h-full object-cover"
              sizes="100vw"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-left h-[25%]">
            50 Shades of Self-Care: How to Give Yourself TLC for Every Occasion
          </h2>
          <p className="text-left h-[5%]">Self-care isn't selfish.</p>
        </div>
        {/* Right Part */}
        <div className="w-full lg:w-1/2 grid grid-rows-3 gap-4 h-full lg:h-auto">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white p-4 flex items-start h-full lg:h-auto"
            >
              <div className="w-2/5 h-full overflow-hidden mr-4">
                <Image
                  src={rightImage}
                  alt={`Right Image ${item}`}
                  className="w-full h-full object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="w-3/5">
                <h2 className="text-2xl text-left font-bold mb-2 h-[80%]">
                  Is Aluminum in Deodorant Something to Sweat About?
                </h2>
                <p className="h-[20%] text-left">
                  Is it *actually* bad for you?
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
