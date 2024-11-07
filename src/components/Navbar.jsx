import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black px-12 py-2 flex flex-col items-center lg:flex-row lg:justify-between">
        <Link to="/">
        <div id="logo" className="flex items-center">
          <img src="./images/dino.png" alt="" className="w-10 mx-auto mr-5"/>
          <span className="text-[#B47AEA] text-2xl font-bold">T-Rex BlackHole</span>
        </div>
        </Link>

        <div id="menu-icon" className="flex justify-between my-2 lg:my-0 lg:justify-between lg:items-center">
          <div id="search">
            <input type="text" placeholder="Search..." className="hidden lg:w-64 lg:inline m-4 px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:outline-none" />
            <i className="fa-solid fa-magnifying-glass nav-icon cursor-pointer px-4 lg:hover:text-purple-600"></i>
          </div>
          
          <Link to="/login">
            <i className="fa-solid fa-user nav-icon px-4 lg:hover:text-purple-600"></i>
          </Link>
          <Link to="/contact">
            <i className="fa-solid fa-phone nav-icon px-4 lg:hover:text-purple-600"></i>
          </Link>
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping nav-icon px-4 lg:hover:text-purple-600"></i>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
