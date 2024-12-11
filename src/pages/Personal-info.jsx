import React from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataProvider";
import { useState, useEffect } from "react";
import axios from "axios";

const PersonalInformation = () => {
  const navigate = useNavigate();
  const { token, setToken } = useData();
  const [userData, setUserData] = useState({
    userName: '',
    email: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_USER_URL}/client/profile`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        if (response.data.success) {
          setUserData({
            userName: response.data.userData.userName,
            email: response.data.userData.email
          });
        }
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    if (token) {
      fetchUserData();
    }
  }, [token]);

  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      setToken(null);
      navigate('/login')
    } catch (error) {
      console.log("Logout error", error);
    }
  };

  return (
    <>
      <div className="font-bold text-5xl text-center my-12">Your account</div>
      <section id="personal-information" className="flex flex-row">
        <section
          id="left-container"
          className="w-1/4 ml-20 flex flex-col items-center p-2 bg-F7F7F7 lg:w-2/12"
        >
          <i className="fa-solid fa-circle-user text-6xl lg:text-9xl text-gray-400"></i>
          <div id="name" className="font-bold text-center mt-2">
            Pook Thatchai
          </div>
          <button
            id="info-box"
            className="w-full rounded-full mt-1 font-bold bg-[#B47AEA] text-center text-white py-3 px-2 mb-1 lg:mt-5"
          >
            Personal information
          </button>
          <button
            id="imgchange-box"
            className="w-full rounded-full mt-1 font-bold bg-[#B47AEA] text-center text-white py-3 px-2 mb-1 lg:mt-3"
          >
            Change picture
          </button>
          <button
            id="passwordchange-box"
            className="w-full rounded-full mt-1 font-bold bg-[#B47AEA] text-center text-white py-3 px-2 mb-1 lg:mt-3"
          >
            Change password
          </button>
          <button
            onClick={handleLogout}
            className="w-full rounded-full mt-1 font-bold bg-[#e24f45] text-center text-white py-3 px-2 mb-1 lg:mt-3"
          >
            Logout
          </button>
        </section>
        <section
          id="right-container"
          className="w-full flex flex-col gap-4 ml-4 mt-4 mb-6"
        >
          <div id="user" className="flex flex-row gap-4">
            <div
              id="user-left"
              className="w-1/3 flex justify-end items-center text-end lg:w-1/6"
            >
              User
            </div>
            <div
              id="user-right"
              className="w-full rounded-full border border-gray-300 py-5 px-6 mr-10 lg:w-1/2"
            >
              {userData.userName}
            </div>
          </div>
          <div id="name" className="flex flex-row gap-4">
            <div
              id="name-left"
              className="w-1/3 flex justify-end items-center text-end lg:w-1/6"
            >
              Name
            </div>
            <div
              id="name-right"
              className="w-full rounded-full border border-gray-300 py-5 px-6 mr-10 lg:w-1/2"
            ></div>
          </div>
          <div id="email" className="flex flex-row gap-4">
            <div
              id="email-left"
              className="w-1/3 flex justify-end items-center text-end lg:w-1/6"
            >
              E-mail
            </div>
            <div
              id="email-right"
              className="w-full rounded-full border border-gray-300 py-5 px-6 mr-10 lg:w-1/2"
            >
              {userData.email}
            </div>
          </div>
        </section>
      </section>

      <section id="subscribe" className="bg-[#F7F7F7] p-8">
        <div id="container-text" className="flex flex-col justify-center text-center">
          <h3 className="text-[#FFA4D5] text-2xl font-semibold">Subscribe!</h3>
          <h1 className="text-[#B47AEA] font-bold text-4xl">News Letter</h1>
          <p className="text-[#B47AEA]">
            Subscribe to our newsletter and receive all the news and exclusive
            deals from T-Rex!
          </p>
        </div>
        <div id="subscribe-email" className="flex flex-col lg:flex-row lg:justify-center">
          <input
            type="email"
            placeholder="E-mail"
            className="h-10 mt-4 placeholder:pl-3 rounded-full w-full lg:w-96 lg:h-12 lg:m-4 lg:px-4 lg:py-2 border border-gray-300 lg:rounded-md lg:placeholder:pl-0 focus:ring-1 focus:outline-none"
          />
          <button
            type="submit"
            id="subscribe-btn"
            className="h-10 mt-4 bg-[#B47AEA] rounded-full lg:h-12 lg:px-12 lg:py-2 lg:rounded-md text-white lg:hover:bg-purple-600 focus:outline-none font-semibold text-xl"
          >
            Subscribe
          </button>
        </div>
      </section>

      <section id="icon-service">
        <div id="container-service" className="p-2 grid grid-cols-2 lg:flex lg:flex-row lg:justify-evenly lg:p-10">
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

export default PersonalInformation;
