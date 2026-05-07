import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import samsung from "../assets/samsungLogoLight.png";
import iphone from "../assets/iphoneLogoLight.png";
import realme from "../assets/realmeLogoLight.png";
import oppo from "../assets/oppoLogoLight.png";
import infinix from "../assets/infinixLogoLight.png";
import tecno from "../assets/tecnoLogoLight.png";
import xiaomi from "../assets/milogoLight.png";
import vivo from "../assets/vivoLogoLight.png";
import samsungDark from "../assets/samsungDark.png";
import iphoneDark from "../assets/iphoneDark.png";
import realmeDark from "../assets/realmeDark.png";
import oppoDark from "../assets/oppoDark.png";
import infinixDark from "../assets/infinixDark.png";
import tecnoDark from "../assets/tecnoDark.png";
import xiaomiDark from "../assets/xiaomiDark.png";
import vivoDark from "../assets/vivoDark.png";
import googlePixel from "../assets/googlepixelLogoLight.png";
import googlePixelDark from "../assets/googlePixelDark.png";

const TopBrands = ({ darkMode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const brands = [
    { name: "Samsung", img: samsung, darkImg: samsungDark },
    { name: "iPhone", img: iphone, darkImg: iphoneDark },
    { name: "Realme", img: realme, darkImg: realmeDark },
    { name: "Oppo", img: oppo, darkImg: oppoDark },
    { name: "Infinix", img: infinix, darkImg: infinixDark },
    { name: "Tecno", img: tecno, darkImg: tecnoDark },
    { name: "Xiaomi", img: xiaomi, darkImg: xiaomiDark },
    { name: "Vivo", img: vivo, darkImg: vivoDark },
    { name: "G Pixel", img: googlePixel, darkImg: googlePixelDark },
  ];

  // dynamic slug logic
  const makeSlug = (name) => name.toLowerCase().replace(/\s+/g, "-");
  const brandSlugs = brands.map((b) => makeSlug(b.name));
  const currentPath = location.pathname.toLowerCase();

  const isCategoryPage =
    currentPath.includes("/mobiles") ||
    brandSlugs.some((slug) => currentPath.includes(`/${slug}`));

  // dynamic gap
  const gapSize = isCategoryPage
    ? "gap-[3vw] sm:gap-[3vw] md:gap-[2.5vw] lg:gap-[2vw]"
    : "gap-[4vw] sm:gap-[3vw] md:gap-[2.5vw] lg:gap-[2vw] xl:gap-[1.8vw]";

  return (
    <div className="px-3 md:px-8 w-full">
      {/* scroll only below 1080px */}
      <div
        className={`
          flex items-center py-4 
          ${gapSize}
          lg:justify-between lg:flex-nowrap
          overflow-x-auto lg:overflow-x-visible hide-scrollbar
        `}
      >
        {brands.map((brand, index) => (
          <div
            onClick={() => navigate(`/${makeSlug(brand.name)}`)}
            key={index}
            className="flex flex-col items-center flex-shrink-0 cursor-pointer"
          >
            {/* Circle */}
            <div
              className="
                flex items-center justify-center rounded-full 
                w-[14vw] h-[14vw]
                sm:w-[12vw] sm:h-[12vw]
                md:w-[10vw] md:h-[10vw]
                lg:w-[7vw] lg:h-[7vw]
                xl:w-[6vw] xl:h-[6vw]
                max-w-[78.56px] max-h-[78.56px]
                min-w-[40.92px] min-h-[40.92px]
                transition-all duration-300
              "
            >
              <img
                src={darkMode ? brand.darkImg : brand.img}
                alt={brand.name}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Brand Name */}
            <p className="text-center text-sm mt-2 font-medium">
              {brand.name}
            </p>
          </div>
        ))}
      </div>

      {/* Hide scrollbar globally */}
      <style>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TopBrands;
