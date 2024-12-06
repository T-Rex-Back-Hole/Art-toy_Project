import React from "react";
import { useData } from "../context/DataProvider";
import { Link } from "react-router-dom";

function CompletePurchase() {
  const { formatMoney } = useData();

  return (
    <>
      <section className="flex flex-col items-center">
        <div className="flex flex-col items-center m-4 lg:m-20">
          <p className="text-center my-4">Thank You For Your Purchase</p>
          <i className="fa-solid fa-circle-check text-[#B47AEA] text-8xl text-center"></i>
        </div>

        <div className="rounded-md shadow-md mx-2 px-2 py-4 mb-6 lg:p-6 lg:w-2/3 gap-y-4 flex flex-col">
          <h1 className="text-center lg:text-lg font-semibold mb-2">
            Payment Detail
          </h1>
          <p className="flex justify-between text-sm mx-2 text-gray-400 lg:text-base">
            <strong className="mr-20 text-black">Order No :</strong>
            1485156215495612
          </p>
          <p className="flex justify-between text-sm mx-2 text-gray-400 lg:text-base">
            <strong className="mr-20 text-black">Total :</strong>$
            {formatMoney(4050)}
          </p>
          <p className="flex justify-between text-sm mx-2 text-gray-400 lg:text-base">
            <strong className="mr-20 text-black">Date & Time :</strong>
            05/11/2023 - 21:29:10
          </p>
          <p className="flex justify-between text-sm mx-2 text-gray-400 lg:text-base">
            <strong className="mr-20 text-black">Payment Method :</strong>
            Credit Card
          </p>
          <p className="flex justify-between text-sm mx-2 text-gray-400 lg:text-base">
            <strong className="mr-20 text-black">Name :</strong>
            Marcus S. Delgado
          </p>
          <p className="flex justify-between text-sm mx-2 text-gray-400 lg:text-base">
            <strong className="mr-20 text-black">Email :</strong>
            ashutoshuix@gmail.com
          </p>
        </div>
        <p>A receipt will be sent directly to the email</p>
        <Link to="/" className="bg-[#B47AEA] text-white text-center font-semibold w-5/6 py-2 rounded-md mt-6 mb-10 lg:w-3/5 lg:py-3 lg:hover:bg-purple-600">
          <button >
            Done
          </button>
        </Link>
      </section>
    </>
  );
}

export default CompletePurchase;
