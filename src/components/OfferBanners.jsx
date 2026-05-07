import React from "react";
import offerbanner1 from "../assets/offerbanner1.png";
import offerbanner2 from "../assets/offerbanner2.png";
import offerbanner3 from "../assets/offerbanner3.png";
import offerBannerDark1 from "../assets/offerBannerDark1.png";
import offerBannerDark2 from "../assets/offerBannerDark2.png";
import offerBannerDark3 from "../assets/offerBannerDark3.png";

const OfferBanners = ({ darkMode }) => {
  const images = [
    darkMode ? offerBannerDark1 : offerbanner1,
    darkMode ? offerBannerDark2 : offerbanner2,
    darkMode ? offerBannerDark3 : offerbanner3,
  ];
  return (
    <div
      className={`w-[95%] mx-auto  px-2 md:px-4 pt-6 ${
        darkMode ? "bg-[#121212]" : "bg-[#FAFAFA]"
      }`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden cardshade dark "
          >
            <img
              src={img}
              alt={`Image ${index + 1}`}
              className="w-full h-65 object-fit"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferBanners;
