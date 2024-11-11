import React from "react";
import { Link } from "react-router-dom";

const CartItem = ({ item, removeItem, updateQuantity }) => {
  return (
    <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-md py-4 pr-4 relative">
      <input type="checkbox" className="mx-2" />
      <div className="border-2 rounded-lg border-black h-36 w-24 flex items-center justify-center">
        <Link to={`/detail/${item.id}`}>
          <img
            className="rounded-lg refer-img h-28 w-auto object-contain"
            src={item.image}
            alt={item.name}
          />
        </Link>
      </div>
      <div className="ml-4 flex-auto">
        <i
          onClick={() => removeItem(item.id)}
          className="fa-solid fa-trash hover:text-red-700 text-red-500 cursor-pointer mr-8 absolute right-0"
        ></i>
        <h2 className="text-lg font-bold">{item.name}</h2>
        <p>
          Description: <span className="text-xs">{item.description}</span>
        </p>
        <p className="text-lg absolute bottom-4 font-semibold text-primary text-[#5BDEE7]">
          ฿{item.price}
        </p>
      </div>
      <div className="flex justify-center items-center border w-24 rounded-full py-1 bg-[#B47AEA] absolute bottom-4 right-6">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          type="button"
          className="inline-flex h-5 w-5 shrink-0 items-center justify-center"
        >
          <svg
            className="h-2.5 w-2.5 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M1 1h16"
            />
          </svg>
        </button>
        <span className="mx-3 text-white">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          type="button"
          className="inline-flex items-center justify-center w-5 h-5"
        >
          <svg
            className="h-2.5 w-2.5 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
