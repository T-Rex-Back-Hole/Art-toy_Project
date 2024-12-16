import React from "react";
import { Link } from "react-router-dom";
import imageHero from "../../images/dead564.png";

function HeroProduct() {
  return (
    <>
      <Link
        to="/hero"
        className="flex flex-col justify-center lg:w-2/5 md:w-3/4 bg-[#5BDEE7] p-8 m-6 lg:p-6 lg:m-6 rounded-xl"
      >
        <img src={imageHero} alt="" className="" />
        <button className="bg-white text-[#B47AEA] text-xl font-bold rounded-full py-2 px-10 lg:h-20 lg:text-3xl lg:rounded-md lg:hover:bg-purple-600 lg:hover:text-white lg:cursor-pointer">
          HERO
        </button>
      </Link>
    </>
  );
}

export default HeroProduct;
