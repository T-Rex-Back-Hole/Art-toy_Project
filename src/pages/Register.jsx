import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Register = () => {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordStrong, setIsPasswordStrong] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  const [formUser, setFormUser] = useState("");
 
  const navigate = useNavigate();
  const initialfromUser = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setUser([...user, formUser]);
    if (email && password) {
      navigate("/login");
    } else {
      alert("Information is incomplete");
    }
  };
  const handleChange = (event) => {
    const name = event.target.value;
    const value = event.target.value;
    setFormUser({ ...formUser, [name]: value });
  };

  useEffect(() => {
    if (email) {
      const emailRegX = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/;
      const isValidEmail = emailRegX.test(email);
      setIsEmailValid(isValidEmail);
    }
  }, [email]);

  useEffect(() => {
    if (password) {
      const minLength = password.length >= 8;
      const hasLowercase = /[a-z]/.test(password);
      const hasUppercase = /[A-Z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

      setIsPasswordStrong(
        minLength && hasLowercase && hasUppercase && hasNumber && hasSymbol
      );
    }
  }, [password]);

  return (
    <>
      <motion.div 
        className="font-bold text-5xl text-center my-12"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Sign up
      </motion.div>
      <section
        id="form"
        onSubmit={handleSubmit}
        className="flex flex-col justify-center lg:flex-row lg:justify-center"
      >
        <form
          className="flex flex-col px-4 lg:flex-col lg:justify-center lg:space-y-4 lg:w-1/2 lg:px-0"
          onSubmit={handleSubmit}
        >
          <p className="text-base my-2 px-3 lg:my-0">
            Please fill below information
          </p>
          <label>
            First Name:
            <input
              id="firstName"
              type="text"
              value={formUser.firstName}
              placeholder="First name"
              onChange={handleChange}
              className="w-full rounded-md px-4 py-2 border mb-1 border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </label>
          <label>
            Last Name:
            <input
              id="lastName"
              type="text"
              value={formUser.lastName}
              placeholder="Last Name"
              onChange={handleChange}
              className="w-full rounded-md px-4 py-2 mb-1 border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </label>
          <label>
            E-mail:{" "}
            <input
              id="email"
              type="email"
              value={formUser.email}
              placeholder="E-mail"
              onChange={(event) => {
                setEmail(event.target.value);
                handleChange();
              }}
              className="w-full rounded-md px-4 py-2 mb-1 border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            {!isEmailValid && (
              <p className="text-red-600">Email is incorrect</p>
            )}
          </label>
          <label>
            Password:{" "}
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={formUser.password}
              onChange={(event) => {
                setPassword(event.target.value);
                handleChange();
              }}
              className="w-full rounded-md px-4 py-2 mb-2 border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            {!isPasswordStrong && (
              <p className="text-red-600">
                Your password must be at least 8 characters including a
                lowercase letter, an uppercase letter, and a number
              </p>
            )}
          </label>

          <div id="btn-create-account" className="flex w-full">
            <button
              type="submit"
              className="w-full rounded-md mt-2 font-bold bg-[#B47AEA] text-white py-3 px-6 mb-3 lg:mt-0 lg:hover:bg-purple-600 focus:outline-none transition duration-300 ease-in-out"
            >
              Create account
            </button>
          </div>
        </form>
      </section>

      <div
        id="login-by"
        className="flex container justify-center gap-10 lg:gap-0 lg:w-1/2 lg:mx-auto lg:justify-between lg:space-x-28 mb-10"
      >
        <button
          id="facebook-login"
          className="rounded-full w-2/5 mt-4 md:mt-0 py-2 border border-gray-300 lg:rounded-md lg:w-full lg:hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          <i className="fa-brands fa-facebook text-white mr-2 lg:mr-4"></i>
          Facebook
        </button>
        <button
          id="google-login"
          className="rounded-full w-2/5 mt-4 md:mt-0 py-2 border border-gray-300 lg:rounded-md lg:w-full lg:hover:bg-red-600 transition duration-300 ease-in-out"
        >
          <i className="fa-brands fa-google text-white mr-2 lg:mr-4"></i>
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
            className="h-10 mt-4 placeholder:pl-3 rounded-md w-full lg:w-96 lg:h-12 lg:m-4 lg:px-4 lg:py-2 border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <button
            type="submit"
            id="subscribe-btn"
            className="h-10 mt-4 bg-[#B47AEA] rounded-md lg:h-12 lg:px-12 lg:py-2 text-white lg:hover:bg-purple-600 focus:outline-none font-semibold text-xl"
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

export default Register;
