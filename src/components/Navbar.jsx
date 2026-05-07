import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { GoListUnordered } from "react-icons/go";

import logo from "../assets/Where2buyY.png";
import search from "../assets/Search.png";
import home from "../assets/home.png";
import profile from "../assets/profile.png";
import call from "../assets/call.png";

import CategoriesDropDown from "./CategoriesDropDown";
import TogglerButton from "./Toggler";

const Navbar = ({ darkMode, onSearch, setDarkMode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showCategories, setShowCategories] = useState(false);

  const handleSearch = (e) => onSearch(e.target.value);

  const getActiveClass = (path) =>
    location.pathname === path ? "bg-white" : "bg-[#3F3F3F]";

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="
          fixed top-4 left-1/2 -translate-x-1/2 z-50
          w-[94%] max-w-8xl
          h-[64px] md:h-[72px]
          px-3 sm:px-4 md:px-10
          flex items-center justify-between
          rounded-xl shadow-md
          bg-black opacity-95
        "
      >
        {/* LEFT — Logo (md+) */}
        <div className="hidden md:flex items-center">
          <img
            src={logo}
            alt="Where2Buy"
            onClick={() => navigate("/")}
            className="w-28 lg:w-32 cursor-pointer"
          />
        </div>

        {/* MOBILE BAR */}
        <div className="flex md:hidden w-full items-center">
          {/* LEFT — Menu Button */}
          <div className="w-12 flex justify-start">
            <button
              onClick={() => setShowCategories((p) => !p)}
              className={`
                w-10 h-10 rounded-full flex items-center justify-center
                transition-colors
                ${
                  showCategories
                    ? "bg-white"
                    : "bg-[#3F3F3F] hover:bg-[#555]"
                }
              `}
            >
              <GoListUnordered
                className={`w-5 h-5 ${
                  showCategories ? "text-black" : "text-white"
                }`}
              />
            </button>
          </div>

          {/* CENTER — Logo (TRUE CENTER) */}
          <div className="flex-1 flex justify-center">
            <img
              src={logo}
              alt="Where2Buy"
              onClick={() => navigate("/")}
              className="w-24 cursor-pointer"
            />
          </div>

          {/* RIGHT — Theme Toggle */}
          <div className="w-12 flex justify-end">
            <TogglerButton darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>

        {/* CENTER — Menu + Search (md+) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setShowCategories((p) => !p)}
            className={`
              w-11 h-11 rounded-full flex items-center justify-center
              transition-colors
              ${
                showCategories
                  ? "bg-white"
                  : "bg-[#3F3F3F] hover:bg-[#555]"
              }
            `}
          >
            <GoListUnordered
              className={`w-5 h-5 ${
                showCategories ? "text-black" : "text-white"
              }`}
            />
          </button>

          <div className="flex items-center gap-2 bg-[#3F3F3F] rounded-full px-4 py-2 w-[280px]">
            <input
              type="text"
              placeholder="Search here..."
              onChange={handleSearch}
              className="
                w-full bg-transparent outline-none text-sm
                text-transparent bg-clip-text
                bg-gradient-to-r from-[#3997FF] to-[#F882F2]
                placeholder:text-transparent placeholder:bg-clip-text
                placeholder:bg-gradient-to-r placeholder:from-[#3997FF] placeholder:to-[#F882F2]
              "
            />
            <img src={search} alt="Search" className="w-4 h-4" />
          </div>
        </div>

        {/* RIGHT — Nav Icons (md+) */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/">
            <div className={`${getActiveClass("/")} p-2 rounded-full`}>
              <img src={home} alt="Home" className="w-5 h-5" />
            </div>
          </Link>

          <Link to="/contact">
            <div className={`${getActiveClass("/contact")} p-2 rounded-full`}>
              <img src={call} alt="Contact" className="w-5 h-5" />
            </div>
          </Link>

          <Link to="/profile">
            <div className={`${getActiveClass("/profile")} p-2 rounded-full`}>
              <img src={profile} alt="Profile" className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </nav>

      {/* CATEGORIES DROPDOWN */}
      <div
        className={`
          fixed top-22 md:top-24 sm:top-16 left-0 w-full z-40
          transition-all duration-300
          ${showCategories ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        <CategoriesDropDown
          darkMode={darkMode}
          onClose={() => setShowCategories(false)}
        />
      </div>
    </>
  );
};

export default Navbar;
