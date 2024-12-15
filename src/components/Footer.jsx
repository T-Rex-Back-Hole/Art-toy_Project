import React from "react";
import Dino from "../../images/dino.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-black p-4 text-white text-center">
        <div
          id="footer-container"
          className="flex flex-col lg:flex-row items-center"
        >
          <div id="footer-left" className="flex flex-col p-4 lg:w-6/12 lg:p-10">
            <h1 className="font-bold text-xl lg:text-4xl text-[#B47AEA] lg:text-left lg:mt-6">
              Art toy : Exclusive Designer Toys & Collectibles
            </h1>
            <p className="text-justify mt-6">
              "Explore a world of exclusive designer toys and figurines from
              renowned brands such as Tokidoki, Medicom Toy, Toy2R, and our very
              own Art Toy Originals. Whether you’re a collector or simply
              appreciate unique designs, our curated selection is sure to
              inspire and ignite your creativity. Start your journey with us
              today."
            </p>
            <button
              id="fllow-btn"
              className="bg-[#B47AEA] p-2 rounded-md font-semibold text-xl w-72 mt-10 lg:hover:bg-purple-600 focus:outline-none"
            >
              <i className="fa-solid fa-heart pr-5 text-[#FFA4D5] text-xl"></i>
              Follow on Shop
            </button>
          </div>

          <div
            id="footer-right"
            className="flex flex-col justify-center w-6/12 p-10"
          >
            <div id="footer-img">
              <img src={Dino} alt="" className="w-96 lg:w-5/12 lg:mx-auto" />
            </div>
            <div id="footer-icon" className="flex justify-center mt-8">
              <i className="fa-brands fa-facebook footer-icon"></i>
              <i className="fa-brands fa-twitter footer-icon"></i>
              <i className="fa-brands fa-instagram footer-icon"></i>
              <i className="fa-brands fa-pinterest footer-icon"></i>
              <i className="fa-brands fa-youtube footer-icon"></i>
            </div>
          </div>
        </div>

        <p className="text-center">
          &copy; {new Date().getFullYear()} T-Rex Black Hole. All rights
          reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
