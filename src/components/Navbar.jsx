import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <Link to="/">
          <div className="text-white font-bold">Art-Toy โว้ย</div>
        </Link>
        <div className="flex items-center">
          <input type="text" placeholder="Search..." className="p-2 rounded" />
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
