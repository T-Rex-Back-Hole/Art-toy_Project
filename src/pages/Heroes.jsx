import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useData } from "../components/DataProvider";

const Hero = () => {
  // const { products, loading, error, fetchData } = useData();
  // const heroData = products.filter((product) => product.category === "Hero");

  // useEffect(() => {
  //   if (!products.length) {
  //     fetchData();
  //   }
  // }, [products, fetchData]);

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
  //       <p className="text-xl text-gray-700">Loading...</p>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return <p>{error}</p>;
  // }

  return (
    <section id="hero" className="mx-5 lg:mx-20">
      <h2 className="text-3xl font-bold mb-6">Hero Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* {heroData.length > 0 ? (
          heroData.map((hero) => (
         
          ))
        ) : (
          <p>No Hero products available</p>
        )} */}
        <div className="border p-5 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Name</h3>
          <img src={hero.image} className="w-auto h-60 object-contain mb-4" />
          <p className="text-lg text-purple-600">3000 ฿</p>
          <p className="text-sm text-gray-700 mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            dolorum corporis aut. Eos fugit id vel enim blanditiis harum dolore?
          </p>
          {/* <Link
            to={`/detail/${hero.id}`}
            className="text-blue-500 mt-4 inline-block hover:underline"
          >
            View Details
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
