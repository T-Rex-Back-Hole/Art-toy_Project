import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <section className="bg-white mt-3 antialiased lg:flex lg:justify-center mx-auto">
        <div className="max-w-screen-xl lg:w-2/4 px-4 2xl:px-0 space-y-2 lg:mr-2 mb-10">
          <div className="w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <h2 className="flex justify-center items-center my-5 lg:my-8 font-bold text-3xl text-shadow">
              MY CART
            </h2>
            <div className="space-y-2">
              {/* Card Select All */}
              <div className="flex justify-between items-center rounded-lg border py-2 border-gray-200 bg-white shadow-md">
                <div className="flex items-center">
                  <input type="checkbox" className="ml-2" />
                  <h1 className="font-semibold ml-2">Select All</h1>
                </div>
                <i className="fa-solid fa-trash hover:text-red-700 text-red-500 cursor-pointer mr-8"></i>
              </div>

              {/* Card items Cart */}
              <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-md py-4 pr-4 relative">
                <input type="checkbox" className="mx-2" />
                <div className="border-2 rounded-lg border-black h-36 w-24 flex items-center">
                  <Link to="/detail-model">
                    <img
                      className="rounded-lg refer-img"
                      src="/images/Art toy/dd.png"
                      alt="Art Toy Character"
                    />
                  </Link>
                </div>
                <div className="ml-4 flex-auto">
                  <i className="fa-solid fa-trash hover:text-red-700 text-red-500 cursor-pointer mr-8 absolute right-0"></i>
                  <h2 className="text-lg font-bold">Art Toy : Name</h2>
                  <p className="text-sm">
                    Description:
                    <span className="text-xs">Introducing Boba Beats</span>
                  </p>
                  <p className="text-lg absolute bottom-4 font-semibold text-primary text-[#5BDEE7]">
                    ฿1,200
                  </p>
                </div>

                <div className="flex justify-center items-center border w-24 rounded-full py-1 bg-[#B47AEA] absolute bottom-4 right-6">
                  <button
                    type="button"
                    id="decrement-button"
                    data-input-counter-decrement="counter-input"
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
                  <span className="mx-3 text-white">1</span>
                  <button
                    type="button"
                    id="increment-button"
                    data-input-counter-increment="counter-input"
                    className="inline-flex items-center justify-center w-5 h5"
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
              {/* Card */}
              {/* Card items Cart */}
              <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-md py-4 pr-4 relative">
                <input type="checkbox" className="mx-2" />
                <div className="border-2 rounded-lg border-black h-36 w-24 flex items-center">
                  <Link to="/detail-model">
                    <img
                      className="rounded-lg refer-img"
                      src="/images/Hero/06.png"
                      alt="Art Toy Character"
                    />
                  </Link>
                </div>
                <div className="ml-4 flex-auto">
                  <i className="fa-solid fa-trash hover:text-red-700 text-red-500 cursor-pointer mr-8 absolute right-0"></i>
                  <h2 className="text-lg font-bold">Art Toy : Name</h2>
                  <p className="text-sm">
                    Description:
                    <span className="text-xs">Introducing Boba Beats</span>
                  </p>
                  <p className="text-lg absolute bottom-4 font-semibold text-primary text-[#5BDEE7]">
                    ฿1,200
                  </p>
                </div>

                <div className="flex justify-center items-center border w-24 rounded-full py-1 bg-[#B47AEA] absolute bottom-4 right-6">
                  <button
                    type="button"
                    id="decrement-button"
                    data-input-counter-decrement="counter-input"
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
                  <span className="mx-3 text-white">1</span>
                  <button
                    type="button"
                    id="increment-button"
                    data-input-counter-increment="counter-input"
                    className="inline-flex items-center justify-center w-5 h5"
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
              {/* Card */}
              {/* Card items Cart */}
              <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-md py-4 pr-4 relative">
                <input type="checkbox" className="mx-2" />
                <div className="border-2 rounded-lg border-black h-36 w-24 flex items-center">
                  <Link to="/detail-model">
                    <img
                      className="rounded-lg refer-img"
                      src="/images/Art toy/aaa.png"
                      alt="Art Toy Character"
                    />
                  </Link>
                </div>
                <div className="ml-4 flex-auto">
                  <i className="fa-solid fa-trash hover:text-red-700 text-red-500 cursor-pointer mr-8 absolute right-0"></i>
                  <h2 className="text-lg font-bold">Art Toy : Name</h2>
                  <p className="text-sm">
                    Description:
                    <span className="text-xs">Introducing Boba Beats</span>
                  </p>
                  <p className="text-lg absolute bottom-4 font-semibold text-primary text-[#5BDEE7]">
                    ฿1,200
                  </p>
                </div>

                <div className="flex justify-center items-center border w-24 rounded-full py-1 bg-[#B47AEA] absolute bottom-4 right-6">
                  <button
                    type="button"
                    id="decrement-button"
                    data-input-counter-decrement="counter-input"
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
                  <span className="mx-3 text-white">1</span>
                  <button
                    type="button"
                    id="increment-button"
                    data-input-counter-increment="counter-input"
                    className="inline-flex items-center justify-center w-5 h5"
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
              {/* Card */}
              {/* Card items Cart */}
              <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-md py-4 pr-4 relative">
                <input type="checkbox" className="mx-2" />
                <div className="border-2 rounded-lg border-black h-36 w-24 flex items-center">
                  <Link to="/detail-model">
                    <img
                      className="rounded-lg refer-img"
                      src="/images/Art toy/ee.png"
                      alt="Art Toy Character"
                    />
                  </Link>
                </div>
                <div className="ml-4 flex-auto">
                  <i className="fa-solid fa-trash hover:text-red-700 text-red-500 cursor-pointer mr-8 absolute right-0"></i>
                  <h2 className="text-lg font-bold">Art Toy : Name</h2>
                  <p className="text-sm">
                    Description:
                    <span className="text-xs">Introducing Boba Beats</span>
                  </p>
                  <p className="text-lg absolute bottom-4 font-semibold text-primary text-[#5BDEE7]">
                    ฿1,200
                  </p>
                </div>

                <div className="flex justify-center items-center border w-24 rounded-full py-1 bg-[#B47AEA] absolute bottom-4 right-6">
                  <button
                    type="button"
                    id="decrement-button"
                    data-input-counter-decrement="counter-input"
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
                  <span className="mx-3 text-white">1</span>
                  <button
                    type="button"
                    id="increment-button"
                    data-input-counter-increment="counter-input"
                    className="inline-flex items-center justify-center w-5 h5"
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
              {/* Card */}
              {/* Card items Cart */}
              <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-md py-4 pr-4 relative">
                <input type="checkbox" className="mx-2" />
                <div className="border-2 rounded-lg border-black h-36 w-24 flex items-center">
                  <Link to="/detail-model">
                    <img
                      className="rounded-lg refer-img"
                      src="/images/Art toy/aa.png"
                      alt="Art Toy Character"
                    />
                  </Link>
                </div>
                <div className="ml-4 flex-auto">
                  <i className="fa-solid fa-trash hover:text-red-700 text-red-500 cursor-pointer mr-8 absolute right-0"></i>
                  <h2 className="text-lg font-bold">Art Toy : Name</h2>
                  <p className="text-sm">
                    Description:
                    <span className="text-xs">Introducing Boba Beats</span>
                  </p>
                  <p className="text-lg absolute bottom-4 font-semibold text-primary text-[#5BDEE7]">
                    ฿1,200
                  </p>
                </div>

                <div className="flex justify-center items-center border w-24 rounded-full py-1 bg-[#B47AEA] absolute bottom-4 right-6">
                  <button
                    type="button"
                    id="decrement-button"
                    data-input-counter-decrement="counter-input"
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
                  <span className="mx-3 text-white">1</span>
                  <button
                    type="button"
                    id="increment-button"
                    data-input-counter-increment="counter-input"
                    className="inline-flex items-center justify-center w-5 h5"
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
              {/* Card */}
              {/* Card items Cart */}
              <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-md py-4 pr-4 relative">
                <input type="checkbox" className="mx-2" />
                <div className="border-2 rounded-lg border-black h-36 w-24 flex items-center">
                  <Link to="/detail-model">
                    <img
                      className="rounded-lg refer-img"
                      src="/images/Hero/07.png"
                      alt="Art Toy Character"
                    />
                  </Link>
                </div>
                <div className="ml-4 flex-auto">
                  <i className="fa-solid fa-trash hover:text-red-700 text-red-500 cursor-pointer mr-8 absolute right-0"></i>
                  <h2 className="text-lg font-bold">Art Toy : Name</h2>
                  <p className="text-sm">
                    Description:
                    <span className="text-xs">Introducing Boba Beats</span>
                  </p>
                  <p className="text-lg absolute bottom-4 font-semibold text-primary text-[#5BDEE7]">
                    ฿1,200
                  </p>
                </div>

                <div className="flex justify-center items-center border w-24 rounded-full py-1 bg-[#B47AEA] absolute bottom-4 right-6">
                  <button
                    type="button"
                    id="decrement-button"
                    data-input-counter-decrement="counter-input"
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
                  <span className="mx-3 text-white">1</span>
                  <button
                    type="button"
                    id="increment-button"
                    data-input-counter-increment="counter-input"
                    className="inline-flex items-center justify-center w-5 h5"
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
              {/* Card */}
            </div>
          </div>
        </div>

        <div className="mt-4 max-w-4xl lg:max-w-80 flex-1 space-y-4 sticky bottom-0 lg:static lg:mt-[6.25rem]">
          <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-md  sm:p-6">
            <p className="text-xl font-semibold text-gray-900">Order summary</p>
            <div className="space-y-4">
              <div className="space-y-2">
                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500">
                    Subtotal (0 items)
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    ฿ 0.00
                  </dd>
                </dl>

                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500">
                    Shipping Fee
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    ฿ 0.00
                  </dd>
                </dl>
              </div>

              <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                <dt className="text-base font-bold text-gray-900">Total</dt>
                <dd className="text-base font-bold text-green-600">฿ 0.00</dd>
              </dl>
            </div>

            <button className="flex w-full  items-center justify-center rounded-lg bg-[#5BDEE7] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#3ef2ff] focus:outline-none focus:ring-4 focus:ring-[#38c5cf] border ">
              <Link to="/">BUY NOW!!</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
