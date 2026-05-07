import React, { useState } from "react";
import { FaMobileAlt, FaTshirt, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import banner from "../assets/banner.png";
import bannerDark from "../assets/bannerDark.png";
import { categories } from "../data/data";

const CategoriesDropDown = ({ darkMode, onClose }) => {
  const navigate = useNavigate();
  const [showRightPanel, setShowRightPanel] = useState(false);

  const setBrandFilter = (brand) => {
    navigate(`/${brand.toLowerCase()}`);
    onClose?.();
  };

  return (
    <div
      className="
        relative w-full
        px-3 sm:px-4 md:px-6
        flex flex-col md:flex-row gap-3
        max-w-[1600px] mx-auto
      "
    >
      {/* LEFT PANEL */}
      <div
        className={`
          w-full md:w-1/3 lg:w-1/4
          rounded-xl shadow-md
          p-3 md:p-4
          bg-black
        `}
      >
        {/* Mobiles */}
        <div className="flex items-center justify-between mb-3">
          <div
            onClick={() => setBrandFilter("mobiles")}
            className="
              flex items-center gap-2
              p-2 rounded-md
              cursor-pointer
              hover:bg-gray-600
              transition
            "
          >
            <FaMobileAlt className="w-7 h-7 p-1 rounded-full bg-[#7DB5F3] text-blue-600" />
            <span className="text-white font-medium text-sm md:text-base">
              Mobiles
            </span>
          </div>

          <FaChevronRight
            onClick={(e) => {
              e.stopPropagation();
              setShowRightPanel((p) => !p);
            }}
            className={`
              text-white cursor-pointer text-sm
              transition-transform duration-300
              ${showRightPanel ? "rotate-90" : ""}
            `}
          />
        </div>

        {/* Dresses */}
        <div
          onClick={() => setBrandFilter("dresses")}
          className="
            flex items-center gap-2
            p-2 rounded-md
            cursor-pointer
            hover:bg-gray-600
            transition
          "
        >
          <FaTshirt className="w-7 h-7 p-1 rounded-full bg-[#7DB5F3] text-blue-600" />
          <span className="text-white font-medium text-sm md:text-base">
            Dresses
          </span>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div
        className={`
          w-full flex-1
          overflow-hidden
          transition-all duration-500 ease-in-out
          ${
            showRightPanel
              ? "max-h-[700px] opacity-100 scale-100"
              : "max-h-0 opacity-0 scale-95 pointer-events-none"
          }
        `}
      >
        {showRightPanel && (
          <div
            className="
              bg-black rounded-xl shadow-md
              p-3 md:p-4
              grid grid-cols-1 md:grid-cols-2
              gap-4 md:gap-6
            "
          >
            {/* BRAND GRID */}
            <div
              className="
                order-2 md:order-1
                grid grid-cols-3
                xs:grid-cols-4
                sm:grid-cols-5
                md:grid-cols-3
                gap-3 md:gap-4
                px-2 md:px-4
                py-2
              "
            >
              {categories.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setBrandFilter(item.name)}
                  className="
                    cursor-pointer
                    text-center
                    text-xs sm:text-sm md:text-base
                    text-white
                    hover:text-blue-500
                    transition
                  "
                >
                  {["realme", "MI"].includes(item.name) ? (
                    <span
                      className={`inline-block px-2 py-1 rounded text-black text-xs sm:text-sm ${
                        item.name === "realme"
                          ? "bg-yellow-400"
                          : "bg-orange-500"
                      }`}
                    >
                      {item.name}
                    </span>
                  ) : (
                    <span className="break-words">{item.name}</span>
                  )}
                </div>
              ))}
            </div>

            {/* BANNER */}
            <div className="order-1 md:order-2 hidden md:flex items-center justify-center">
              <img
                src={darkMode ? bannerDark : banner}
                alt="Category Banner"
                className="w-full h-full max-h-[280px] object-cover rounded-xl"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesDropDown;
