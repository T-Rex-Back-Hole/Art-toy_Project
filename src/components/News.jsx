import React from "react";
import image4 from "../../images/news2.webp";
import image5 from "../../images/news1.webp";

function News() {
  return (
    <>
      <section id="news" className="flex  flex-col justify-center">
        <h1 className="text-center text-4xl font-bold my-6 lg:text-5xl lg:mt-6 lg:mb-10">
          Art Toy news
        </h1>
        <div id="container-news" className="flex justify-center">
          <div
            id="box-newsleft"
            className="hidden lg:inline lg:w-1/2 lg:px-2 lg:mx-3"
          >
            <img src={image4} alt="" />
            <h2 className="text-xl font-bold my-6 lg:text-2xl lg:mt-12">
              Introducing BoomBot: The Futuristic Art Toy Taking
            </h2>
            <p className="text-justify">
              In the ever-evolving world of Art Toys, a groundbreaking new
              figure has been unveiled—"BoomBot," a futuristic collectible
              blending vibrant colors and intricate artistic patterns like never
              before. Inspired by street art and futuristic designs, BoomBot has
              quickly captivated fans and collectors worldwide. Its geometric
              patterns and bold, vivid hues make it a must-have for anyone
              passionate about unique art toys.
            </p>
            <a href="#" className="text-[#5BDEE7]">
              Read more
            </a>
          </div>

          <div id="box-newsright" className="mx-6 lg:w-1/2 lg:px-2">
            <img src={image5} alt="" />
            <h2 className="text-xl font-bold my-6 lg:text-2xl lg:mt-12">
              Art Toy Spotlight: The Rise of CircleBear – A New Era of Playful
              Design
            </h2>
            <p className="text-justify">
              Introducing "CircleBear," the latest sensation in the world of Art
              Toys. This charming bear-like figure stands out with its unique
              circular patterns and soft, inviting colors that blend modern
              design with playful creativity. Crafted to captivate both young
              and old, CircleBear is quickly becoming a favorite among
              collectors due to its vibrant yet minimalistic design.
            </p>
            <a href="#" className="text-[#5BDEE7]">
              Read more
            </a>
          </div>
        </div>

        <div id="news-btn" className="flex justify-center">
          <button className="bg-[#B47AEA] text-white text-xl font-bold rounded-full my-2 py-2 px-10 lg:w-1/2 lg:px-4 lg:mt-4 lg:text-3xl lg:rounded-md lg:hover:bg-purple-600 lg:hover:text-white lg:cursor-pointer">
            All the news
          </button>
        </div>
      </section>
    </>
  );
}

export default News;
