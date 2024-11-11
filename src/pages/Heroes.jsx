import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useData } from "../components/DataProvider";
import ReactLoading from "react-loading";

const Hero = () => {
  const { products, loading, error, addToCart } = useData();
  const [quantity, setQuantity] = useState(1);

  const heroData = products.filter((product) => product.category === "Hero");

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <ReactLoading
          type="spinningBubbles"
          color="black"
          height={"10%"}
          width={"10%"}
        />
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity });
  };

  return (
    <section id="hero" className="mx-5 lg:mx-20">
      <h2 className="text-4xl font-bold mb-6 text-center mt-10">
        Hero Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {heroData.length > 0 ? (
          heroData.map((hero) => (
            <div
              key={hero.id}
              className="flex flex-col text-center border p-5 rounded-lg shadow-md"
            >
              <Link
                to={`/detail/${hero.id}`}
                className="text-blue-500 mt-4 inline-block hover:underline"
              >
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-auto h-96 object-contain my-4"
                />
              </Link>

              <p className="text-lg text-purple-600">{hero.price} ฿</p>
              <div className="flex justify-between self-center bg-gray-50 px-4 py-2 font-medium rounded-full">
                <button onClick={decrementQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={incrementQuantity}>+</button>
              </div>
              <button
                className="bg-[#B47AEA] px-4 py-2 text-white font-semibold rounded-full"
                onClick={() => handleAddToCart(hero)}
              >
                ADD TO CART
              </button>
            </div>
          ))
        ) : (
          <p>No Hero products available</p>
        )}
      </div>
    </section>
  );
};

export default Hero;
