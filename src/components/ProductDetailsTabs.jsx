import React, { useState,useEffect } from "react";
import user from "../assets/user.png";
import user1 from "../assets/user1.png";
import { FaAngleDown } from "react-icons/fa";
//import { commentsData } from "../data/data";
import { desc } from "framer-motion/client";

const TABS = ["Product Description", "Specification"];

const ProductDetailsTabs = ({ darkMode, product }) => {
  const [activeTab, setActiveTab] = useState("Product Description");
  const [showMore, setShowMore] = useState(false);
  const [showMoreSpec, setShowMoreSpec] = useState(false);
  const [showMoreComments, setShowMoreComments] = useState(false);

const [commentsData, setComments] = useState([]);

  
  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/product-comments/${encodeURIComponent(product.id)}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data from API:", data);
        setComments(data.comments  || []);
      })
      .catch((err) => console.error("Error:", err));
  }, [product.id]);

 
  // Show only first 2 comments initially, show all when expanded
  const displayedComments = commentsData.slice(0, showMoreComments ? commentsData.length : 2);
    //? commentsData
    //: commentsData.slice(0, 2);

  return (
    <div className="relative w-full text-gray-600 ms-auto me-auto sm:px-2 md:px-4 lg:px-6 z-1">
      {/* shader */}
      {/* <div className={`absolute -top-10 -left-30 z-0 ${darkMode ? "shaderDarkBlue" : "shaderBlue"}`}></div> */}
      {/* Tabs */}
      <div className="flex items-center space-x-8 border-b border-gray-300 pb-4 ">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative text-sm md:text-base font-medium transition-colors duration-300 font-clash
    ${
      activeTab === tab
        ? darkMode
          ? "text-white"
          : "text-black"
        : darkMode
        ? "text-gray-400 hover:text-white"
        : "text-gray-400 hover:text-black"
    }
    ${
      activeTab === tab
        ? 'after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:rounded-full after:bg-[#3997FF]'
        : ""
    }
  `}
          >
            {tab}
          </button>
        ))}

        {/* Badge */}
        {activeTab === "User Comments" && (
          <div className="ml-2 bg-gradient-to-br from-indigo-400 to-purple-500 text-white text-xs px-2 py-1 rounded-lg shadow">
            120+
          </div>
        )}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "Product Description" && (
          <div>
            <p
              className={`text-sm md:text-base leading-relaxed mb-6 font-clash ${
                darkMode ? "text-[#CED1D5]" : "text-[#292D32]"
              }`}
            >
              {product.title}
            </p>

            {/* View More Button  */}
            {!showMore && (
              <button
                onClick={() => setShowMore(true)}
                className={`w-full mt-3 py-3 font-medium flex items-center justify-center
          ${darkMode ? "text-blue-600" : "text-blue-600 "}`}
              >
                <span className="text-sm flex items-center justify-center">
                  View More
                  <FaAngleDown className="ml-2 text-base" />
                </span>
              </button>
            )}

            {/* Extra Details + View Less Button */}
            {showMore && (
              <div>
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 rounded-lg p-6 shadow"
                  style={{
                    background:
                      "linear-gradient(294deg, rgba(255,255,255,0) 0%, rgba(111,178,255,0.1) 100%)",
                  }}
                >
                  <div dangerouslySetInnerHTML={{ __html: product.description }} />
                  
                </div>

                {/* View Less Button (neeche sirf jab expanded ho) */}
                <button
                  onClick={() => setShowMore(false)}
                  className={`w-full mt-3 py-3 font-medium  flex items-center justify-center
            ${darkMode ? "text-blue-600" : "text-blue-600"}`}
                >
                  <span className="text-sm flex items-center justify-center">
                    View Less
                    <FaAngleDown className="ml-2 text-base rotate-180" />
                  </span>
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === "Specification" && (
          <div>
            <p
              className="text-sm md:text-base leading-relaxed mb-6 font-clash"
              style={{ color: darkMode ? "#CED1D5" : "#292D32" }}
            >
              {product.title}
            </p>

            {/* View More Button (jab collapsed ho) */}
            {!showMoreSpec && (
              <button
                onClick={() => setShowMoreSpec(true)}
                className={`w-full mt-3 py-3 font-medium  flex items-center justify-center
            ${darkMode ? "text-blue-600" : "text-blue-600"}`}
              >
                <span className="text-sm flex items-center justify-center">
                  View More
                  <FaAngleDown className="ml-2 text-base" />
                </span>
              </button>
            )}

            {/* Expanded content */}
            {showMoreSpec && (
              <div>
                <div
                  className={`${
                    darkMode ? "text-[#CED1D5]" : "text-[#292D32]"
                  } grid grid-cols-1 md:grid-cols-3 gap-6 rounded-lg p-6 shadow`}
                  style={{
                    background:
                      "linear-gradient(294deg, rgba(255,255,255,0) 0%, rgba(111,178,255,0.1) 100%)",
                  }}
                >
                  <div dangerouslySetInnerHTML={{ __html: product.specifications }} />
                  
                </div>

                {/* View Less Button (neeche) */}
                <button
                  onClick={() => setShowMoreSpec(false)}
                  className={`w-full mt-3 py-3 font-medium  flex items-center justify-center
            ${darkMode ? "text-blue-600" : "text-blue-600"}`}
                >
                  <span className="text-sm flex items-center justify-center">
                    View Less
                    <FaAngleDown className="ml-2 text-base transform rotate-180" />
                  </span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      {/* User Comments Section */}
      <div className="mt-10">
        {/* Heading */}
        <div className="flex items-center space-x-2 mb-6">
          <h2
            className={`text-lg md:text-xl font-medium ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            User Comments
          </h2>
          <div
            className="ml-2 text-white text-xs px-2 py-2 rounded-lg shadow"
            style={{
              background: "linear-gradient(90deg, #8D4616 0%, #2739CD 100%)",
            }}
          >
            {commentsData.length}+
          </div>
        </div>

        <div
          className="rounded-lg p-5 shadow-lg mb-10 transition-all duration-300"
          style={{
            background: darkMode
              ? "linear-gradient(294deg, rgba(35,35,35,0.9) 0%, rgba(57,151,255,0.05) 100%)"
              : "linear-gradient(294deg, rgba(255,255,255,0.8) 0%, rgba(111,178,255,0.1) 100%)",
            border: darkMode ? "1px solid #3A3F44" : "1px solid #E5E7EB",
            color: darkMode ? "#E4E6EB" : "#292D32",
          }}
        >
          {/* User Input Box */}
          <div className="p-5 mb-10 transition-all duration-300">
            {/* User Info (John Doe) */}
            <div className="flex items-center space-x-3 mb-3">
              <img
                src={user}
                alt="User"
                className="w-10 h-10 rounded-full object-cover border border-gray-300 dark:border-gray-700"
              />
              <p
                className={`font-medium font-clash text-base ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                John Doe
              </p>
            </div>

            {/* Input Field */}
            <input
              type="text"
              placeholder="Add Your Comment Here..."
              className={`w-full bg-transparent border-none focus:outline-none text-sm placeholder-gray-400 font-inter ${
                darkMode ? "text-white" : "text-black"
              }`}
            />

            {/* Divider Line */}
            <div
              className="border-t my-3"
              style={{ borderColor: darkMode ? "#3A3F44" : "#E5E7EB" }}
            ></div>

            {/* Comment Button */}
            <div className="flex justify-end">
              <button
                className="mt-1 text-white px-6 py-1.5 rounded-full text-sm shadow font-product-sans transition-transform transform hover:scale-105"
                style={{
                  background: darkMode
                    ? "linear-gradient(74deg, rgba(57,151,255,1) 0%, rgba(248,130,242,1) 100%)"
                    : "linear-gradient(74deg, rgba(57,151,255,1) 0%, rgba(248,130,242,1) 100%)",
                }}
              >
                Comment
              </button>
            </div>
          </div>

          {/* User Comments List */}
          <div className="space-y-4 mt-6">
            {displayedComments.map((comment) => (
              <div
                key={comment.id}
                className="rounded-xl p-4 shadow-md transition-all duration-300"
                style={{
                  background: darkMode ? "#2466AC" : "#DAECFF",
                  border: darkMode ? "1px solid #2466AC" : "1px solid #DAECFF",
                }}
              >
                {/* Small Screen Layout - Image ke neeche comment */}
                <div className="block lg:hidden">
                  <div className="flex flex-col">
                    <div className="flex items-start space-x-4">
                      <img
                        src={user1}
                        alt="User"
                        className="w-10 h-10 rounded-full object-cover border border-gray-300 dark:border-gray-700"
                      />
                      <div className="flex-1">
                        <p
                          className={`font-medium font-clash ${
                            darkMode ? "text-white" : "text-black"
                          }`}
                        >
                          {comment.name}
                        </p>
                      </div>
                    </div>
                    {/* Comment text image ke directly neeche */}
                    <p
                      className={`text-sm mt-2 font-inter leading-relaxed ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {comment.comment}
                    </p>
                  </div>
                </div>

                {/* Large Screen Layout - Name ke neeche comment */}
                <div className="hidden lg:flex lg:items-start lg:space-x-4">
                  <img
                    src={user1}
                    alt="User"
                    className="w-10 h-10 rounded-full object-cover border border-gray-300 dark:border-gray-700"
                  />
                  <div className="flex-1">
                    <p
                      className={`font-medium font-clash ${
                        darkMode ? "text-white" : "text-black"
                      }`}
                    >
                      {comment.name}
                    </p>
                    <p
                      className={`text-sm mt-2 font-inter leading-relaxed ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {comment.comment}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Comments Button - Only show if there are more than 2 comments */}
          {commentsData.length > 2 && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowMoreComments(!showMoreComments)}
                className={`w-full flex items-center justify-center space-x-2 text-sm font-medium px-4 py-3 rounded-full transition shadow ${
                  darkMode ? "text-white hover:opacity-90" : "hover:opacity-90"
                }`}
                style={{
                  backgroundColor: darkMode ? "#0C386C" : "#DAECFF",
                  color: darkMode ? "#0A7DFF" : "#DAECFF",
                }}
              >
                <span className="text-[#1185FF]" >{showMoreComments ? "View Less" : "View More"}</span>
                <FaAngleDown
                  className={`transition-transform text-[#1185FF] ${
                    showMoreComments ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsTabs;
