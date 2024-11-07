import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useData } from "./DataProvider";
const DetailModel = () => {
  const { id } = useParams();
  const { products, loading, error } = useData();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const findProduct = () => {
      if (!loading && products.length > 0) {
        const productLookup = products.reduce((acc, product) => {
          acc[product.id] = product;
          return acc;
        }, {});
        const selectedProduct = productLookup[id];
        setProduct(selectedProduct);
      }
    };
    findProduct();
  }, [id, products, loading]);
  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const addToCart = () => {
    console.log(`Added ${quantity} items to the cart.`);
  };
  const buyNow = () => {
    console.log(`Buying ${quantity} items now.`);
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!product) {
    return <div>Product not found</div>;
  }

  function formatMoney(money) {
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  return (
    <section id="detailModel" className="mx-5 lg:mx-20">
      {/* Model */}
      <div className="flex justify-center items-center my-20">
        <i
          id="arrow-l"
          className="fa-solid fa-circle-chevron-left text-3xl opacity-60 text-[#B47AEA] lg:text-5xl cursor-pointer hover:text-purple-500"
        ></i>
        <img
          src={product.image}
          alt={product.name}
          className="w-auto h-96 object-contain lg:w-1/4 sm:mx-10"
        />
        <i
          id="arrow-r"
          className="fa-solid fa-circle-chevron-right text-3xl opacity-60 text-[#B47AEA] lg:text-5xl cursor-pointer hover:text-purple-500"
        ></i>
      </div>
      {/* Detail */}
      <div className="space-y-5 lg:mt-20">
        <h1 className="text-xl font-bold md:text-2xl lg:text-4xl">
          {product.name}
        </h1>
        <h2 className="text-lg font-semibold text-[#5BDEE7] md:text-xl lg:text-3xl">
          Price: {formatMoney(product.price)} ฿
        </h2>
        <p>
          <span className="font-semibold lg:text-xl">Description: </span>
          {product.description}
        </p>
      </div>
      {/* Availability */}
      <div className="flex justify-center my-3 mt-6 lg:justify-start">
        <h1 className="text-green-500 text-lg font-semibold">In Stock</h1>
      </div>
      {/* Quantity Selector */}
      <div className="flex justify-center lg:justify-start">
        <div className="flex justify-center items-center w-32 rounded-full px-3 py-2 bg-[#B47AEA] gap-4 shadow-md">
          <button
            onClick={decrementQuantity}
            type="button"
            id="decrement-button"
            className="inline-flex h-full w-auto items-center justify-center"
          >
            <svg
              className="h-2.5 w-2.5 text-white hover:text-gray-500"
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
          <span className="mx-auto text-white">{quantity}</span>
          <button
            onClick={incrementQuantity}
            type="button"
            id="increment-button"
            className="inline-flex items-center justify-center w-auto"
          >
            <svg
              className="h-2.5 w-2.5 text-white hover:text-gray-500"
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
      {/* Action Buttons */}
      <div className="flex justify-center items-center mt-16 mb-5">
        <button
          onClick={addToCart}
          className="bg-[#FFA4D5] rounded-full text-white text-xl font-bold px-24 py-3 shadow-sm hover:bg-[#E9449E] md:text-2xl"
        >
          ADD TO CART
        </button>
      </div>
      <div className="flex justify-center items-center mb-5">
        <button
          onClick={buyNow}
          className="bg-[#98F5FC] rounded-full text-white text-xl font-bold px-[6.72rem] py-3 shadow-sm hover:bg-[#42F2FF] md:text-2xl"
        >
          BUY NOW!!
        </button>
      </div>
    </section>
  );
};
export default DetailModel;