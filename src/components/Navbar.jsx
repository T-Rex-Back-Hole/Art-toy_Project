import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useData } from "../context/DataProvider";
import logo from "../../images/dino.png";

const Navbar = () => {
  const { cart } = useData(); // ดึง cart จาก context
  const [cartItemCount, setCartItemCount] = useState(0); // สถานะสำหรับเก็บจำนวนสินค้าในตะกร้า

  useEffect(() => {
    // คำนวณจำนวนสินค้าทั้งหมดในตะกร้า
    const totalItems = Object.values(cart).reduce(
      (total, item) => total + (item.quantity || 0),
      0
    );
    setCartItemCount(totalItems);
  }, [cart]);

  return (
    <nav className="sticky top-0 z-50 bg-black px-12 py-2 flex flex-col items-center lg:flex-row lg:justify-between">
      <Link to="/">
        <div id="logo" className="flex items-center">
          <img src={logo} alt="" className="w-10 mx-auto mr-5" />
          <span className="text-[#B47AEA] text-2xl font-bold">
            T-Rex BlackHole
          </span>
        </div>
      </Link>

      <div
        id="menu-icon"
        className="flex justify-between my-2 lg:my-0 lg:justify-between lg:items-center"
      >
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
