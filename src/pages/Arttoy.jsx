import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useData } from "../context/DataProvider";
import ReactLoading from "react-loading";
import GoBackButton from "../components/GoBackButton";

const Arttoy = () => {
  const {
    products,
    loading,
    error,
    fetchData,
    addToCart,
    formatMoney,
  } = useData();

  const [quantities, setQuantities] = useState({});
  const [sortType, setSortType] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 9;

  const arttoyData = products.filter(
    (product) => product.category === "ArtToy"
  );

  // Use useEffect to call fetchData when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!products.length) {
      fetchData(); // Fetch data from the backend
    }
  }, [products, fetchData]); // Add fetchData to dependency array


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
    arttoyData.filter((product) =>
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
    <section id="arttoy" className="mx-5 lg:mx-20">
      <GoBackButton className="mt-5" />
      <h2 className="text-4xl font-bold mb-6 text-center mt-10">
        Arttoy Products
      </h2>

      <div className="lg:flex lg:justify-between lg:items-center mb-4">
        <div className="relative mb-4 lg:mb-0">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
            className="pl-8 p-2 w-full lg:pl-8 lg:p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <select
          value={sortType}
          onChange={(e) => {
            setSortType(e.target.value);
            setCurrentPage(1); // Reset to first page on sort
          }}
          className="p-2 w-full text-center lg:w-1/5 lg:px-4 lg:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="default">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProducts.length > 0 ? (
          currentProducts.map((arttoy) => (
            <div
              key={arttoy._id}
              className="flex flex-col justify-end border p-6 rounded-lg shadow-md"
            >
              <Link
                to={`/detail/${arttoy._id}`}
                className="text-blue-500 flex justify-center items-center "
              >
                <img
                  src={arttoy.image}
                  alt={arttoy.name}
                  className="w-auto h-96 object-contain my-4 refer-img"
                />
              </Link>

              <div className=" items-center my-4">
                <h3 className="text-xl font-semibold mb-2">{arttoy.name}</h3>
                <h3 className="text-sm text-gray-600">{arttoy.description}</h3>
              </div>

              <div id="btn-box" className="flex justify-between items-center">
                <p className="text-2xl text-purple-600 font-semibold">
                  {formatMoney(arttoy.price)} ฿
                </p>
                <button
                  className="addtocart-btn"
                  onClick={() => addToCart(arttoy, quantities[arttoy._id] || 1)}
                >
                  <i className="fa-solid fa-cart-shopping text-base pr-2"></i>
                  ADD TO CART
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No Arttoy products available</p>
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

export default Arttoy;
