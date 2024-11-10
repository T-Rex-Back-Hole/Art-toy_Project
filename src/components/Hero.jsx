import React, { useState } from "react";

const Hero = () => {
  const sliders = [
    {
      url: "https://i.postimg.cc/d1dm57mF/banner1.png",
    },
    {
      url: "https://i.postimg.cc/br90jKBF/banner2.png",
    },
    {
      url: "https://i.postimg.cc/d3YRpq4y/banner3.png",
    },
  ];

  return (
    <>
      <section id="slider-container">
        <div id="slider" className="relative w-full">
          <div className="w-full duration-500">
            <img src="https://i.postimg.cc/d1dm57mF/banner1.png" alt="" className="w-full" />

          </div>

          <div
            id="slider-nav"
            className="flex absolute gap-x-2 lg:gap-x-4 bottom-4 left-2/4 translate-x-[-50%] z-10"
          >
            <a href="#slide-1" className="nav-bullet"></a>
            <a href="#slide-2" className="nav-bullet"></a>
            <a href="#slide-3" className="nav-bullet"></a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
