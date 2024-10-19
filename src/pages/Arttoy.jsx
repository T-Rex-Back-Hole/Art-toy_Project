import React from "react";
import { Link } from "react-router-dom";

const Arttoy = () => {
  return (
    <>
      <h1 className="font-bold text-3xl text-center my-10 md:text-5xl">
        Art Toys
      </h1>

      <div className="flex flex-row justify-end items-center mt-16 mb-5 border-solid border-2 border-gray-200">
        <button className="flex-initial bg-[#FFA4D5] rounded-md text-white text-xl font-bold px-8 py-3 shadow-sm shadow-gray-700 hover:bg-[#e9449e] md:text-2xl md:px-24">
          Sort by
        </button>

        <button className="flex-initial bg-[#B47AEA] rounded-md text-white text-xl font-bold px-8 py-3 shadow-sm shadow-gray-700 hover:bg-purple-600 md:text-2xl md:px-24">
          Filter
        </button>
      </div>

      <div
        id="container-Arttoy"
        className=" grid grid-cols-2 gap-6   md:grid-cols-3 lg:grid-cols-4 mx-6 my-6 "
      >
        <Link
          to="/detail-model"
          className="shadow-lg flex flex-col  justify-end items-center cursor-pointer"
        >
          <div>
            <img
              src="./images/Art toy/rr.png"
              alt=""
              className="w-full transition ease-linear duration-[1000ms] hover:transform hover:scale-[1.1]  "
            />
          </div>
          <h2 className="text-lg font-bold">Art Toy : Name</h2>
          <p className="text-lg bottom-4 text-primary">฿9,999</p>
        </Link>

        <Link
          to="/detail-model"
          className="shadow-lg flex flex-col  justify-end items-center cursor-pointer"
        >
          <div>
            <img
              src="./images/Art toy/aaa.png"
              alt=""
              className="w-full transition ease-linear duration-[1000ms] hover:transform hover:scale-[1.1]  "
            />
          </div>
          <h2 className="text-lg font-bold">Art Toy : Name</h2>
          <p className="text-lg bottom-4 text-primary">฿9,999</p>
        </Link>

        <Link
          to="/detail-model"
          className="shadow-lg flex flex-col  justify-end items-center cursor-pointer"
        >
          <div>
            <img
              src="./images/Art toy/gg.png"
              alt=""
              className="w-full  transition ease-linear duration-[1000ms] hover:transform hover:scale-[1.1]  "
            />
          </div>
          <h2 className="text-lg font-bold">Art Toy : Name</h2>
          <p className="text-lg bottom-4 text-primary">฿9,999</p>
        </Link>

        <Link
          to="/detail-model"
          className="shadow-lg flex flex-col  justify-end items-center cursor-pointer"
        >
          <div>
            <img
              src="./images/Art toy/ii.png"
              alt=""
              className="w-full transition ease-linear duration-[1000ms] hover:transform hover:scale-[1.1]  "
            />
          </div>
          <h2 className="text-lg font-bold">Art Toy : Name</h2>
          <p className="text-lg bottom-4 text-primary">฿9,999</p>
        </Link>

        <Link
          to="/detail-model"
          className="shadow-lg flex flex-col  justify-end items-center cursor-pointer"
        >
          <div>
            <img
              src="./images/Art toy/ww.png"
              alt=""
              className="w-full transition ease-linear duration-[1000ms] hover:transform hover:scale-[1.1]  "
            />
          </div>
          <h2 className="text-lg font-bold">Art Toy : Name</h2>
          <p className="text-lg bottom-4 text-primary">฿9,999</p>
        </Link>

        <Link
          to="/detail-model"
          className="shadow-lg flex flex-col  justify-end items-center cursor-pointer"
        >
          <div>
            <img
              src="./images/Art toy/qq.png"
              alt=""
              className="w-full transition ease-linear duration-[1000ms] hover:transform hover:scale-[1.1]  "
            />
          </div>
          <h2 className="text-lg font-bold">Art Toy : Name</h2>
          <p className="text-lg bottom-4 text-primary">฿9,999</p>
        </Link>

        <Link
          to="/detail-model"
          className="shadow-lg flex flex-col  justify-end items-center cursor-pointer"
        >
          <div>
            <img
              src="./images/Art toy/dd.png"
              alt=""
              className="w-full transition ease-linear duration-[1000ms] hover:transform hover:scale-[1.1]  "
            />
          </div>
          <h2 className="text-lg font-bold">Art Toy : Name</h2>
          <p className="text-lg bottom-4 text-primary">฿9,999</p>
        </Link>

        <Link
          to="/detail-model"
          className="shadow-lg flex flex-col  justify-end items-center cursor-pointer"
        >
          <div>
            <img
              src="./images/Art toy/pp.png"
              alt=""
              className="w-full transition ease-linear duration-[1000ms] hover:transform hover:scale-[1.1]  "
            />
          </div>
          <h2 className="text-lg font-bold">Art Toy : Name</h2>
          <p className="text-lg bottom-4 text-primary">฿9,999</p>
        </Link>

        <Link
          to="/detail-model"
          className="shadow-lg flex flex-col  justify-end items-center cursor-pointer"
        >
          <div>
            <img
              src="./images/Art toy/ee.png"
              alt=""
              className="w-full transition ease-linear duration-[1000ms] hover:transform hover:scale-[1.1]  "
            />
          </div>
          <h2 className="text-lg font-bold">Art Toy : Name</h2>
          <p className="text-lg bottom-4 text-primary">฿9,999</p>
        </Link>

        <Link
          to="/detail-model"
          className="shadow-lg flex flex-col  justify-end items-center cursor-pointer"
        >
          <div>
            <img
              src="./images/Art toy/yy.png"
              alt=""
              className="w-full transition ease-linear duration-[1000ms] hover:transform hover:scale-[1.1]  "
            />
          </div>
          <h2 className="text-lg font-bold">Art Toy : Name</h2>
          <p className="text-lg bottom-4 text-primary">฿9,999</p>
        </Link>

        <Link
          to="/detail-model"
          className="shadow-lg flex flex-col  justify-end items-center cursor-pointer"
        >
          <div>
            <img
              src="./images/Art toy/tt.png"
              alt=""
              className="w-full transition ease-linear duration-[1000ms] hover:transform hover:scale-[1.1]  "
            />
          </div>
          <h2 className="text-lg font-bold">Art Toy : Name</h2>
          <p className="text-lg bottom-4 text-primary">฿9,999</p>
        </Link>

        <Link
          to="/detail-model"
          className="shadow-lg flex flex-col  justify-end items-center cursor-pointer"
        >
          <div>
            <img
              src="./images/Art toy/ss.png"
              alt=""
              className="w-full transition ease-linear duration-[1000ms] hover:transform hover:scale-[1.1]  "
            />
          </div>
          <h2 className="text-lg font-bold">Art Toy : Name</h2>
          <p className="text-lg bottom-4 text-primary">฿9,999</p>
        </Link>
      </div>
    </>
  );
};

export default Arttoy;
