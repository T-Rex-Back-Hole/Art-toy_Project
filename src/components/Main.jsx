import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useData } from "./DataProvider";

import imageArtToy from "../../images/Art toy/cc.png";
import imageHero from "../../images/dead564.png";
import image2 from "../../images/arr1.webp";
import image3 from "../../images/toy1.png";
import image4 from "../../images/news2.webp";
import image5 from "../../images/news1.webp";
import brander1 from "../../images/brand1.png";
import brander2 from "../../images/brand2.png";
import brander3 from "../../images/brand3.png";
import brander4 from "../../images/brand4.png";
import brander5 from "../../images/brand5.png";
import brander6 from "../../images/brand6.png";

const Main = () => {
  const { products } = useData();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const totalItems = products.length;

  const goNext = () => {
    if (currentIndex < totalItems - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [openQuestion, setOpenQuestion] = useState(null);

  const questions = [
    {
      question: "What is our Art Toy store all about?",
      answer:
        "Our Art Toy store is all about providing unique, artist-designed collectible toys...",
    },
    {
      question: "Where do Art Toys originate from?",
      answer:
        "Art Toys originated from the urban and street art scene, gaining popularity...",
    },
    {
      question: "What makes Art Toys different from regular toys?",
      answer:
        "Art Toys are different from regular toys because they focus on artistic expression...",
    },
    {
      question: "What types of Art Toys do we offer?",
      answer:
        "We offer various types of Art Toys, including vinyl figures, resin models...",
    },
  ];

  const toggleAnswer = (questionIndex) => {
    setOpenQuestion(openQuestion === questionIndex ? null : questionIndex);
  };
  return (
    <>
      <section id="refer">
        <h1 className="font-bold text-3xl text-center my-10 lg:text-5xl">
          Art Toy reference
        </h1>
        <div
          id="container-toy"
          className="relative flex justify-center lg:flex lg:justify-evenly md:mx-10 lg:mx-0"
        >
          {products
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((product) => (
              <Link
                key={product.id}
                to={`/detail/${product.id}`}
                className="w-auto refer-img lg:flex"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  id="refer-img"
                  className="lg:pt-5 h-96 object-contain"
                />
              </Link>
            ))}
          <i
            onClick={goPrev}
            className={`absolute fa-solid fa-circle-chevron-left text-3xl left-5 bottom-2/4 opacity-60 text-[#B47AEA] lg:text-5xl lg:cursor-pointer ${
              currentIndex === 0
                ? "opacity-30 cursor-not-allowed"
                : "active:text-purple-600 lg:hover:text-purple-600"
            }`}
          ></i>
          <i
            onClick={goNext}
            className={`absolute fa-solid fa-circle-chevron-right text-3xl right-5 bottom-2/4 opacity-60 text-[#B47AEA] lg:text-5xl lg:cursor-pointer ${
              currentIndex === totalItems - itemsPerPage
                ? "opacity-30 cursor-not-allowed"
                : "active:text-purple-600 lg:hover:text-purple-600"
            }`}
          ></i>
        </div>
      </section>

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

      <section id="brand" className="my-6 lg:my-12">
        <div
          id="brand-logo"
          className="grid grid-cols-3 gap-4 mx-6 lg:grid-cols-6 lg:my-6"
        >
          <img src={brander1} alt="" className="" />
          <img src={brander2} alt="" className="" />
          <img src={brander3} alt="" className="" />
          <img src={brander4} alt="" className="" />
          <img src={brander5} alt="" className="" />
          <img src={brander6} alt="" className="" />
        </div>
      </section>

      {/* Q&A ---------------------------------------------------------------------------------------------------------------*/}
      <section id="q-and-a" className="bg-[#B47AEA] p-6 lg:p-12">
        <h1 className="text-center text-white text-4xl font-bold mb-6 lg:text-5xl lg:mb-12">
          Art toy: Q&A
        </h1>

        <div className="max-w-xl mx-auto">
          {questions.map((question, index) => (
            <div key={index} className="mb-2">
              <div
                className="bg-white p-4 rounded-lg flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <span className="text-gray-800 font-medium text-sm lg:text-base">
                  {question.question}
                </span>
                <span className="text-purple-500 text-xl font-bold">
                  {openQuestion === index ? "-" : "+"}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  openQuestion === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                } bg-gray-100 rounded-lg mt-2`}
              >
                <div className="p-4 text-gray-700 text-sm lg:text-base">
                  {question.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subscribe --------------------------------------------------------------------------------------------------- */}
      <section id="subscribe" className="bg-[#F7F7F7] p-8">
        <div
          id="container-text"
          className="flex flex-col justify-center text-center"
        >
          <h3 className="text-[#FFA4D5] text-2xl font-semibold">Subscribe!</h3>
          <h1 className="text-[#B47AEA] font-bold text-3xl">News Letter</h1>
          <p className="text-[#B47AEA] text-sm lg:text-base">
            Subscribe to our newsletter and receive all the news and exclusive
            deals from T-Rex!
          </p>
        </div>
        <div
          id="subscribe-email"
          className="flex flex-col lg:flex-row lg:justify-center"
        >
          <input
            type="email"
            placeholder="E-mail"
            className="h-10 mt-4 placeholder:pl-3 rounded-full w-full lg:w-96 lg:h-12 lg:m-4 lg:px-4 lg:py-2 border border-gray-300 lg:rounded-md lg:placeholder:pl-0 focus:ring-1 focus:outline-none"
          />
          <button
            type="submit"
            id="subscribe-btn"
            className="h-10 mt-4 bg-[#B47AEA] rounded-full lg:h-12 lg:px-12 lg:py-2  lg:rounded-md text-white lg:hover:bg-purple-600 focus:outline-none font-semibold text-xl"
          >
            Subscribe
          </button>
        </div>
      </section>

      <section id="icon-service">
        <div
          id="container-service"
          className="p-2 grid grid-cols-2 lg:flex lg:flex-row lg:justify-evenly lg:p-10"
        >
          <div id="service-box1" className="text-center p-8 lg:p-10">
            <i className="text-[#B47AEA] fa-solid fa-lock text-4xl"></i>
            <p className="">Payment</p>
            <p>100% secured</p>
          </div>
          <div id="service-box2" className="text-center p-8 lg:p-10">
            <i className="text-[#B47AEA] fa-solid fa-rocket text-4xl"></i>
            <p>Payment</p>
            <p>100% secured</p>
          </div>
          <div id="service-box3" className="text-center p-8 lg:p-10">
            <i className="text-[#B47AEA] fa-solid fa-gift text-4xl"></i>
            <p>Payment</p>
            <p>100% secured</p>
          </div>
          <div id="service-box4" className="text-center p-8 lg:p-10">
            <i className="text-[#B47AEA] fa-solid fa-comments text-4xl"></i>
            <p>Payment</p>
            <p>100% secured</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
