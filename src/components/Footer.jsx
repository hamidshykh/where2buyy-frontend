import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`w-full border-t px-5 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-poppins
      ${darkMode ? "bg-[#121212] border-gray-600" : "bg-[white] border-gray-300"}`}
    >
      {/* Left Side - Copyright */}
      <p className="px-4 sm:px-12 py-3 sm:py-5 text-sm text-gray-600 dark:text-[#fffff] text-center sm:text-left">
        ©{" "}
        <span className="bg-gradient-to-r from-[#D486F5] to-[#3997FF] bg-clip-text text-transparent ">
          Where2buy
        </span>{" "}
        All rights reserved
      </p>

      {/* Right Side - Links */}
      <div className="px-4 sm:px-12 flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-sm ">
        <Link to="#" className="text-blue-700 hover:underline">
          Blog
        </Link>
        <Link to="#" className="text-blue-600 hover:underline">
          About us
        </Link>
        <Link to="#" className="text-blue-600 hover:underline">
          Contact us
        </Link>
        <Link to="#" className="text-blue-600 hover:underline">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
