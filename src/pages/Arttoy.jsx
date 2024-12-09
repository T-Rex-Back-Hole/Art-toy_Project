import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useData } from "../context/DataProvider";
import ReactLoading from "react-loading";

const Arttoy = () => {
  const {
    products,
    loading,
    error,
    fetchData,
    addToCart,
    formatMoney,
    cartItemCount,
  } = useData();
  const [quantities, setQuantities] = useState({});
  const [sortType, setSortType] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

  const arttoyData = products.filter(
    (product) => product.category === "ArtToy"
  );

  useEffect(() => {
    if (!products.length) {
      fetchData();
    }
  }, [products, fetchData]);

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

  function addTocart(product) {
    const quantity = quantities[product._id] || 1;
    if (quantity > 0) {
      const newItem = {
        ...product,
        quantity: quantity,
      };
      addToCart(newItem);
      setQuantities({});
    }
  }

  const increQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 1) + 1,
    }));
  };

  const decreQuantity = (id) => {
    setQuantities((prevQuantities) => {
      const newQuantity = (prevQuantities[id] || 1) - 1;
      return {
        ...prevQuantities,
        [id]: newQuantity > 0 ? newQuantity : 1,
      };
    });
  };

  const sortProducts = (products) => {
    switch (sortType) {
      case "price-asc":
        return [...products].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...products].sort((a, b) => b.price - a.price);
      case "name-asc":
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return [...products].sort((a, b) => b.name.localeCompare(a.name));
      default:
        return products;
    }
  };

  const filteredAndSortedProducts = sortProducts(
    arttoyData.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <section id="arttoy" className="mx-5 lg:mx-20">
      <h2 className="text-4xl font-bold mb-6 text-center mt-10">
        Arttoy Products
      </h2>

      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8 pr-4 py-1 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <svg
            className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400"
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAndSortedProducts.length > 0 ? (
          filteredAndSortedProducts.map((arttoy) => (
            <div
              key={arttoy._id}
              className="border p-6 rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-semibold">{arttoy.name}</h3>
              <Link
                to={`/detail/${arttoy._id}`}
                className="text-blue-500 mt-4 inline-block hover:underline"
              >
                <img
                  src={arttoy.image}
                  alt={arttoy.name}
                  className="w-auto h-96 object-contain my-4 justify-self-center refer-img"
                />
              </Link>
              <div className="flex justify-between items-center my-4">
                <p className="text-xl text-purple-600">
                  {formatMoney(arttoy.price)} ฿
                </p>

                <div
                  id="quantity-box"
                  className="w-1/2 flex justify-between self-center bg-gray-50 px-4 py-2 font-medium rounded-full"
                >
                  <button onClick={() => decreQuantity(arttoy._id)}>-</button>
                  <span>{quantities[arttoy._id] || 1}</span>{" "}
                  <button onClick={() => increQuantity(arttoy._id)}>+</button>
                </div>
              </div>

              <div
                id="btn-box"
                className="flex flex-col justify-center gap-y-2"
              >
                <button
                  className="addtocart-btn"
                  onClick={() => addTocart(arttoy)}
                >
                  ADD TO CART
                </button>
                <button className="buynow-btn">BUY NOW!!</button>
              </div>
            </div>
          ))
        ) : (
          <p>No Arttoy products available</p>
        )}
      </div>
    </section>
  );
};

export default Arttoy;
