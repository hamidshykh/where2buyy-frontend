import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaAngleDown } from 'react-icons/fa';
import daraz from "../assets/daraz.svg";
import homeshopping from "../assets/homeshopping.svg";
import mobilemall from "../assets/mobilemall.svg";
import pakmobizone from "../assets/pakmobizone.svg";
import priceoye from "../assets/priceoye.svg";


const siteLogos = {
  daraz,
  homeshopping,
  mobilemall,
  pakmobizone,
  priceoye,
};


const ProductDetailedCard = ({ product, darkMode }) => {
  const navigate = useNavigate();
  const [expandedStores, setExpandedStores] = useState({});

  const baseCardStyle = darkMode ? "bg-[#2A2C38] text-white" : "bg-white text-black";
  const extraCardStyle = darkMode ? "bg-[#1F1F2E] text-white" : "bg-blue-50 text-black";

  const toggleExpand = (storeIndex) => {
  setExpandedStores((prev) => ({
      ...prev,
      [storeIndex]: !prev[storeIndex],
    }));
  };

  return (
    <>
      {product.variants.length > 0 && (
        product.variants.map((storeVariants, storeIndex) => (
          storeVariants.length > 0 && (
            <div key={storeIndex} className="mb-4 last:mb-0">
              {storeVariants[0] && (
                <div
                  className={`w-full container mx-auto rounded-2xl shadow-md p-4 my-4 ${baseCardStyle}`}
                >
                  <div key={0} className="mb-4 last:mb-0">
                    {/* Mobile Layout */}
                    <div className="block lg:hidden">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1 pr-3">
                          <h2 className="text-lg font-semibold mb-1 leading-tight">
                            {storeVariants[0].title}
                          </h2>
                          <p className="text-sm text-gray-500 font-inter line-clamp-2">
                            {storeVariants[0].description}  {/* Fixed: Use description */}
                          </p>
                        </div>
                        <div className="w-16 h-20 flex items-center justify-center bg-white rounded shadow flex-shrink-0">
                          <img
                            src={storeVariants[0].img_url}
                            alt={storeVariants[0].title}
                            className="w-14 h-16 object-contain" /* Fixed: Valid Tailwind class */
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex justify-start">
                          <img
                            src={siteLogos[(storeVariants[0].site || "").toLowerCase()] || storeVariants[0].logo}
                            alt={storeVariants[0].store}
                            className="h-7"
                          />
                        </div>
                        <div className="flex justify-end">
                          <p className="text-lg font-bold text-blue-600">
                            Rs {storeVariants[0].price}
                          </p>
                        </div>
                      </div>
                      <div className="w-full">
                        <button 
                          onClick={() =>
                            window.open(storeVariants[0].url, "_blank", "noopener,noreferrer")
                          }
                          className="w-full py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition font-medium"
                        >  
                          Go2Buy
                        </button>
                      </div>
                    </div>
                    {/* Desktop Layout */}
                    <div className="hidden lg:flex justify-between items-start">
                      <div className="flex-1">
                        <h2 className="text-xl font-semibold mb-1">{storeVariants[0].title}</h2>
                        <p className="text-sm text-gray-500 mt-5 font-inter">
                          {storeVariants[0].description}  {/* Fixed: Use description */}
                        </p>
                        <div className="grid grid-cols-3 items-center mt-6 p-4">
                          <div className="flex justify-start">
                            <img
                              src={storeVariants[0].logo}
                              alt={storeVariants[0].store}
                              className="h-10"
                            />
                          </div>
                          <div className="flex justify-center">
                            <p className="text-2xl font-bold text-blue-600">
                              Rs {storeVariants[0].price}
                            </p>
                          </div>
                          <div className="flex justify-end">
                            <button 
                              onClick={() =>
                                window.open(storeVariants[0].url, "_blank", "noopener,noreferrer")
                              }
                              className="px-6 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition">
                              Go2Buy
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`w-[143.96px] h-[156px] flex items-center justify-center rounded shadow ml-4 ${
                          darkMode ? "bg-[#3A3A3A]" : "bg-white"
                        }`}
                      >
                        <img
                          src={storeVariants[0].img_url}
                          alt={storeVariants[0].title}
                          className="w-[107.07px] h-[136.63px] object-contain"
                        />
                      </div>
                    </div>
                    {/* Expand More Variants */}
                    {expandedStores[storeIndex] && (
                      <div className={`mt-5 rounded-xl p-4 ${extraCardStyle}`}>
                        {storeVariants.slice(1).map((variant, index) => (
                          <div key={index} className="mb-4 last:mb-0">
                            {/* Mobile Layout for Expanded Variants */}
                            <div className="block lg:hidden">
                              <div className="flex justify-between items-start mb-3">
                                <div className="flex-1 pr-3">
                                  <h2 className="text-lg font-semibold mb-1 leading-tight">
                                    {variant.title}
                                  </h2>
                                  <p className="text-sm text-gray-500 font-inter line-clamp-2">
                                    {variant.description}
                                  </p>
                                </div>
                                <div className="w-16 h-20 flex items-center justify-center bg-white rounded shadow flex-shrink-0">
                                  <img
                                    src={variant.img_url}
                                    alt={variant.title}
                                    className="w-14 h-16 object-contain"  /* Fixed: Valid Tailwind class */
                                  />
                                </div>
                              </div>
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex justify-start">
                                  <img
                                    src={variant.logo}
                                    alt={variant.store}
                                    className="h-7"
                                  />
                                </div>
                                <div className="flex justify-end">
                                  <p className="text-lg font-bold text-blue-600">
                                    Rs {variant.price}
                                  </p>
                                </div>
                              </div>
                              <div className="w-full">
                                <button 
                                  onClick={() =>
                                    window.open(variant[0].url, "_blank", "noopener,noreferrer")
                                  }
                                  className="w-full py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition font-medium">
                                  Go2Buy
                                </button>
                              </div>
                            </div>
                            {/* Desktop Layout for Expanded Variants */}
                            <div className="hidden lg:flex justify-between items-start">
                              <div className="flex-1">
                                <h2 className="text-xl font-semibold mb-1">{variant.title}</h2>
                                <p className="text-sm text-gray-500 mt-5 font-inter">
                                  {variant.description}
                                </p>
                                <div className="grid grid-cols-3 items-center mt-6 p-4">
                                  <div className="flex justify-start">
                                    <img
                                      src={variant.logo}
                                      alt={variant.store}
                                      className="h-10"
                                    />
                                  </div>
                                  <div className="flex justify-center">
                                    <p className="text-2xl font-bold text-blue-600">
                                      Rs {variant.price}
                                    </p>
                                  </div>
                                  <div className="flex justify-end">
                                    <button 
                                      onClick={() =>
                                        window.open(variant.url, "_blank", "noopener,noreferrer")
                                      }
                                      className="px-6 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition">
                                      Go2Buy
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div
                                className={`w-[143.96px] h-[156px] flex items-center justify-center rounded shadow ml-4 ${
                                  darkMode ? "bg-[#3A3A3A]" : "bg-white"
                                }`}
                              >
                                <img
                                  src={variant.img_url}
                                  alt={variant.title}
                                  className="w-[107.07px] h-[136.63px] object-contain"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {/* Expand/Collapse Button */}
                    <div className="mt-4 text-center">
                      <button
                        onClick={() => toggleExpand(storeIndex)}
                        className={`w-full flex items-center justify-center space-x-2 text-sm font-medium px-4 py-3 rounded-full transition shadow ${
                          darkMode ? "text-white hover:opacity-90" : "hover:opacity-90"
                        }`}
                        style={{
                          backgroundColor: darkMode ? "#0C386C" : "#DAECFF",
                          color: darkMode ? "#0A7DFF" : "#1185FF",
                        }}
                      >
                        <p className="text-sm flex items-center justify-center">
                          {expandedStores[storeIndex] ? "View Less" : "View More"}
                          <FaAngleDown
                            className={`inline-block ml-2 transition-transform ${
                              expandedStores[storeIndex] ? "rotate-180" : ""
                            }`}
                          />
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        ))
      )}
    </>
  );
};

export default ProductDetailedCard;