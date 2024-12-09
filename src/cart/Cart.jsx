import React, { useEffect, useState } from "react";
import { useData } from "../context/DataProvider";
import CartItem from "../cart/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, updateQuantity } = useData();

  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      // เลือกสินค้าทั้งหมด
      setSelectedItems(cart.map((item) => item._id));
    } else {
      // ยกเลิกการเลือกทั้งหมด
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (id) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  const isChecked = (id) => selectedItems.includes(id);

  return (
    <section className="mt-3 antialiased lg:flex lg:justify-center mx-auto ">
      <div className="max-w-screen-xl lg:w-2/4 px-4 2xl:px-0 space-y-2 lg:mr-2 mb-10">
        <div className="w-full flex-none lg:max-w-2xl xl:max-w-4xl">
          <h2 className="flex justify-center items-center my-5 lg:my-8 font-bold text-3xl text-shadow">
            MY CART
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between items-center rounded-lg border py-2 px-4 border-gray-200 bg-white shadow-md">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  className=""
                />
                <h1 className="font-semibold ml-4">Select All</h1>
              </div>
              <i
                className="fa-solid fa-trash hover:text-red-700 text-red-500 cursor-pointer"
                onClick={() => selectedItems.forEach((id) => removeItem(id))}
              ></i>
            </div>
            {cart.length > 0 ? (
              cart.map((item) => (
                <CartItem
                  key={item._id}
                  item={item}
                  removeItem={removeItem}
                  updateQuantity={updateQuantity}
                  isChecked={isChecked(item._id)}
                  onSelectItem={() => handleSelectItem(item._id)}
                />
              ))
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 max-w-4xl lg:max-w-80 flex-1 space-y-4 lg:mt-[6.25rem] lg:sticky">
        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-md sm:p-6 ">
          <p className="text-xl font-semibold text-gray-900">Order summary</p>
          <div className="space-y-4">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500">
                  Subtotal
                </dt>
                <dd className="text-base font-medium text-gray-900">฿</dd>
              </dl>
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500">
                  Shipping Fee
                </dt>
                <dd className="text-base font-medium text-gray-900">฿ 0</dd>
              </dl>
            </div>
            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
              <dt className="text-base font-bold text-gray-900">Total</dt>
              <dd className="text-base font-bold text-green-600">฿</dd>
            </dl>
          </div>
          <Link to="/checkout">
            <button className="w-full rounded-lg bg-[#5BDEE7] px-5 py-2.5 text-lg font-semibold text-white lg:hover:bg-[#3ef2ff]">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
