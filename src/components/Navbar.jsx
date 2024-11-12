import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../components/DataProvider";

const Navbar = () => {
  const { cartItemCount } = useData();

  return (
    <nav className="sticky top-0 z-50 bg-black px-12 py-2 flex flex-col items-center lg:flex-row lg:justify-between">
      <Link to="/">
        <div id="logo" className="flex items-center">
          <img src="./images/dino.png" alt="" className="w-10 mx-auto mr-5" />
          <span className="text-[#B47AEA] text-2xl font-bold">
            T-Rex BlackHole
          </span>
        </div>
      </Link>

      <div
        id="menu-icon"
        className="flex justify-between my-2 lg:my-0 lg:justify-between lg:items-center"
      >
        {/* <Link to="/art-toy"></Link>
        <Link to="/hero"></Link> */}

        <div id="search">
          <input
            type="text"
            placeholder="Search..."
            className="relative hidden lg:w-64 lg:inline m-4 px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:outline-none"
          />
          <i className="fa-solid fa-magnifying-glass absolute hidden lg:inline nav-icon end-56 top-1/2 transform -translate-y-1/2 text-gray-300 px-5"></i>
        </div>

        <Link to="/login">
          <i className="fa-solid fa-user nav-icon px-4 lg:hover:text-purple-600"></i>
        </Link>
        <Link to="/contact">
          <i className="fa-solid fa-phone nav-icon px-4 lg:hover:text-purple-600"></i>
        </Link>
        <Link to="/cart" className="relative">
          <i className="fa-solid fa-cart-shopping nav-icon px-4 lg:hover:text-purple-600"></i>
          {cartItemCount > 0 && (
            <span className="absolute top-[-3px] right-2 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
