import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useData } from "../components/DataProvider";
import ReactLoading from 'react-loading';


function Arttoy() {
  const { products, loading, error, fetchData } = useData();
  const artToyData = products.filter(
    (product) => product.category === "Art Toy"
  );

  useEffect(() => {
    if (!products.length) {
      fetchData();
    }
  }, [products, fetchData]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
      <ReactLoading type="spinningBubbles" color="black" height={'10%'} width={'10%'} />
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
    <>
      <section id="hero" className="mx-5 lg:mx-20 my-10">
        <h2 className="text-4xl font-bold mb-6 text-center mt-10">
          Art Toy Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artToyData.length > 0 ? (
            artToyData.map((arttoy) => (
              <div
                key={arttoy.id}
                className="border p-5 rounded-lg shadow-md text-center"
              >
                <h3 className="text-xl font-semibold">{arttoy.name}</h3>
                <Link
                  to={`/detail/${arttoy.id}`}
                  className="text-blue-500 mt-4 inline-block hover:underline"
                >
                  <img
                    src={arttoy.image}
                    alt={arttoy.name}
                    className="w-auto h-96 object-contain my-4 justify-self-center refer-img"
                  />
                </Link>
                <p className="text-lg text-purple-600">
                  {formatMoney(arttoy.price)} ฿
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  {arttoy.description}
                </p>
              </div>
            ))
          ) : (
            <p>No Hero products available</p>
          )}
        </div>
      </section>
    </>
  );
}

export default Arttoy;
