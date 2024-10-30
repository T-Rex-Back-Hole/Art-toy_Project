import React from "react";
import Register from "./Register";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="font-bold text-5xl text-center my-12">Log in</div>
      <section
        id="form"
        className="flex flex-col justify-center lg:flex-row lg:justify-center"
      >
        <form className="flex flex-col px-4 lg:flex-col lg:justify-center lg:space-y-4 lg:w-1/2 lg:px-0">
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            className="w-full rounded-full px-4 py-2 border border-gray-300 lg:rounded-md focus:ring-1 focus:outline-none"
          />
          <input
            id="password"
            type="text"
            placeholder="Password"
            className="w-full rounded-full px-4 py-2 border border-gray-300 lg:rounded-md focus:ring-1 focus:outline-none"
          />
          <Link to="/personal-info">
            <div id="btn-login" className="flex w-full">
              <button
                type="submit"
                class="w-full rounded-full mt-4 font-bold bg-[#B47AEA] text-white py-3 px-6 mb-3 lg:mt-0 lg:rounded-md lg:hover:bg-purple-600 focus:outline-none"
              >
                Login
              </button>
            </div>
          </Link>
        </form>
      </section>
      <div id="go-to-register" className="text-center">
        <p>
          Don't have an account?
          <Link to="/register">
            <button className="font-bold mb-3"> Sign up </button>
          </Link>
        </p>
      </div>
      <div
        id="login-by"
        className="flex flex-row lg:justify-center lg:flex-row lg:space-x-4 mb-5"
      >
        <button
          id="facebook-login"
          class="rounded-full w-1/2 lg:w-1/6 mt-4 md:mt-0 px-4 py-2 border border-gray-300 lg:rounded-md"
        >
          <img></img>
          Facebook
        </button>
        <button
          id="google-login"
          class="rounded-full w-1/2 lg:w-1/6 mt-4 md:mt-0 px-4 py-2 border border-gray-300 lg:rounded-md "
        >
          <img></img>
          Google
        </button>
      </div>

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

export default Login;
