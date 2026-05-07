// components/ToggleButton.jsx
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

const ToggleButton = ({ darkMode, setDarkMode , className="" }) => {
  return (
    <div
      className={`fixed  sm:top-1/6 top-1/7 sm:right-15 right-6 -translate-y-1/2 z-50 cursor-pointer ${className}`}
      onClick={() => setDarkMode(!darkMode)}
    >
      <motion.div
        initial={false}
        animate={{
          background: darkMode
            ? "linear-gradient(90deg, #6FB4FF 0%, #F9F0FF 100%)" // Day gradient
            : "linear-gradient(90deg, #4B6CB7 0%, #182848 100%)", // Night gradient
        }}
        className="w-[75px] h-[35px] rounded-full flex items-center justify-between px-2 shadow-md transition-all"
      >
        {/* Day Mode */}
        {!darkMode && (
          <>
            <span className="text-[8px] font-semibold text-white">DAY</span>
            <motion.div
              layout
              className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-sm"
            >
              <FaSun className="text-yellow-400 text-[10px]" />
            </motion.div>
          </>
        )}

        {/* Night Mode */}
        {darkMode && (
          <>
            <motion.div
              layout
              className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-sm"
            >
              <FaMoon className="text-blue-600 text-[10px]" />
            </motion.div>
            <span className="text-[8px] font-semibold text-white">NIGHT</span>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default ToggleButton;
