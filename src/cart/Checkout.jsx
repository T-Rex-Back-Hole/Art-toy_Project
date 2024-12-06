import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../context/DataProvider";

function Checkout() {
  const { formatMoney } = useData();
  return (
    <>
      <header className="mt-6 px-4">
        <Link
          to="/cart"
          className=" text-[#B47AEA] text-xl inline items-center"
        >
          <button className="px-4 font-semibold lg:text-2xl">
            <i class="fa-solid fa-arrow-left mr-2 lg:text-2xl"></i> Back
          </button>
        </Link>
      </header>
      <h1 className="text-center text-2xl font-semibold lg:text-4xl my-6">
        Payment
      </h1>

      <section id="payment" className="mx-6 my-6 lg:m-auto lg:w-3/4 lg:my-10">
        <div id="container" className="flex flex-col ">
          {/* Address ---------------------------------------------------------------------------------------------- */}
          <Link>
            <div
              id="address"
              className="flex justify-between items-center p-4 rounded-md bg-gray-50 shadow-md mb-10 lg:p-8 lg:hover:scale-105 lg:duration-300 lg:cursor-pointer"
            >
              <div className="">
                <p className="font-semibold text-xl">Marcus S. Delgado</p>
                <p className="text-gray-400 text-sm lg:text-base">
                  Address : 4908 Hillview Street, Columbia, SC 29201
                </p>
                <p className="text-gray-400 text-sm lg:text-base">
                  099-999-9999
                </p>
              </div>
              <i class="fa-solid fa-angle-right text-xl px-1 text-gray-500"></i>
            </div>
          </Link>

          {/* Payment Method ---------------------------------------------------------------------------------------------- */}

          <div
            id="payment-method"
            className="rounded-md bg-gray-50 shadow-md p-4 lg:p-6 mb-10"
          >
            <h2 className="mb-2 font-semibold">Payment Method</h2>
            <hr className="py-2" />

            {/* Credit Card ----------------- */}
            <Link to="/credit">
              <div
                id="credit-card"
                className="flex justify-between items-center py-2 lg:hover:bg-gray-100 lg:duration-300 lg:cursor-pointer lg:px-2 lg:rounded-full"
              >
                <p>Credite Card</p>
                <i class="fa-solid fa-angle-right text-xl px-1 text-gray-500"></i>
              </div>
            </Link>

            {/* Transfer ---------------- */}
            <Link to="/transfer">
              <div
                id="tranfer"
                className="flex justify-between items-center py-2 lg:hover:bg-gray-100 lg:duration-300 lg:cursor-pointer lg:px-2 lg:rounded-full"
              >
                <p>Transfer</p>
                <i class="fa-solid fa-angle-right text-xl px-1 text-gray-500"></i>
              </div>
            </Link>
          </div>

          <div id="total" className="border-t-2 p-4">
            <h1 className="text-xl font-semibold mb-2">Total</h1>
            <div className="flex justify-between text-gray-400">
              <p>Subtotal ({0} items)</p>
              <p>$ {formatMoney(0)}</p>
            </div>
            <div className="flex justify-between text-gray-400">
              <p>Shipping Fee</p>
              <p>$ {formatMoney(0)}</p>
            </div>
            <hr className="mt-6" />
          </div>

          <div id="checkout-btn" className="p-4 self-end">
            <Link to="/complete">
              <button className="rounded-md bg-[#B47AEA] text-white font-semibold text-xl px-4 py-2 lg:hover:bg-purple-600">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;
