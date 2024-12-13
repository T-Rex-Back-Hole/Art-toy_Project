import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
const backendUrl = import.meta.env.VITE_USER_URL + "/client";

const Register = () => {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordStrong, setIsPasswordStrong] = useState(true);
  const [formUser, setFormUser] = useState({
    userName: "",
    email: "",
    password: "",
    role: " ",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormUser({ ...formUser, [name]: value });
  };

  useEffect(() => {
    if (formUser.email) {
      const emailRegX = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/;
      const isValidEmail = emailRegX.test(formUser.email);
      setIsEmailValid(isValidEmail);
    } else {
      setIsEmailValid(true);
    }
  }, [formUser.email]);

  useEffect(() => {
    if (formUser.password) {
      const minLength = formUser.password.length >= 8;
      const hasLowercase = /[a-z]/.test(formUser.password);
      const hasUppercase = /[A-Z]/.test(formUser.password);
      const hasNumber = /[0-9]/.test(formUser.password);
      const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(formUser.password);

      setIsPasswordStrong(
        minLength && hasLowercase && hasUppercase && hasNumber && hasSymbol
      );
    } else {
      setIsPasswordStrong(true);
    }
  }, [formUser.password]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!formUser.userName || !formUser.email || !formUser.password) {
      setError("Please fill in all required fields");
      return;
    }

    try {
      setLoading(true);
      setError("");

      console.log('Sending data:', {
        userName: formUser.userName,
        email: formUser.email
      });

      const registerResponse = await axios.post(
        `${import.meta.env.VITE_API_URL}/client/register`,
        formUser,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      console.log('Register response:', registerResponse.data);

      if (registerResponse.data.success) {
        const loginResponse = await axios.post(
          `${import.meta.env.VITE_API_URL}/client/login`,
          {
            email: formUser.email,
            password: formUser.password
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );

        console.log('Login response:', loginResponse.data);

        if (loginResponse.data.success) {
          localStorage.setItem('token', loginResponse.data.token);
          alert("Registration and login successful!");
          navigate('/personal');
        } else {
          throw new Error(loginResponse.data.message || 'Auto login failed');
        }
      } else {
        throw new Error(registerResponse.data.message || 'Registration failed');
      }
    } catch (error) {
      console.error("Error details:", error);
      setError(
        error.response?.data?.message || 
        error.message || 
        "An error occurred during registration"
      );
    } finally {
      setLoading(false);
    }
  };

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
        className="flex flex-col justify-center lg:flex-row lg:justify-center"
      >
        <form
          className="flex flex-col px-4 lg:flex-col lg:justify-center lg:space-y-4 lg:w-1/2 lg:px-0"
          onSubmit={handleSubmit}
        >
          <p className="text-base my-2 px-1 lg:my-0">
            Please fill below information
          </p>
          <label>
            Username:{" "}
            <input
              name="userName"
              type="text"
              value={formUser.userName}
              placeholder="Username"
              onChange={handleChange}
              className="w-full rounded-md px-4 py-2 border mb-1 border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </label>
          <label>
            E-mail:{" "}
            <input
              name="email"
              type="email"
              value={formUser.email}
              placeholder="E-mail"
              onChange={handleChange}
              className="w-full rounded-md px-4 py-2 mb-1 border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            {!isEmailValid && (
              <p className="text-red-600">Email is incorrect</p>
            )}
          </label>
          <label>
            Password:{" "}
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formUser.password}
              onChange={handleChange}
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
            <motion.button
              type="submit"
              className="w-full rounded-md mt-2 font-bold bg-[#B47AEA] text-white py-3 px-6 mb-3 lg:mt-0 lg:hover:bg-purple-600 focus:outline-none transition duration-300 ease-in-out"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? "Creating account..." : "Create account"}
            </motion.button>
          </div>

          {error && <p className="text-red-600 text-center">{error}</p>}
        </form>
      </section>
      <div
        id="login-by"
        className="flex container justify-center gap-10 lg:gap-0 lg:w-1/2 lg:mx-auto lg:justify-between lg:space-x-28 mb-10"
      >
        {/* Social login buttons */}
        <motion.button
          id="facebook-login"
          className="rounded-full w-2/5 mt-4 md:mt-0 py-2 border border-gray-300 lg:rounded-md lg:w-full bg-blue-500 lg:hover:bg-blue-600 transition duration-300 ease-in-out"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fa-brands fa-facebook text-white mr-2 lg:mr-4"></i>
          Facebook
        </motion.button>
        <motion.button
          id="google-login"
          className="rounded-full w-2/5 mt-4 md:mt-0 py-2 border border-gray-300 lg:rounded-md lg:w-full bg-red-500 lg:hover:bg-red-600 transition duration-300 ease-in-out"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fa-brands fa-google text-white mr-2 lg:mr-4"></i>
          Google
        </motion.button>
      </div>
    </>
  );
};

export default Register;
