import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Banner = ({ data, darkMode }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div
      className="relative flex justify-center items-center 
        w-full sm:w-full 
        h-auto sm:h-auto md:h-auto lg:h-auto 
        px-2 sm:px-4 md:px-6 lg:px-8 mt-4 md:mt-1"
    >
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className={`absolute left-0 sm:left-3  border-3
      w-8 h-8 sm:w-10 sm:h-10 
      hidden sm:flex items-center justify-center rounded-full shadow-md z-10 transition  
      ${darkMode
            ? "bg-white text-black border border-black"
            : "bg-black text-white border border-white"
          }`}
      >
        <BsArrowLeft className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className={`absolute right-0 sm:right-3  border-3
      w-8 h-8 sm:w-10 sm:h-10 
      hidden sm:flex items-center justify-center rounded-full shadow-md z-10  
      ${darkMode
            ? "bg-white text-black border border-black"
            : "bg-black text-white border border-white"
          }`}
      >
        <BsArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      {/* Images */}
      {data.map((item, idx) => (
        <img
          key={idx}
          src={slide === idx ? (darkMode ? item.dark : item.light) : item.light}
          alt={item.alt}
          className={`rounded-xl shadow-md w-full h-full object-cover ${slide === idx ? "opacity-100" : "opacity-0 absolute"
            }`}
        />
      ))}

      {/* Indicators */}
      <div className="flex absolute bottom-3 sm:bottom-4">
        {data.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlide(idx)}
            className={`h-2 w-2 rounded-full mx-1 shadow-md ${slide === idx ? "bg-white" : "bg-gray-500"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
