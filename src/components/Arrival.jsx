import React from "react";
import image2 from "../../images/arr1.webp";
import image3 from "../../images/toy1.png";

function Arrival() {
  return (
    <>
      <section id="arrival" className="lg:flex lg:flex-col justify-center">
        <h1 className="text-center text-4xl font-bold my-6 lg:text-5xl lg:mt-12">
          Arrival of the week
        </h1>
        <div
          id="container-arrival"
          className="flex flex-col lg:flex-row lg:mx-10 lg:w-3/4 lg:self-center"
        >
          <div
            id="box-left"
            className="hidden lg:w-1/2 lg:flex lg:flex-col lg:justify-center"
          >
            <img src={image2} alt="" className="" />
          </div>
          <div
            id="box-right"
            className="flex flex-col justify-center text-center m-6 shadow-lg p-10 rounded-xl lg:shadow-none lg:m-0 lg:w-1/2 lg:p-12"
          >
            <div id="right-img" className="flex justify-center">
              <img src={image3} alt="" className="w-1/2" />
            </div>
            <p>
              PixelBot Joy - is a vibrant robot that blends contemporary design
              with retro-inspired fun.
            </p>
            <p>$ 1,590</p>
            <button className="bg-[#B47AEA] text-white text-xl font-bold rounded-full mt-4 py-2 px-10 lg:px-4 lg:text-3xl lg:rounded-md lg:hover:bg-purple-600 lg:hover:text-white lg:cursor-pointer">
              Art Toy
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Arrival;
