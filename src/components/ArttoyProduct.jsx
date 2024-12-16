import React from "react";
import { Link } from "react-router-dom";

import imageArtToy from "../../images/Art toy/cc.png";

function ArttoyProduct() {
  return (
    <>
      <Link
        to="/art-toy"
        className="flex flex-col justify-center md:w-3/4 lg:w-2/5 bg-[#B47AEA] p-8 m-6 lg:p-6 lg:m-6 rounded-xl"
      >
        <img src={imageArtToy} alt="" className="" />
        <button className="w-full bg-white text-[#B47AEA] text-2xl font-bold rounded-full py-2 px-10 lg:h-20 lg:text-3xl lg:rounded-md lg:hover:bg-purple-600 lg:hover:text-white lg:cursor-pointer">
          ART TOY
        </button>
      </Link>
    </>
  );
}

export default ArttoyProduct;
