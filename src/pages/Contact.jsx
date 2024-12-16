import React from "react";

const Contact = () => {
  return (
    <>
      <div className="font-bold text-5xl text-center my-12">Contact</div>
      <section
        id="form"
        className="flex flex-col justify-center lg:flex-row lg:justify-center"
      >
        <form className="flex flex-col px-4 lg:flex-col lg:justify-center lg:space-y-4 lg:w-1/2 lg:px-0">
          <div
            id="name-email-input"
            className="flex flex-col lg:justify-center lg:flex-row lg:space-x-4"
          >
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="w-full rounded-full lg:w-1/2 px-4 py-2 border border-gray-300 lg:rounded-md focus:ring-1 focus:outline-none"
              required
            />
            <input
              id="email"
              type="email"
              placeholder="E-mail"
              className="w-full rounded-full lg:w-1/2 mt-4 md:mt-0 px-4 py-2 border border-gray-300 lg:rounded-md focus:ring-1 focus:outline-none"
              required
            />
          </div>

          <div id="text-area" className="w-full">
            <textarea
              name=""
              id="text-area"
              rows="4"
              placeholder="Message"
              class="w-full rounded-2xl placeholder:pl-3 mt-4 lg:w-full lg:placeholder:pl-0 lg:mt-0 lg:px-4 lg:py-2 border border-gray-300 lg:rounded-md focus:ring-1 focus:outline-none"
              required
            />
          </div>
          <div id="btn-contact" className="flex w-full">
            <button
              type="submit"
              class="w-full rounded-full mt-4 font-bold bg-[#B47AEA] text-white py-3 px-6 mb-12 lg:mt-0 lg:rounded-md lg:hover:bg-purple-600 focus:outline-none"
            >
              Send message
            </button>
          </div>
        </form>
      </section>

      <section id="subscribe" className="bg-[#F7F7F7] p-8">
        <div
          id="container-text"
          className="flex flex-col justify-center text-center"
        >
          <h3 className="text-[#FFA4D5] text-2xl font-semibold">Subscribe!</h3>
          <h1 className="text-[#B47AEA] font-bold text-4xl">News Letter</h1>
          <p className="text-[#B47AEA]">
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
            required
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
          <div id="service-box1" className="text-center p-10">
            <i className="text-[#B47AEA] fa-solid fa-lock text-4xl"></i>
            <p>Payment</p>
            <p>100% secured</p>
          </div>
          <div id="service-box2" className="text-center p-10">
            <i className="text-[#B47AEA] fa-solid fa-rocket text-4xl"></i>
            <p>Payment</p>
            <p>100% secured</p>
          </div>
          <div id="service-box3" className="text-center p-10">
            <i className="text-[#B47AEA] fa-solid fa-gift text-4xl"></i>
            <p>Payment</p>
            <p>100% secured</p>
          </div>
          <div id="service-box4" className="text-center p-10">
            <i className="text-[#B47AEA] fa-solid fa-comments text-4xl"></i>
            <p>Payment</p>
            <p>100% secured</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
