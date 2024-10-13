import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black px-12 py-2 flex justify-between items-center">
        <Link to="/">
        <div id="logo" className="flex items-center">
          <img src="./images/dino.png" alt="" className="w-10 mx-auto mr-5"/>
          <span className="text-[#B47AEA] text-2xl font-bold">T-Rex BlackHole</span>
        </div>
        </Link>

        <div id="menu-icon" className="flex items-center">
          <div id="search">
            <input type="text" placeholder="Search..." className="w-64 m-4 px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:outline-none" />
            <i className="fa-solid fa-magnifying-glass text-[#B47AEA] text-2xl active:text-[#5BDEE7] cursor-pointer mr-12"></i>
          </div>
          
          <Link to="/login">
            <i className="fa-solid fa-user text-[#B47AEA] text-2xl active:text-[#5BDEE7] mr-12"></i>
          </Link>
          <Link to="/contact">
            <i className="fa-solid fa-phone text-[#B47AEA] text-2xl active:text-[#5BDEE7] mr-12"></i>
          </Link>
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping text-[#B47AEA] text-2xl active:text-[#5BDEE7] mr-12"></i>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
