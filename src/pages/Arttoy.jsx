// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useData } from "../components/DataProvider";

// function Arttoy() {
//   const { products, loading, error, fetchData } = useData();
//   const artToyData = products.filter(
//     (product) => product.category === "Art Toy"
//   );

//   useEffect(() => {
//     if (!products.length) {
//       fetchData();
//     }
//   }, [products, fetchData]);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <p className="text-xl text-gray-700">Loading...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   function formatMoney(money) {
//     return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
//   }

//   return (
//     <>
//       <section id="hero" className="mx-5 lg:mx-20 my-10">
//         <h2 className="text-4xl font-bold mb-6 text-center mt-10">
//           Art Toy Products
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {artToyData.length > 0 ? (
//             artToyData.map((arttoy) => (
//               <div
//                 key={arttoy.id}
//                 className="border p-5 rounded-lg shadow-md text-center"
//               >
//                 <h3 className="text-xl font-semibold">{arttoy.name}</h3>
//                 <Link
//                   to={`/detail/${arttoy.id}`}
//                   className="text-blue-500 mt-4 inline-block hover:underline"
//                 >
//                   <img
//                     src={arttoy.image}
//                     alt={arttoy.name}
//                     className="w-auto h-96 object-contain my-4 justify-self-center refer-img"
//                   />
//                 </Link>
//                 <p className="text-lg text-purple-600">
//                   {formatMoney(arttoy.price)} ฿
//                 </p>
//                 <p className="text-sm text-gray-700 mt-2">
//                   {arttoy.description}
//                 </p>
//               </div>
//             ))
//           ) : (
//             <p>No Hero products available</p>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }

// export default Arttoy;



// Add Sort and Filter
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useData } from "../components/DataProvider";
import SortFilter from "../components/SortFilter";

function Arttoy() {
  const { products, loading, error, fetchData } = useData();
  const location = useLocation();
  const [sortType, setSortType] = useState("default");
  const [filterType, setFilterType] = useState([]);
  const [filterMaterial, setFilterMaterial] = useState([]);

  useEffect(() => {
    if (!products.length) {
      fetchData();
    }
  }, [products, fetchData]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sort = params.get("sort") || "default";
    const types = params.get("types") ? params.get("types").split(",") : [];
    const materials = params.get("materials") ? params.get("materials").split(",") : [];
    setSortType(sort);
    setFilterType(types);
    setFilterMaterial(materials);
  }, [location.search]);

  const handleSortChange = (sortOption) => {
    setSortType(sortOption);
    const params = new URLSearchParams(location.search);
    params.set("sort", sortOption);
    window.history.replaceState(null, "", `${location.pathname}?${params.toString()}`);
  };

  const handleFilterChange = (value, filterCategory) => {
    if (filterCategory === "type") {
      const newFilterType = filterType.includes(value) ? filterType.filter((item) => item !== value) : [...filterType, value];
      setFilterType(newFilterType);
      const params = new URLSearchParams(location.search);
      params.set("types", newFilterType.join(","));
      window.history.replaceState(null, "", `${location.pathname}?${params.toString()}`);
    } else if (filterCategory === "material") {
      const newFilterMaterial = filterMaterial.includes(value) ? filterMaterial.filter((item) => item !== value) : [...filterMaterial, value];
      setFilterMaterial(newFilterMaterial);
      const params = new URLSearchParams(location.search);
      params.set("materials", newFilterMaterial.join(","));
      window.history.replaceState(null, "", `${location.pathname}?${params.toString()}`);
    }
  };

  const sortedAndFilteredProducts = products
    .filter((product) =>
      product.category === "Art Toy" &&
      (filterType.length === 0 || filterType.includes(product.product_type)) &&
      (filterMaterial.length === 0 || filterMaterial.some((material) => product.materials.includes(material)))
    )
    .sort((a, b) => {
      if (sortType === "price-asc") {
        return a.price - b.price;
      } else if (sortType === "price-desc") {
        return b.price - a.price;
      }
      return 0;
    });

  const uniqueProductTypes = [...new Set(products.map((product) => product.product_type))];
  const uniqueMaterials = [...new Set(products.flatMap((product) => product.materials))];

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
    <>
      <section id="hero" className="mx-5 lg:mx-20 my-10">
        <h2 className="text-4xl font-bold mb-6 text-center mt-10">
          Art Toy Products
        </h2>
        <SortFilter
          onSortChange={handleSortChange}
          onFilterChange={handleFilterChange}
          uniqueProductTypes={uniqueProductTypes}
          uniqueMaterials={uniqueMaterials}
          filterType={filterType}
          filterMaterial={filterMaterial}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedAndFilteredProducts.length > 0 ? (
            sortedAndFilteredProducts.map((arttoy) => (
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
            <p>No Art Toy products available</p>
          )}
        </div>
      </section>
    </>
  );
}

export default Arttoy;





