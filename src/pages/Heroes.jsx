import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useData } from "../context/DataProvider";
import ReactLoading from "react-loading";
import GoBackButton from "../components/GoBackButton";

const Hero = () => {
  const { products, loading, error, fetchData, addToCart, formatMoney } =
    useData();
  const [quantities, setQuantities] = useState({}); // เก็บปริมาณสินค้าแยกตาม id
  const [sortType, setSortType] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 9;

  const heroData = products.filter((product) => product.category === "Hero");

  useEffect(() => {
    window.scrollTo(0, 0);

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
    heroData.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Pagination calculations
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calculate total pages
  const totalPages = Math.ceil(
    filteredAndSortedProducts.length / productsPerPage
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section id="hero" className="mx-5 lg:mx-20">
      <GoBackButton className="mt-5" />
      <h2 className="text-4xl font-bold mb-6 text-center mt-10">
        Hero Products
      </h2>

      <div className="lg:flex lg:justify-between lg:items-center mb-4 ">
        <div className="relative mb-4 lg:mb-0">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8 p-2 w-full lg:pl-8 lg:p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
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
          className="p-2 w-full text-center lg:w-1/6 lg:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="default">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>

      {/* Heroes Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProducts.length > 0 ? (
          currentProducts.map((hero) => (
            <div
              key={hero._id}
              className="flex flex-col justify-end border p-6 rounded-lg shadow-md"
            >
              <Link
                to={`/detail/${hero._id}`}
                className="text-blue-500 flex justify-center items-center"
              >
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-auto h-96 object-contain my-4 justify-self-center refer-img"
                />
              </Link>
              <div className="items-center my-4">
                <h3 className="text-xl font-semibold mb-2">{hero.name}</h3>
                <h3 className="text-sm text-gray-600">{hero.description}</h3>
              </div>

              <div id="btn-box" className="flex justify-between items-center">
                {" "}
                <p className="text-2xl text-purple-600 font-semibold">
                  {formatMoney(hero.price)} ฿
                </p>
                <button
                  className="addtocart-btn"
                  onClick={() => addToCart(hero, quantities[hero._id] || 1)}
                >
                  <i className="fa-solid fa-cart-shopping text-base pr-2"></i>
                  ADD TO CART
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No Hero products available</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center my-8 space-x-2">
        {/* Previous Button */}
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 border rounded ${
            currentPage === 1
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-purple-500 text-white hover:bg-purple-600"
          }`}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`w-10 h-10 border rounded ${
              currentPage === index + 1
                ? "bg-purple-500 text-white"
                : "bg-white text-purple-500 hover:bg-purple-100"
            }`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border rounded ${
            currentPage === totalPages
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-purple-500 text-white hover:bg-purple-600"
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Hero;
