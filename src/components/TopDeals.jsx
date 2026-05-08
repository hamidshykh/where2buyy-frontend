import { useState, useEffect } from "react";
import tag from "../assets/tag.svg";
import heart from "../assets/heart.svg";
import messagetext from "../assets/message-text.svg";
import { items, banners } from "../data/data";
import { Link } from "react-router-dom";
import productImage from "../assets/product.png";
import userImage from "../assets/dealProfile.png";

import { API_BASE_URL } from '../config';

const TopDeals = ({ darkMode }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [items, setProducts] = useState([]);


  useEffect(() => {
    fetch(
      `${API_BASE_URL}/home-deals`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data from API:", data);
        setProducts(data.data);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container  mx-auto px-2  py-2 relative ">
      {/* Background Shade - Responsive sizing */}
      <div
        className={`bg-gradient-351 shadow-xl hover:shadow-2xl rounded-2xl p-6w-full sm:w-[350px] md:w-[450px] h-[250px] sm:h-[350px] md:h-[450px] absolute -top-5 sm:-top-8 -right-0 z-[0] ${
          darkMode ? "shaderightdark" : "shaderight"
        }`}
      ></div>

      <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 z-[20]">
        {/* Left Section */}
        <div className="w-full lg:w-[75%] flex flex-col gap-4 sm:gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className={`p-3 relative flex flex-row items-center justify-between rounded-xl md:rounded-2xl transition-all duration-300 ${
                darkMode
                  ? "bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white"
                  : "bg-gradient-to-r from-[#ffffff] to-[#f9fafb] text-black border border-gray-200"
              }`}
              style={{
                boxShadow: "0 4px 20px rgba(111, 179, 255, 0.3)",
              }}
            >
              {/* Profile + Stats */}
              <div className="flex flex-col items-center justify-center w-[80px] sm:w-[110px] gap-2 md:p-4">
                <img
                  src={userImage}
                  alt={item.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover shadow-md"
                />

                <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] sm:text-xs">
                  <div className="flex items-center gap-1">
                    <img src={messagetext} alt="comment" className="w-3 h-3" />
                    <span className="text-blue-500">{item.comment}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={heart} alt="likes" className="w-3 h-3" />
                    <span className="text-blue-500">{item.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={tag} alt="tags" className="w-3 h-3" />
                    <span className="text-blue-500">{item.tag}</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div
                className={`h-[80px] w-[1px] mx-2 ${
                  darkMode ? "bg-blue-500" : "bg-gray-300"
                }`}
              />

              {/* Middle Text */}
              <div className="flex-1 mt-[-2px] px-2 sm:px-4">
                <h2 className="text-sm sm:text-base md:text-lg text-blue-500 font-clash leading-tight">
                  {item.name}
                </h2>
                <p className="text-[11px] sm:text-xs text-gray-400 py-2 sm:pb-6 ">
                  {item.post}
                </p>
                <p
                  className={`text-[11px] sm:text-xs leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {item.description}
                </p>
              </div>

              {/* Product Image */}
              <div className="flex-shrink-0">
                <img
                  src={item.product?.productImage || productImage}
                  alt="product"
                  className="w-[90px] h-[90px] sm:w-[140px] sm:h-[140px] object-cover rounded-xl shadow-md"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex flex-col w-full lg:w-[25%] gap-2 z-[1]">
          {banners.map((banner, index) => (
            <Link key={index} className="block">
              <div className="rounded-xl shadow-md hover:opacity-90 transition-all duration-300">
                <img
                  src={banner.image}
                  alt={`banner-${index}`}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Banners for Small Screens - Below the cards */}
      <div className="block lg:hidden mt-6 px-6 z-[1]">
        <div className="grid grid-cols-2 gap-4 z-[1]">
          {banners.map((banner, index) => (
            <Link key={index}>
              <div className="rounded-lg shadow hover:opacity-90 transition">
                <img
                  src={banner.image}
                  alt={`banner-${index}`}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopDeals;
