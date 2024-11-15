import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useData } from "./DataProvider";

const DetailModel = () => {
  const { id } = useParams();
  const { products, loading, error, addToCart } = useData();
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

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
    }
  };

  const buyNow = () => {
    console.log(`Buying ${quantity} items now.`);
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
      <div className="container m-auto flex flex-col justify-center items-center lg:flex-row">
        {/* Image Carousel */}
        <div className="flex items-center justify-center lg:px-10 lg:mx-10">
          <img
            src={product.image}
            alt={product.name}
            className="h-1/2 w-auto lg:w-5/6"
          />
        </div>

        {/* Product Details */}
        <div id="right-box" className="flex flex-col justify-center h-full lg:w-1/2 p-4 lg:p-10 lg:shadow-lg lg:rounded-md">
          <div className="m-auto">
            <h1 className="text-2xl font-bold lg:text-3xl">{product.name}</h1>
            <h2 className="text-lg font-semibold text-[#5BDEE7] lg:text-2xl my-2">
              Price: {formatMoney(product.price)} ฿
            </h2>
            <span className="text-base text-gray-400">
              <strong>Description : </strong>
              {product.description}
            </span>
          </div>

          {/* Availability */}
          <div className="flex justify-between items-center">
            <h1 className="text-green-500 text-lg font-semibold my-4">
              In Stock : 0
            </h1>
            {/* Quantity Selector */}
            <div className="w-1/2 flex justify-between self-center bg-gray-50 px-4 py-2 font-medium rounded-full">
              <button
                onClick={decrementQuantity}
                type="button"
                id="decrement-button"
                className="text-xl px-1"
              >
                -
              </button>
              <span className="mx-6 text-center">{quantity}</span>
              <button
                onClick={incrementQuantity}
                type="button"
                id="increment-button"
                className="text-xl px-1"
              >
                +
              </button>
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

          <div className="flex justify-center items-center mb-2">
            <button
              onClick={buyNow}
              className="bg-[#98F5FC] rounded-full w-full text-white font-semibold px-16 py-3 shadow-sm hover:bg-[#42F2FF]"
            >
              BUY NOW!!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailModel;
