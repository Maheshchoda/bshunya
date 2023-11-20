"use client";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect, useState } from "react";

const ScrollButtons = () => {
  const [scrollContainer, setScrollContainer] = useState<HTMLDivElement | null>(
    null
  );

  useEffect(() => {
    const container = document.querySelector(
      ".scrollable-container"
    ) as HTMLDivElement;
    setScrollContainer(container);
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainer) {
      const scrollAmount =
        direction === "left"
          ? -scrollContainer.offsetWidth
          : scrollContainer.offsetWidth;
      scrollContainer.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-between md:px-2 mb-12">
      <button
        className="z-20 bg-white bg-opacity-70 rounded-full p-3 hover:bg-opacity-90 transition-opacity duration-300 flex items-center justify-center"
        onClick={() => handleScroll("left")}
        aria-label="Scroll left"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        className="z-20 bg-white bg-opacity-70 rounded-full p-3 hover:bg-opacity-90 transition-opacity duration-300 flex items-center justify-center"
        onClick={() => handleScroll("right")}
        aria-label="Scroll right"
      >
        <FiChevronRight size={24} />
      </button>
    </div>
  );
};

export default ScrollButtons;
