import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../DataProvider";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, removeItem, updateQuantity, calculateTotal } = useData();

  return (
    <section className="bg-white mt-3 antialiased lg:flex lg:justify-center mx-auto">
      <div className="max-w-screen-xl lg:w-2/4 px-4 2xl:px-0 space-y-2 lg:mr-2 mb-10">
        <div className="w-full flex-none lg:max-w-2xl xl:max-w-4xl">
          <h2 className="flex justify-center items-center my-5 lg:my-8 font-bold text-3xl text-shadow">
            MY CART
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between items-center rounded-lg border py-2 border-gray-200 bg-white shadow-md">
              <div className="flex items-center">
                <input type="checkbox" className="ml-2" />
                <h1 className="font-semibold ml-2">Select All</h1>
              </div>
              <i className="fa-solid fa-trash hover:text-red-700 text-red-500 cursor-pointer mr-8"></i>
            </div>

            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeItem={removeItem}
                updateQuantity={updateQuantity}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 max-w-4xl lg:max-w-80 flex-1 space-y-4 sticky bottom-0 lg:static lg:mt-[6.25rem]">
        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-md sm:p-6">
          <p className="text-xl font-semibold text-gray-900">Order summary</p>
          <div className="space-y-4">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500">
                  Subtotal ({cart.length} items)
                </dt>
                <dd className="text-base font-medium text-gray-900">
                  ฿ {calculateTotal()}
                </dd>
              </dl>
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500">
                  Shipping Fee
                </dt>
                <dd className="text-base font-medium text-gray-900">฿ 0.00</dd>
              </dl>
            </div>
            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
              <dt className="text-base font-bold text-gray-900">Total</dt>
              <dd className="text-base font-bold text-green-600">
                ฿ {calculateTotal()}
              </dd>
            </dl>
          </div>

          <Link to="/">
            <button className="flex w-full items-center justify-center rounded-lg bg-[#5BDEE7] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#3ef2ff] focus:outline-none focus:ring-4 focus:ring-[#38c5cf] border">
              BUY NOW!!
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;