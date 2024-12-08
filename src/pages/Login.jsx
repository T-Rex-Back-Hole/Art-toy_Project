import React, { useState } from "react";
import ReactLoading from "react-loading";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // ป้องกันการ submit แบบปกติ

    // ดึงข้อมูลผู้ใช้ที่เก็บใน localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // ตรวจสอบข้อมูลที่กรอกกับข้อมูลที่เก็บไว้ใน localStorage
    if (storedUser.email === email && storedUser.password === password) {
      alert("ล็อคอินสำเร็จ!");
      navigate("/account");
    } else {
      setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!");
    }
  };

  return (
    <>
      <div className="font-bold text-5xl text-center my-12">Log in</div>
      <section className="flex flex-col justify-center lg:flex-row lg:justify-center">
        <form
          onSubmit={handleLogin}
          className="flex flex-col px-4 gap-y-4 lg:w-1/2"
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
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div className="flex w-full">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-full mt-2 font-bold bg-[#B47AEA] text-white py-3 px-6 lg:mt-0 lg:rounded-md lg:hover:bg-purple-600 focus:outline-none"
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
                "Login"
              )}
            </button>
          </div>
        </form>
      </section>
      <div className="flex justify-center gap-4">
        <p className="text-gray-400">Don't have an account?</p>
        <Link to="/register">
          <button className="font-bold text-[#B47AEA]">Sign up</button>
        </Link>
      </div>
      <div className="flex container justify-center gap-10 lg:w-1/2 lg:mx-auto mb-10">
        <button className="rounded-full w-2/5 mt-4 py-2 border border-gray-300 lg:w-full lg:hover:bg-gray-100">
          <i className="fa-brands fa-facebook text-blue-500 mr-2"></i> Facebook
        </button>
        <button className="rounded-full w-2/5 mt-4 py-2 border border-gray-300 lg:w-full lg:hover:bg-gray-100">
          <i className="fa-brands fa-google text-red-600 mr-2"></i> Google
        </button>
      </div>
      <section className="bg-[#F7F7F7] p-8">
        <div className="flex flex-col justify-center text-center">
          <h3 className="text-[#FFA4D5] text-2xl font-semibold">Subscribe!</h3>
          <h1 className="text-[#B47AEA] font-bold text-4xl">News Letter</h1>
          <p className="text-[#B47AEA]">
            Subscribe to our newsletter and receive all the news and exclusive
            deals from T-Rex!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-center">
          <input
            type="email"
            placeholder="E-mail"
            className="h-10 mt-4 rounded-full w-full lg:w-96 lg:h-12 lg:m-4 lg:px-4 lg:py-2 border border-gray-300 lg:rounded-md focus:ring-1 focus:outline-none"
          />
          <button
            type="submit"
            className="h-10 mt-4 bg-[#B47AEA] rounded-full lg:h-12 lg:px-12 lg:py-2 text-white lg:hover:bg-purple-600 font-semibold text-xl"
          >
            Subscribe
          </button>
        </div>
      </section>
    </>
  );
};

export default Login;
