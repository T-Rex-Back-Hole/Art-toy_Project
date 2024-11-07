import React from "react";

const DetailModel = () => {
  return (
    <section id="detailModel" className="mx-5 lg:mx-20">
      {/* Model */}
      <div className="flex justify-center items-center">
        <i
          id="arrow-l"
          className="fa-solid fa-circle-chevron-left text-3xl opacity-60 text-[#B47AEA] lg:text-5xl cursor-pointer hover:text-purple-500"
        ></i>
        <img
          src="/images/Art toy/oo.png"
          alt="Art Toy"
          className="w-80 lg:w-1/4 sm:mx-10"
        />
        <i
          id="arrow-r"
          className="fa-solid fa-circle-chevron-right text-3xl opacity-60 text-[#B47AEA] lg:text-5xl cursor-pointer hover:text-purple-500"
        ></i>
      </div>

      {/* Slides */}
      <div className="flex justify-center gap-2 my-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <button key={index} type="button" className="">
            <span className="w-2.5 h-2.5 bg-gray-500 rounded-full flex items-center justify-center"></span>
          </button>
        ))}
      </div>

      {/* Detail */}
      <div className="space-y-5 lg:mt-20">
        <h1 className="text-xl font-bold md:text-2xl lg:text-4xl">
          Art Toy: Boba Beats
        </h1>
        <h2 className="text-lg font-semibold text-[#5BDEE7] md:text-xl lg:text-3xl">
          Price: 2,500 ฿
        </h2>
        <p>
          <span className="font-semibold lg:text-xl">Description: </span>
          Introducing Boba Beats, a cool and laid-back character who's all about
          chill vibes and sweet moments. Sporting oversized headphones and
          sipping on his favorite bubble tea, Boba Beats...
        </p>
      </div>

      {/* Availability */}
      <div className="flex justify-center my-3 mt-6 lg:justify-start">
        <h1 className="text-green-500 text-lg font-semibold">In Stock</h1>
      </div>

      {/* Quantity Selector */}
      <div className="flex justify-center lg:justify-start">
        <div className="flex justify-center items-center w-32 rounded-full py-1 bg-[#B47AEA] gap-4 shadow-md">
          <button
            type="button"
            id="decrement-button"
            className="inline-flex h-full w-5 items-center justify-center"
          >
            <svg
              className="h-2.5 w-2.5 text-white hover:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M1 1h16"
              />
            </svg>
          </button>
          <span className="mx-3 text-white">1</span>
          <button
            type="button"
            id="increment-button"
            className="inline-flex items-center justify-center w-5"
          >
            <svg
              className="h-2.5 w-2.5 text-white hover:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center items-center mt-16 mb-5">
        <button className="bg-[#FFA4D5] rounded-full text-white text-xl font-bold px-24 py-3 shadow-sm hover:bg-[#e9449e] md:text-2xl">
          ADD TO CART
        </button>
      </div>
      <div className="flex justify-center items-center mb-5">
        <button className="bg-[#98f5fc] rounded-full text-white text-xl font-bold px-[6.72rem] py-3 shadow-sm hover:bg-[#42f2ff] md:text-2xl">
          BUY NOW!!
        </button>
      </div>
    </section>
  );
};

export default DetailModel;
