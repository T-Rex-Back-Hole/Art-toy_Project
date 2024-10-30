import React from "react";

const Account = () => {
  return (
    <>
      <div className="font-bold text-4xl text-center my-12">
        Your account 02
      </div>

      <section id="account" className="flex flex-col items-center">
        <div id="info" className="">
          <i class="fa-solid fa-circle-user size-36 text-9xl text-gray-400 text-center"></i>
        </div>
        <p className="text-center text-2xl font-semibold m-4">Pook Thatchai</p>

        <div
          id="top-container"
          className="flex flex-col items-center mb-4 justify-center gap-2 container mx-auto lg:gap-6 lg:my-4 lg:flex-row"
        >
          <button className="acc-btn ">Personal</button>
          <button className="acc-btn ">Address</button>
          <button className="acc-btn">Change picture</button>
          <button className="acc-btn">Change password</button>
        </div>
        </section>

        <section id="bt-container" className="m-6">
          <div id="User" className="container mx-auto p-4 gap-2 rounded-xl flex flex-col bg-gray-50 border-solid border-gray-400 lg:p-14 lg:w-5/6">
            <div id="user" className="flex justify-between">
              <p className="text-left">User</p>
              <p className="text-right block w-full">Pook1234</p>
            </div>
            <hr className="border-t-2 border-gray-300 my-4 w-full"/>
            <div id="user" className="flex justify-between">
              <p className="text-left w-full">Name</p>
              <p className="text-right block w-full">Pook Thatchai</p>
            </div>
            <hr className="border-t-2 border-gray-300 my-4 w-full"/>
            <div id="user" className="flex justify-between">
              <p className="text-left w-full">E-mail</p>
              <p className="text-right block w-full">mymail@email.com</p>
            </div>
            <hr className="border-t-2 border-gray-300 my-4 w-full"/>
            <div id="user" className="flex justify-between">
              <p className="text-left w-full">Phone number</p>
              <p className="text-right block w-full">099-999-9999</p>
            </div>
            <hr className="border-t-2 border-gray-300 my-4 w-full"/>
            <div id="user" className="flex justify-between">
              <p className="text-left w-full">Gender</p>
              <p className="text-right block w-full">Male</p>
            </div>
            <hr className="border-t-2 border-gray-300 my-4 w-full"/>
            <div id="user" className="flex justify-between">
              <p className="text-left w-full">Date of birth</p>
              <p className="text-right block w-full">31-10-1991</p>
            </div>
            <hr className="border-t-2 border-gray-300 my-4 w-full"/>

          </div>
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

export default Account;
