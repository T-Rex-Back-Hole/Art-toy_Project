import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="text-white font-bold">Art-Toy โว้ย</div>
        <div className="flex items-center">
          <input type="text" placeholder="Search..." className="p-2 rounded" />
          <button className="ml-4 bg-blue-500 text-white p-2 rounded">Login</button>
          <button className="ml-4 bg-green-500 text-white p-2 rounded">
            Contact
          </button>
          <button className="ml-4 bg-yellow-500 text-white p-2 rounded">
            Cart
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
