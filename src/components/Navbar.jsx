import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black p-4 flex justify-between items-center">
        <Link to="/">
        <div id="logo" className="flex items-center pl-8">
          <img src="./images/dino.png" alt="" className="w-10 mx-auto mr-5"/>
          <div className="text-[#B47AEA] text-2xl font-bold">T-Rex BlackHole</div>
        </div>
        </Link>

        <div className="flex items-center">
          <input type="text" placeholder="Search..." className="w-96 m-4 px-4 py-2 border border-gray-300 rounded-md focus:ring-1 focus:outline-none" />
          <Link to="/login">
            <button className="ml-4 bg-blue-500 text-white p-2 rounded">
              Login
            </button>
          </Link>
          <Link to="/contact">
            <button className="ml-4 bg-green-500 text-white p-2 rounded">
              Contact
            </button>
          </Link>
          <Link to="/cart">
            <button className="ml-4 bg-yellow-500 text-white p-2 rounded">
              Cart
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
