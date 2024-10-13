import React from "react";

const Main = () => {
  return (
    <>
      <section id="refer">
        <h1 className="font-bold text-3xl text-center my-10 lg:text-5xl">
          Art Toy reference
        </h1>
        <div
          id="container-toy"
          className="relative flex justify-center lg:flex lg:justify-around"
        >
          <img
            src="./images/qq.png"
            alt="" id="refer-img"
            className="container-toy w-40 pb-5 lg:w-2/12 lg:pb-0 refer-img "
          />
          <img
            src="./images/ddd.png"
            alt="" id="refer-img"
            className="container-toy hidden lg:inline refer-img"
          />
          <img
            src="./images/uu.png"
            alt="" id="refer-img"
            className="container-toy hidden lg:inline refer-img"
          />
          <img
            src="./images/ii.png"
            alt="" id="refer-img"
            className="container-toy hidden lg:inline refer-img"
          />

          <i
            id="arrow-r"
            className="absolute fa-solid fa-circle-chevron-right text-3xl right-5 bottom-2/4 opacity-60 text-[#B47AEA] lg:text-5xl lg:cursor-pointer active:text-purple-600"
          ></i>
          <i
            id="arrow-r"
            className="absolute fa-solid fa-circle-chevron-left text-3xl left-5 bottom-2/4 opacity-60 text-[#B47AEA] lg:text-5xl lg:cursor-pointer active:text-purple-600"
          ></i>
        </div>
        <div id="refer-btn" className="flex justify-center my-8">
          <button className="bg-[#B47AEA] text-white px-10 py-2 rounded-full justify-center lg:rounded-md lg:hover:bg-purple-600 lg:cursor-pointer">
            All our news
          </button>
        </div>
      </section>

      <section id="category" className=" justify-center">
        <h1 className="text-center text-4xl font-bold my-6 lg:text-5xl lg:mt-12">
          Category
        </h1>
        <div
          id="container-category"
          className="flex flex-col lg:flex-row justify-center"
        >
          <div
            id="box-left"
            className="flex flex-col justify-center lg:w-1/2 bg-[#B47AEA] p-8 m-6 lg:p-6 lg:m-6 rounded-xl"
          >
            <img src="./images/cc.png" alt="" className="" />
            <button className="bg-white text-[#B47AEA] text-xl font-bold rounded-full py-2 px-10 lg:px-24 lg:h-20 lg:text-3xl lg:rounded-md lg:hover:bg-purple-600 lg:hover:text-white lg:cursor-pointer">
              ART TOY
            </button>
          </div>
          <div
            id="box-right"
            className="flex flex-col justify-center lg:w-1/2 bg-[#5BDEE7] p-8 m-6 lg:p-6 lg:m-6 rounded-xl"
          >
            <img src="./images/dead564.png" alt="" className="" />
            <button className="bg-white text-[#B47AEA] text-xl font-bold rounded-full py-2 px-10 lg:px-24 lg:h-20 lg:text-3xl lg:rounded-md lg:hover:bg-purple-600 lg:hover:text-white lg:cursor-pointer">
              HERO
            </button>
          </div>
        </div>
      </section>

      <section id="arrival">
        <h1 className="text-center text-4xl font-bold my-6 lg:text-5xl lg:mt-12">
          Arrival of the week
        </h1>
        <div
          id="container-arrival"
          className="flex flex-col lg:flex-row justify-center lg:m-6"
        >
          <div
            id="box-left"
            className="hidden lg:w-1/2 lg:flex lg:flex-col lg:justify-center"
          >
            <img src="./images/arr1.webp" alt="" className="" />
          </div>
          <div
            id="box-right"
            className="flex flex-col justify-center text-center m-6 shadow-lg p-6 rounded-xl lg:shadow-none lg:m-0 lg:w-1/2 lg:p-12"
          >
            <div id="right-img" className="flex justify-center">
              <img src="./images/toy1.png" alt="" className="w-1/2" />
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
        <h1 className="text-center text-4xl font-bold my-6 lg:text-5xl lg:mt-6 lg:mb-10">Art Toy news</h1>
        <div id="container-news" className="flex justify-center">
          <div id="box-newsleft" className="hidden lg:inline lg:w-1/2 lg:px-2 lg:mx-3">
            <img src="./images/news2.webp" alt="" />
            <h2 className="text-xl font-bold my-6 lg:text-2xl lg:mt-12">Introducing BoomBot: The Futuristic Art Toy Taking</h2>
            <p className="text-justify">
              In the ever-evolving world of Art Toys, a groundbreaking new
              figure has been unveiled—"BoomBot," a futuristic collectible
              blending vibrant colors and intricate artistic patterns like never
              before. Inspired by street art and futuristic designs, BoomBot has
              quickly captivated fans and collectors worldwide. Its geometric
              patterns and bold, vivid hues make it a must-have for anyone
              passionate about unique art toys.
            </p>
            <a href="#" className="text-[#5BDEE7]">Read more</a>
          </div>

          <div id="box-newsright" className="mx-6 lg:w-1/2 lg:px-2 lg:mx-3">
            <img src="./images/news1.webp" alt="" />
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
            <a href="#" className="text-[#5BDEE7]">Read more</a>
          </div>
        </div>

        <div id="news-btn" className="flex justify-center">
        <button className="bg-[#B47AEA] text-white text-xl font-bold rounded-full my-2 py-2 px-10 lg:w-1/2 lg:px-4 lg:mt-4 lg:text-3xl lg:rounded-md lg:hover:bg-purple-600 lg:hover:text-white lg:cursor-pointer">All the news</button>
        </div>
      </section>

      <section id="brand" className="my-6 lg:my-12">
        <div id="brand-logo" className="grid grid-cols-3 gap-4 mx-6 lg:grid-cols-6 lg:my-6">
            <img src="./images/brand1.png" alt="" className="" />
            <img src="./images/brand2.png" alt="" className="" />
            <img src="./images/brand3.png" alt="" className="" />
            <img src="./images/brand4.png" alt="" className="" />
            <img src="./images/brand5.png" alt="" className="" />
            <img src="./images/brand6.png" alt="" className="" />
        </div>
      </section>

      <section id="q-and-a" className="bg-[#B47AEA] p-6 lg:p-12">
        <h1 className="text-center text-white text-4xl font-bold mb-6 lg:text-5xl lg:mb-12">Art toy: Q&A</h1>
        <div id="container-qa" className="flex flex-col justify-center lg:px-12">

            <div id="box-qa1" className="flex flex-col relative bg-white rounded-full p-3 lg:p-5 mb-4">
                <p className="lg:text-lg">What is our Art Toy store all about?</p>
                <div id="qa-btn" className="">
                    <i className="fa-solid fa-circle-plus absolute text-[#B47AEA] text-2xl top-1/2 right-4 transform -translate-y-1/2 opacity-80 lg:text-5xl lg:cursor-pointer active:text-purple-600"></i>
                </div>
            </div>
            <div id="box-qa2" className="flex flex-col relative bg-white rounded-full p-3 lg:p-5 mb-4">
                <p className="lg:text-lg">Where do Art Toys originate from?</p>
                <div id="qa-btn" className="">
                    <i className="fa-solid fa-circle-plus absolute text-[#B47AEA] text-2xl top-1/2 right-4 transform -translate-y-1/2 opacity-80 lg:text-5xl lg:cursor-pointer active:text-purple-600"></i>
                </div>
            </div>
            <div id="box-qa3" className="flex flex-col relative bg-white rounded-full p-3 lg:p-5 mb-4">
                <p className="lg:text-lg">What Art Toys different from regular?</p>
                <div id="qa-btn" className="">
                    <i className="fa-solid fa-circle-plus absolute text-[#B47AEA] text-2xl top-1/2 right-4 transform -translate-y-1/2 opacity-80 lg:text-5xl lg:cursor-pointer active:text-purple-600"></i>
                </div>
            </div>
            <div id="box-qa4" className="flex flex-col relative bg-white rounded-full p-3 lg:p-5 mb-4">
                <p className="lg:text-lg">What types of Art Toys do we offer?</p>
                <div id="qa-btn" className="">
                    <i className="fa-solid fa-circle-plus absolute text-[#B47AEA] text-2xl top-1/2 right-4 transform -translate-y-1/2 opacity-80 lg:text-5xl lg:cursor-pointer active:text-purple-600"></i>
                </div>
            </div>
        </div>

      </section>

      <section id="subscribe" className="bg-[#F7F7F7] p-8">
            <div id="container-text" className='flex flex-col justify-center text-center'>
              <h3 className="text-[#FFA4D5] text-2xl font-semibold">Subscribe!</h3>
              <h1 className="text-[#B47AEA] font-bold text-4xl">News Letter</h1>
              <p className="text-[#B47AEA]">Subscribe to our newsletter and receive all the news and exclusive deals from T-Rex!</p>
            </div>
            <div id="subscribe-email" className='flex flex-col lg:flex-row lg:justify-center'>
              <input type="email" placeholder='E-mail' className="h-10 mt-4 placeholder:pl-3 rounded-full w-full lg:w-96 lg:h-12 lg:m-4 lg:px-4 lg:py-2 border border-gray-300 lg:rounded-md lg:placeholder:pl-0 focus:ring-1 focus:outline-none" />
              <button type="submit" id='subscribe-btn' className="h-10 mt-4 bg-[#B47AEA] rounded-full lg:h-12 lg:px-12 lg:py-2  lg:rounded-md text-white lg:hover:bg-purple-600 focus:outline-none font-semibold text-xl">Subscribe</button>
            </div>
          </section>

          <section id="icon-service">
            <div id="container-service" className='p-2 grid grid-cols-2 lg:flex lg:flex-row lg:justify-evenly lg:p-10'>

              <div id="service-box1" className='text-center p-10'>
                  <i className='text-[#B47AEA] fa-solid fa-lock text-4xl'></i>
                  <p>Payment</p>
                  <p>100% secured</p>
              </div>
              <div id="service-box2" className='text-center p-10'>
                  <i className='text-[#B47AEA] fa-solid fa-rocket text-4xl'></i>
                  <p>Payment</p>
                  <p>100% secured</p>
              </div>
              <div id="service-box3" className='text-center p-10'>
                  <i className='text-[#B47AEA] fa-solid fa-gift text-4xl'></i>
                  <p>Payment</p>
                  <p>100% secured</p>
              </div>
              <div id="service-box4" className='text-center p-10'>
                  <i className='text-[#B47AEA] fa-solid fa-comments text-4xl'></i>
                  <p>Payment</p>
                  <p>100% secured</p>
              </div>

            </div>
          </section>

    </>
  );
};

export default Main;
