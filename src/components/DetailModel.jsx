import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../context/DataProvider";
import GoBackButton from "./GoBackButton";

const DetailModel = () => {
  const { id } = useParams();

  const { products, loading, error, addToCart, getSingleItem } = useData();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const findProduct = () => {
      if (!loading && products.length > 0) {
        const selectedProduct = products.find((product) => product._id === id);

        setProduct(selectedProduct);
      }
    };

    findProduct();
  }, [id, products, loading]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
    }
  };

  const formatMoney = (money) => {
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  // Loading and error handling
  if (loading) {
    return (
      <div className="loading-container">
        <i className="fa-solid fa-spinner fa-spin text-xl"></i> Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container text-red-600">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center">Product not found</div>;
  }

  return (
    <section id="detailModel" className="p-4 lg:p-10">
      <GoBackButton />
      <div className="container m-auto flex flex-col justify-center items-center lg:flex-row">
        {/* Image Carousel */}
        <div className="flex items-center justify-center lg:px-10 lg:mx-10">
          <img
            src={product.image}
            alt={product.name}
            className="h-[600px] w-full "
          />
        </div>

        {/* Product Details */}
        <div
          id="right-box"
          className="flex flex-col justify-center h-full lg:w-1/2 p-4 lg:p-10 lg:shadow-lg lg:rounded-md"
        >
          <div className="m-auto">
            <h1 className="text-2xl font-bold mb-2 lg:text-3xl">
              {product.name}
            </h1>

            <span className="text-base text-gray-400">
              Description :{product.description}
            </span>

            {/* Availability */}
            <div className="flex items-center">
              <h2 className="text-2xl font-semibold text-[#B47AEA] lg:text-2xl my-2">
                {formatMoney(product.price)} ฿
              </h2>
              <h1 className="text-green-500 text-lg font-semibold my-4 ml-4">
                In Stock
              </h1>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center items-center mt-6">
            <button
              onClick={handleAddToCart}
              className="bg-[#B47AEA] rounded-full w-full text-white font-semibold px-16 py-3 mb-4 shadow-sm lg:hover:bg-purple-600"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailModel;
