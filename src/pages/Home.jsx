import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Banner from "../components/Banner";
import TopBrands from "../components/TopBrands";
import TopRated from "../components/TopRated";
import TopDeals from "../components/TopDeals";
import OfferBanners from "../components/OfferBanners";
import Newsletter from "../components/Newsletter";
import bottombanner from "../assets/bottombanner.png";
import bottombannerDark from "../assets/bottombanner.png";
import ad1 from "../assets/ad1.png";
import ad2 from "../assets/ad2.png";
import mbad from "../assets/mb-ad.png";
import mbad2 from "../assets/mb-ad2.png";
import carouselData from "../data/data.js";

const Home = ({ darkMode, searchQuery }) => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="relative overflow-hidden">
      {/* Gradients */}
      {/* Gradients */}
      <div
        className={`w-[300px] h-[250px] absolute -top-10 -left-10 z-0 
  ${darkMode ? "shadeleftdark" : "shadeleft"} hidden sm:block`}
      />
      <div
        className={`w-[450px] h-[450px] absolute -top-10 -right-0 z-0 
  ${darkMode ? "shaderightdark" : "shaderight"} hidden sm:block`}
      />

      <div
        className="relative bannerContainer w-[95%] mx-auto flex justify-center 
        mt-2 sm:mt-3 md:mt-4 lg:mt-2 z-[1] pt-[60px] sm:pt-[80px] md:pt-[100px]"
      ></div>

      <div className="w-full px-4 sm:px-10 mx-auto mt-0 flex flex-col lg:flex-row gap-6 p-3">
        {/* Left side */}
        <div className="w-full lg:w-[82%] flex flex-col gap-6">
          {/* Banner with darkMode prop */}

          <Banner data={carouselData} darkMode={darkMode} />

          <TopBrands darkMode={darkMode} />
          <TopRated darkMode={darkMode} searchQuery={searchQuery} />
        </div>

        {/* Right side ads */}
        <div className="hidden lg:flex w-[15%] h-auto flex-col gap-6 z-10">
          <img src={ad1} alt="Ad 1" className="w-full h-[800px]" />
          <img src={ad2} alt="Ad 2" className="w-full h-[540px]" />
        </div>
      </div>

      <TopDeals darkMode={darkMode} />
      <OfferBanners darkMode={darkMode} />
      <Newsletter darkMode={darkMode} />

      <div className="flex justify-between gap-4 py-6 px-6 md:px-8 lg:hidden">
        <img
          src={mbad2}
          alt="Ad 1"
          className="w-[45%] h-auto rounded-lg shadow-md object-cover"
        />
        <img
          src={mbad}
          alt="Ad 2"
          className="w-[45%] h-auto rounded-lg shadow-md object-cover"
        />
      </div>

      {/* Bottom Banner — visible on sm & md, hidden on lg */}
      <div className="relative bannerContainer w-auto mx-auto flex justify-center mt-2 z-[1] py-2 px-4 md:px-6 lg:hidden">
        <img
          src={darkMode ? bottombannerDark : bottombanner}
          alt="banner"
          className="w-full h-auto object-cover shadow-md rounded-lg"
        />
      </div>

          {showScroll && (
        <button
          onClick={scrollToTop}
          className={`z-50 fixed bottom-8 right-7 p-3 rounded-full shadow-lg transition-all duration-300 
            ${darkMode ? "bg-gradient-to-r from-blue-700 to-purple-700" : "bg-gradient-to-r from-blue-400 to-purple-400"}
            hover:scale-110`}
        >
          <FaArrowUp className="text-white text-lg animate-bounce" />
        </button>
      )}

    </div>
  );
};

export default Home;
