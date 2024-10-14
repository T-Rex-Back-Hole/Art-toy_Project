import React from "react";

const DetailModel = () => {
  return (
    <>
      <section id="detailModel ">
        {/* Model */}
        <div className="flex justify-center items-center mx-20">
          <i
            id="arrow-l"
            className="fa-solid fa-circle-chevron-left text-3xl opacity-60 text-[#B47AEA] lg:text-5xl cursor-pointer active:text-purple-600 lg:mr-32 hover:text-purple-500"
          ></i>
          <img
            src="/images/Art toy/oo.png"
            className="w-80 lg:w-1/4 sm:mx-10"
          />
          <i
            id="arrow-r"
            className="fa-solid fa-circle-chevron-right text-3xl lg:ml-32 opacity-60 text-[#B47AEA] lg:text-5xl cursor-pointer active:text-purple-600 hover:text-purple-500"
          ></i>
        </div>
        {/* Slides */}
        <div className="flex justify-center gap-2 my-5">
          <button type="button" className="">
            <span className="w-2.5 h-2.5 bg-gray-500 rounded-full flex items-center justify-center"></span>
          </button>
          <button type="button" className="">
            <span className="w-2.5 h-2.5 bg-gray-500 rounded-full flex items-center justify-center"></span>
          </button>
          <button type="button" className="">
            <span className="w-2.5 h-2.5 bg-gray-500 rounded-full flex items-center justify-center"></span>
          </button>
          <button type="button" className="">
            <span className="w-2.5 h-2.5 bg-gray-500 rounded-full flex items-center justify-center"></span>
          </button>
        </div>
        {/* Detail */}
        <div className="mx-5 space-y-5 md:mx-20 lg:mt-20">
          <h1 className="text-xl font-bold md:text-2xl lg:text-4xl">Art Toy: Boba Beats</h1>
          <h2 className="text-lg font-semibold text-[#5BDEE7] md:text-xl lg:text-3xl">
            price 2,500 ฿
          </h2>
          <p className="">
            <span className="font-semibold lg:text-xl">Description: </span>Introducing Boba
            Beats, a cool and laid-back character who's all about chill vibes
            and sweet moments. Sporting oversized headphones and sipping on his
            favorite bubble tea, Boba Beats{" "}
          </p>
        </div>
        {/* Button qty */}
        <div className="flex justify-center my-3 mt-6 lg:mx-[6.8rem] lg:justify-start">
          <h1 className="text-green-500 text-lg font-semibold">In Stock</h1>
        </div>
        <div className="flex justify-center lg:justify-start lg:mx-20">
          <div className="flex justify-center items-center w-32 rounded-full py-1 bg-[#B47AEA] gap-4 shadow-md shadow-[#B47AEA]">
            <button
              type="button"
              id="decrement-button"
              data-input-counter-decrement="counter-input"
              className="inline-flex h-full w-5 shrink-0 items-center justify-center"
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
              data-input-counter-increment="counter-input"
              className="inline-flex items-center justify-center w-5 h5"
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
        <div className="flex justify-center items-center mt-16 mb-5">
          <button className="bg-[#FFA4D5] rounded-full text-white text-xl font-bold px-24 py-3 shadow-sm shadow-gray-700 hover:bg-[#e9449e] md:text-2xl md:px-36">
            ADD TO CART
          </button>
        </div>
        <div className="flex justify-center items-center mb-5">
          <button className="bg-[#98f5fc] rounded-full text-white text-xl font-bold px-[6.72rem] py-3 shadow-sm shadow-gray-700 hover:bg-[#42f2ff] md:text-2xl md:px-[9.8rem]">
            BUY NOW!!
          </button>
        </div>
      </section>
    </>
  );
};

export default DetailModel;
