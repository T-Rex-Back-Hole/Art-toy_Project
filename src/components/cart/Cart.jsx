import React from "react";
import { useData } from "../DataProvider";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";

const Cart = () => {
  const {
    cart,
    selectedItems,
    updateQuantity,
    removeItem,
    calculateTotal,
    toggleSelectAll,
    toggleSelectItem,
    removeSelectedItems,
  } = useData();

  const subtotal = calculateTotal();
  const shippingFee = subtotal > 0 ? 50 : 0;

  const isSelectedItemsValid = selectedItems instanceof Set;

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
                <input
                  type="checkbox"
                  className="ml-2"
                  checked={
                    isSelectedItemsValid &&
                    selectedItems.size === cart.length &&
                    cart.length > 0
                  }
                  onChange={(e) => toggleSelectAll(e.target.checked)}
                />
                <h1 className="font-semibold ml-2">Select All</h1>
              </div>
              <i
                className="fa-solid fa-trash hover:text-red-700 text-red-500 cursor-pointer mr-8"
                onClick={removeSelectedItems}
              ></i>
            </div>

            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                selected={isSelectedItemsValid && selectedItems.has(item.id)}
                onQuantityChange={updateQuantity}
                onRemove={removeItem}
                onToggleSelect={toggleSelectItem}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 max-w-4xl lg:max-w-80 flex-1 space-y-4 sticky bottom-0 lg:static lg:mt-[6.25rem]">
        <OrderSummary
          cartLength={cart.length}
          subtotal={subtotal}
          shippingFee={shippingFee}
        />
      </div>
    </section>
  );
};

export default Cart;
