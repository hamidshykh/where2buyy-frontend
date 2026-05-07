import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { dummyProducts } from "../data/data";
import { useParams } from "react-router-dom";
import ProductDetailedCard from "../components/ProductDetailedCard";
import ProductDetailsTabs from "../components/ProductDetailsTabs";
import bottombanner from "../assets/bottombanner.png";
import bottombannerDark from "../assets/bottombanner.png";
import ad1 from "../assets/ad1.png";
import ad2 from "../assets/ad2.png";
import ad3 from "../assets/ad3.png";
import mbad from "../assets/mb-ad.png";
import mbad2 from "../assets/mb-ad2.png";
import mbad3 from "../assets/mb-ad3.png";
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

const ProductDetail = ({ darkMode }) => {
  const [showScroll, setShowScroll] = useState(false);
 // const [product, setProduct] = useState(null);
  const { id } = useParams();

  const slug = (() => {
    const path = typeof window !== "undefined" ? window.location.pathname : "";
    const parts = path.split("/").filter(Boolean);
    return parts.length ? parts[parts.length - 1] : id;
  })();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/product/${encodeURIComponent(slug)}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data from API:", data);
        const payload = data && data.data !== undefined ? data.data : data;
        setItem(Array.isArray(payload) ? payload[0] : payload);
      })
      .catch((err) => console.error("Error:", err));
  }, [slug]);

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

  }, [id]);

  if (!item) {
    return <div className="p-4 text-red-500">Loading product...</div>;
  }

  console.log("Product:", item);
  console.log("Variants in Product:", item.variants);
  //console.log("Variants in Product:", item.variants.length);

  return (
    <>
      <div className="container mx-auto px-4 py-4 mt-30 flex gap-6">
        {/* Left Section */}
        <div className="w-full lg:w-[85%] flex flex-col gap-6 px-5">
          {/* Product Row */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Product Image */}
            <div
              className="relative md:p-6 flex items-center justify-center rounded-3xl shadow-lg p-4 py-10"
              style={{
                background: darkMode
                  ? "linear-gradient(351deg, #2A2C38 0%, #0C3A6C 100%)"
                  : "linear-gradient(351deg, #FFFFFF 0%, #BADBFF 100%)",
              }}
            >
              <img
                src={item.image}
                alt="Product"
                className="w-[456.75px] h-auto rounded-lg transform hover:scale-105 transition duration-500 my-15 mx-5"
              />
            </div>

            {/* Product Info */}
            <div className="lg:w-8/12 w-full z-1">
              <h2 className="text-2xl font-bold mb-2 text-blue-500">
                {item.title}
              </h2>

              <div
                className={`mb-4 flex items-center ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                <div className="flex flex-col items-left">
                  <span
                    className={`mb-2 block text-xs ${
                      darkMode ? "text-[#CED1D5]" : "text-[#292D32]"
                    }`}
                  >
                    Min
                  </span>
                  <span
                    className={`font-semibold ${
                      darkMode ? "text-[#70CF85]" : "text-[#249B3E]"
                    }`}
                  >
                    Rs. {item.minPrice}
                  </span>
                </div>

                <div className="h-[2px] rounded w-[20px] bg-gray-800 mx-6 mt-5"></div>

                <div className="flex flex-col items-left">
                  <span
                    className={`mb-2 block text-xs ${
                      darkMode ? "text-[#CED1D5]" : "text-[#292D32]"
                    }`}
                  >
                    Max
                  </span>
                  <span
                    className={`font-semibold ${
                      darkMode ? "text-[#E51A1A]" : "text-[#FF0000]"
                    }`}
                  >
                    Rs. {item.maxPrice}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-200 mb-6" />

              {/* Price Comparison */}
              <div className="rateList flex flex-col gap-4 w-full">
                {item?.prices?.map((priceItem, index) => (
                  <div
                    key={index}
                    className={`listItem rounded-xl flex items-center justify-between cardshade py-4 px-4 sm:px-6 shadow-md transition-all ${
                      darkMode
                        ? "text-white bg-[#121212]"
                        : "text-black bg-white"
                    }`}
                  >
                    
                    {/* Left: Logo */}
                    <img
                      src={siteLogos[priceItem.logo] || priceItem.logo}
                      alt={priceItem.site}
                      className="w-16 sm:w-20 h-auto object-contain"
                    />

                    {/* Divider — hidden on small screens */}

                    {/* Center: Price */}
                    <div className="flex-1 flex justify-center">
                      <div className="hidden md:block h-10 w-[2px] bg-gray-300  sm:mx-15 "></div>
                      <span className="text-base mt-1 sm:text-lg font-semibold text-center">
                        Rs {priceItem.price}
                      </span>
                    </div>

                    {/* Right: Button */}
                    <button
                      onClick={() =>
                        window.open(priceItem.url, "_blank", "noopener,noreferrer")
                      }
                      className="py-2 px-4 text-sm sm:text-base text-white rounded-3xl font-medium hover:opacity-90 transition ml-4"
                      style={{
                        background:
                          "linear-gradient(74deg, rgba(57,151,255,1) 0%, rgba(248,130,242,1) 100%)",
                      }}
                    >
                      Go2Buyy
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* <div className="border-t border-gray-200 mb-6" >
            <item className="variants map">{item.variants.map((variant) => (
              <div key={variant.id} className="variant-item">
                <item className="variants map">{variant.map((product) => (
                  <div>
                    <h3 className="variant-title">{product.title}</h3>
                    <p className="variant-price">Price: Rs {product.price}</p>
                    <p className="variant-store">Store: {product.url}</p>
                  </div>
                ))}</item>
              </div>
            ))}</item>
          </div> */}

          
          {/* Product Detailed Card */} 
          <ProductDetailedCard
            darkMode={darkMode}
            product={item}
            key={item.id}
          />
           
          {/* Product Details Tabs */}
          <ProductDetailsTabs 
            darkMode={darkMode}
            product={item}
            />
          
        </div>

        {/* Right Section (Desktop Ads) */}
        <div className="hidden lg:flex w-[16%] h-auto flex-col gap-6 z-10 pr-2 mr-5">
          <img src={ad1} alt="Ad 1" />
          <img src={ad2} alt="Ad 2" />
          <img src={ad3} alt="Ad 3" />
        </div>
      </div>

      {/*  Mobile Ads Section */}
      <div className="lg:hidden flex flex-col items-center justify-center gap-5 px-6 py-8">
        {/* Row 1: 3 ads */}
        <div className="w-full h-auto">
          <img
            src={mbad3}
            alt="Mobile Ad 6"
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Row 2: 2 ads (adjusted layout) */}
        <div className="flex justify-between gap-3 w-full">
          <img
            src={mbad2}
            alt="Ad 1"
            className="w-1/2 rounded-lg shadow-md object-cover"
          />
          <img
            src={mbad}
            alt="Ad 2"
            className="w-1/2 rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Row 3: 1 ad full width */}
        <div className="relative bannerContainer w-full flex justify-center mt-2 z-[1]">
          <img
            src={darkMode ? bottombannerDark : bottombanner}
            alt="banner"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className={`z-50 fixed bottom-8 right-7 p-3 rounded-full shadow-lg transition-all duration-300 
                          ${
                            darkMode
                              ? "bg-gradient-to-r from-blue-700 to-purple-700"
                              : "bg-gradient-to-r from-blue-400 to-purple-400"
                          }
                          hover:scale-110`}
        >
          <FaArrowUp className="text-white text-lg animate-bounce" />
        </button>
      )}
    </>
  );
};

export default ProductDetail;
