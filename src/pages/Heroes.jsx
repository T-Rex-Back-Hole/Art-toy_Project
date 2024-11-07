import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useData } from "../components/DataProvider";

const Hero = () => {
  const { products, loading, error, fetchData } = useData();
  const heroData = products.filter((product) => product.category === "Hero");

  useEffect(() => {
    if (!products.length) {
      fetchData();
    }
  }, [products, fetchData]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl text-gray-700">Loading...</p>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  function formatMoney(money) {
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <section id="hero" className="mx-5 lg:mx-20">

      <h2 className="text-4xl font-bold mb-6 text-center mt-10">Hero Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {heroData.length > 0 ? (
          heroData.map((hero) => (

            <div key={hero.id} className="flex flex-col text-center border p-5 rounded-lg shadow-md">

              <h3 className="text-xl font-semibold">{hero.name}</h3>
              <img
                src={hero.image}
                alt={hero.name}

                className="w-auto h-96 object-contain mb-4 justify-self-center"

              />
              <p className="text-lg text-purple-600">{formatMoney(hero.price)} ฿</p>
              <p className="text-sm text-gray-700 mt-2">{hero.description}</p>
              <Link
                to={`/hero/detail/${hero.id}`}
                className="text-blue-500 mt-4 inline-block hover:underline"
              >
                View Details
              </Link>
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