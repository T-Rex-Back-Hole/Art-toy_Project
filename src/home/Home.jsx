import React from "react";
import Hero from "./Hero";
import Main from "./Main";

const Home = () => {
  const images = [
    "https://i.postimg.cc/d1dm57mF/banner1.png",
    "https://i.postimg.cc/br90jKBF/banner2.png",
    "https://i.postimg.cc/d3YRpq4y/banner3.png",
  ];

  return (
    <>
      <Hero images={images} />
      <Main />
    </>
  );
};

export default Home;
