// App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Navbar from "./components/Navbar"; // moved it to App
import Footer from "./components/Footer";
import TogglerButton from "./components/Toggler";
import ProductDetail from "./pages/ProductDetail";
import { dummyProducts } from "./data/data";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [brandFilter, setBrandFilter] = useState(""); // brand clicked
  // const [navbarToggler, setNavbarToggler] = useState(null);

  const filteredProducts = dummyProducts.filter((product) =>
    product.brandName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className={`${
        darkMode ? "bg-[#121212]" : "bg-[#FAFAFA]"
      } min-h-screen flex flex-col transition-colors duration-300`}
    >
      {/* Toggle & Navbar */}
      <TogglerButton
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        className="hidden md:block"
        
      />
      <Navbar
        darkMode={darkMode}
        onSearch={setSearchQuery}
        setDarkMode={setDarkMode}
        // onToggleCategories={navbarToggler}
      />

      {/* Background Glows */}
      {/* Gradients */}
      <div
        className={`w-[300px] h-[250px] absolute -top-10 -left-10 z-0 
  ${darkMode ? "shadeleftdark" : "shadeleft"} hidden sm:block`}
      />
      <div
        className={`w-[450px] h-[450px] absolute -top-10 -right-0 z-0 
  ${darkMode ? "shaderightdark" : "shaderight"} hidden sm:block`}
      />

      {/* Main Content */}
      <main className="flex-grow  ">
        <Routes>
          <Route
            path="/"
            element={<Home searchQuery={searchQuery} darkMode={darkMode} />}
          />
          <Route
            path="/:brandFilter"
            element={
              <Categories
                darkMode={darkMode}
                searchQuery={searchQuery}
                // setBrandFilter={setBrandFilter}
                // setNavbarToggler={setNavbarToggler}
              />
            }
          />

          <Route
            path="/:brandName/:id"
            element={<ProductDetail darkMode={darkMode} />}
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
