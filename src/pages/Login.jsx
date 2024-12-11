import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { useData } from "../context/DataProvider";
const backendUrl = import.meta.env.VITE_USER_URL;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // state สำหรับข้อความ error
  const navigate = useNavigate();
  const { token, setToken } = useData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post(
        `${backendUrl}/client/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      if (data.success) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("Login Error:", error);
      setErrorMessage("An error occurred during login.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token || localStorage.getItem("token")) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <>
      <motion.div
        className="font-bold text-5xl text-center my-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Log in
      </motion.div>
      <section
        id="form"
        className="flex flex-col justify-center lg:flex-row lg:justify-center"
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col px-4 gap-y-4 lg:gap-y-0 lg:flex-col lg:justify-center lg:space-y-4 lg:w-1/2 lg:px-0"
        >
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-full px-4 py-2 border border-gray-300 lg:rounded-md focus:ring-1 focus:outline-none"
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-full px-4 py-2 border border-gray-300 lg:rounded-md focus:ring-1 focus:outline-none"
          />
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}{" "}
          <div id="btn-login" className="flex w-full">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-full mt-2 font-bold bg-[#B47AEA] text-white py-3 px-6 mb-3 lg:mt-0 lg:rounded-md lg:hover:bg-purple-600 focus:outline-none"
            >
              {isLoading ? (
                <div className="flex justify-center">
                  <ReactLoading
                    type="spin"
                    height={24}
                    width={24}
                    color="#ffffff"
                  />
                </div>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  onHoverStart={(event) => {}}
                  onHoverEnd={(event) => {}}
                >
                  Login
                </motion.div>
              )}
            </button>
          </div>
        </form>
      </section>
      <div id="go-to-register" className="flex justify-center gap-4">
        <p className="text-gray-400">Don't have an account?</p>
        <Link to="/register">
          <button className="font-bold lg:mb-3 text-[#B47AEA]">
            {" "}
            <motion.button
              whileHover={{ scale: 1.1 }}
              onHoverStart={(event) => {}}
              onHoverEnd={(event) => {}}
            >
              Sign up{" "}
            </motion.button>
          </button>
        </Link>
      </div>
      <div
        id="login-by"
        className="flex container justify-center gap-10 lg:gap-0 lg:w-1/2 lg:mx-auto lg:justify-between lg:space-x-28 mb-10"
      >
        <motion.button
          whileHover={{ scale: 1.2 }}
          onHoverStart={(event) => {}}
          onHoverEnd={(event) => {}}
          id="facebook-login"
          className="rounded-full w-2/5 mt-4 md:mt-0 py-2 border border-gray-300 lg:rounded-md lg:w-full lg:bg-blue-500 lg:hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          <i className="fa-brands fa-facebook text-white  mr-2 lg:mr-4"></i>
          Facebook
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          onHoverStart={(event) => {}}
          onHoverEnd={(event) => {}}
          id="google-login"
          className="rounded-full w-2/5 mt-4 md:mt-0 py-2 border border-gray-300 lg:rounded-md lg:w-full lg:bg-red-500 lg:hover:bg-red-600 transition duration-300 ease-in-out"
        >
          <i className="fa-brands fa-google text-white mr-2 lg:mr-4"></i>
          Google
        </motion.button>
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
            className="h-10 mt-4 placeholder:pl-3 rounded-full w-full lg:w-96 lg:h-12 lg:m-4 lg:px-4 lg:py-2 border border-gray-300 lg:rounded-full lg:placeholder:pl-0 focus:ring-1 focus:outline-none"
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
    </>
  );
};

export default Login;
