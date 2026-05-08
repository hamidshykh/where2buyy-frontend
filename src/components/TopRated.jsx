import { useRef, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { dummyProducts } from "../data/data";
import { Link } from "react-router-dom";
import banner from "../assets/bottombanner.png";
import bannerDark from "../assets/bottombanner.png";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { API_BASE_URL } from '../config';

const TopRated = ({ darkMode, searchQuery }) => {
  const [filter, setFilter] = useState("all");
  const [showArrows, setShowArrows] = useState(false);
  const scrollRef = useRef(null);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch(
      `${API_BASE_URL}/home-mobiles`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data from API:", data);
        setProducts(data.data);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  // Filter products
  const filteredProducts = dummyProducts
    .filter((p) => (filter === "all" ? true : p.tags.includes(filter)))
    .filter((p) => p.brandName.toLowerCase().includes(searchQuery.toLowerCase()));

  // Check if scrolling is possible
  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        const { scrollWidth, clientWidth } = scrollRef.current;
        setShowArrows(scrollWidth > clientWidth);
      }
    };

    checkScroll();
    window.addEventListener("resize", checkScroll);

    return () => window.removeEventListener("resize", checkScroll);
  }, [filteredProducts]);

  // Scroll function - IMPROVED: Exactly 3 cards scroll
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const cardElement = current.querySelector(".card-item");
      if (cardElement) {
        const cardWidth = cardElement.offsetWidth;
        const gap = 24; // gap-6 = 24px
        const scrollAmount = (cardWidth + gap) * 3; // Exactly 3 cards

        current.scrollBy({
          left: scrollAmount * (direction === "left" ? -1 : 1),
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="w-[95%] mx-auto relative">
      {/* Filter Buttons */}
      <div
        className={`mx-auto w-fit flex gap-3  px-2 py-1 rounded-full ${
          darkMode ? "bg-[#464646] opacity-50" : "bg-gray-100"
        }`}
      >
      
        {["all","hot", "new"].map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`px-8 py-3 rounded-full text-sm font-medium capitalize transition ${
              filter === tag
                ? "bg-black text-white"
                : darkMode
                ? "text-white"
                : "text-black"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Arrows - FIXED: Positioned at center of cards */}
      {showArrows && (
        <>
          <button
            onClick={() => scroll("left")}
            className={`absolute -left-[-9px] top-70 transform -translate-y-1/2
              w-10 h-10 
              hidden lg:flex items-center justify-center rounded-full shadow-lg z-30 transition  
              ${
                darkMode
                  ? "bg-white text-black border-3 border-black hover:bg-gray-200"
                  : "bg-black text-white border-3 border-white hover:bg-gray-800"
              }`}
            aria-label="Scroll left"
          >
            <BsArrowLeft className="w-5 h-5  " />
          </button>

          <button
            onClick={() => scroll("right")}
            className={`absolute -right-[-9px] top-70 transform -translate-y-1/2
              w-10 h-10 
              hidden lg:flex items-center justify-center rounded-full shadow-lg z-30 transition  
              ${
                darkMode
                  ? "bg-white text-black border-3 border-black hover:bg-gray-200"
                  : "bg-black text-white border-3 border-white hover:bg-gray-800"
              }`}
            aria-label="Scroll right"
          >
            <BsArrowRight className="w-5 h-5" />
          </button>
        </>
      )}

      <div
        ref={scrollRef}
        className="flex overflow-x-auto overflow-y-visible gap-6 scroll-smooth scrollbar-hide px-2 relative"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {products.map((d) => (
          <div
            key={d.id}
            className="flex-shrink-0 card-item overflow-visible"
            style={{
              width: "calc(33.333% - 16px)", // Exactly 3 cards per row
              minWidth: "320px",
              maxWidth: "380px",
            }}
          >
            <ProductCard product={d} darkMode={darkMode} variant="topRated" brandname={d.brand}/>
          </div>
        ))}

        {/* Add some padding at the end for better scrolling */}
        <div className="flex-shrink-0 w-4" />
      </div>

      {/* View All Button */}
      <div className="flex justify-center ">
        <Link
          to="/mobiles"
          className="px-8 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all font-medium text-base"
        >
          View All
        </Link>
      </div>

      {/* Banner — visible only on medium screens and above */}
      <div className="relative bannerContainer w-auto mx-auto flex justify-center mt-6 z-[1] sm:flex">
        <img
          src={darkMode ? bannerDark : banner}
          alt="banner"
          className=" w-full max-h-[400px] object-cover"
        />
      </div>

      {/* Bottom Section */}
      <div className="py-5 flex items-center w-full">
        <h2 className="text-2xl mt-5 text-blue-400 whitespace-nowrap font-clash">
          Top Deals
        </h2>
        <div className="mt-5 flex-grow h-[1px] bg-gray-200 ml-3"></div>
      </div>
    </div>
  );
};

export default TopRated;