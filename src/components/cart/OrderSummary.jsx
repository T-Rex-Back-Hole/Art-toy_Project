// src/components/Cart/OrderSummary.js
import React from 'react';
import { Link } from 'react-router-dom';

const OrderSummary = ({ cartLength, subtotal, shippingFee }) => {
  const total = subtotal + shippingFee;

  return (
    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-md sm:p-6">
      <p className="text-xl font-semibold text-gray-900">Order summary</p>
      <div className="space-y-4">
        <div className="space-y-2">
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500">
              Subtotal ({cartLength} items)
            </dt>
            <dd className="text-base font-medium text-gray-900">
              ฿ {subtotal.toLocaleString()}
            </dd>
          </dl>
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500">
              Shipping Fee
            </dt>
            <dd className="text-base font-medium text-gray-900">
              ฿ {shippingFee}
            </dd>
          </dl>
        </div>
        <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
          <dt className="text-base font-bold text-gray-900">Total</dt>
          <dd className="text-base font-bold text-green-600">
            ฿ {total.toLocaleString()}
          </dd>
        </dl>
      </div>

      <Link to="/checkout">
        <button 
          className="flex w-full items-center justify-center rounded-lg bg-[#5BDEE7] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#3ef2ff] focus:outline-none focus:ring-4 focus:ring-[#38c5cf] border"
          disabled={cartLength === 0}
        >
          BUY NOW!!
        </button>
      </Link>
    </div>
  );
};

export default OrderSummary;
