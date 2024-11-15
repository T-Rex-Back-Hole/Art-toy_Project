import React from "react";
import { Link } from "react-router-dom";

import imageArtToy from "../../images/Art toy/cc.png";
import imageHero from "../../images/dead564.png";

function Category() {
  return (
    <>
      <section id="category" className="">
        <h1 className="text-center text-4xl font-bold my-6 lg:text-5xl lg:mt-12">
          Category
        </h1>
        <div
          id="container-category"
          className="flex flex-col lg:flex-row justify-center mx-auto lg:w-3/4 md:items-center"
        >
          <Link
            to="/art-toy"
            className="flex flex-col justify-center md:w-3/4 lg:w-2/5 bg-[#B47AEA] p-8 m-6 lg:p-6 lg:m-6 rounded-xl"
          >
            <img src={imageArtToy} alt="" className="" />
            <button className="w-full bg-white text-[#B47AEA] text-2xl font-bold rounded-full py-2 px-10 lg:h-20 lg:text-3xl lg:rounded-md lg:hover:bg-purple-600 lg:hover:text-white lg:cursor-pointer">
              ART TOY
            </button>
          </Link>

          <Link
            to="/hero"
            className="flex flex-col justify-center lg:w-2/5 md:w-3/4 bg-[#5BDEE7] p-8 m-6 lg:p-6 lg:m-6 rounded-xl"
          >
            <img src={imageHero} alt="" className="" />
            <button className="bg-white text-[#B47AEA] text-xl font-bold rounded-full py-2 px-10 lg:h-20 lg:text-3xl lg:rounded-md lg:hover:bg-purple-600 lg:hover:text-white lg:cursor-pointer">
              HERO
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Category;
