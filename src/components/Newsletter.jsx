import React from "react";


const Newsletter = ({ darkMode }) => {
  return (
    <div
      className={` w-full flex flex-col  pt-8 px-10 sm:px-10 shadow-md rounded-md ${darkMode ? "bg-[#121212] " : "bg-[#FAFAFA]  text-black"
        }`}
    >
      <h2 className="md:text-2xl lg:text-2xl sm:text-lg text-[#0A7DFF] mb-6 " style={{ fontFamily: '"Clash Display Variable", sans-serif' }}>
        Stay Updated with the Latest Deals!
      </h2>

      <div
        className="container mx-auto mb-6 py-4 md:py-8 sm:py-4 px-6 sm:px-6 rounded-3xl m-2"
        style={{
          background: darkMode
            ? "linear-gradient(360deg, rgba(0, 0, 0, 1) 0%, rgba(111, 178, 255, 0.5) 100%)"
            : "linear-gradient(360deg, rgba(255, 255, 255, 1) 0%, rgba(111, 178, 255, 0.5) 100%)",
        }}
      >
        <div className=" flex  justify-between sm:flex-row flex-col items-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className={`w-full sm:w-[50%] px-4 py-3 rounded-lg outline-none text-sm sm:text-base flex items-center shadow-md max-w-sm 
                ${darkMode
                ? "bg-[#121212] opacity-70 text-white placeholder:text-[#ffffff]"
                : "bg-white text-black placeholder:text-black"
              }`}
          />


          <button className="mt-3 sm:mt-0 sm:ml-4 px-2 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
