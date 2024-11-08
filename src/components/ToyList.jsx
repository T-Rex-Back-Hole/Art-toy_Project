
import React, { useState, useEffect } from "react";
import Card from "./card";
import Sort from "./Sort";
import Filter from "./Filter";

const ToyList = ({ category }) => {
  const [sortOption, setSortOption] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({ materials: [], productTypes: [] });
  const [filteredToys, setFilteredToys] = useState([]);
  const [toyLists, setToyLists] = useState([
    {
      imageSrc: "./images/Art toy/rr.png",
      name: "Art Toy A",
      price: 5000,
      material: "Abs",
      productType: "Accessory",
      category: "Art Toy",
    },
    {
      imageSrc: "./images/Art toy/aaa.png",
      name: "Art Toy B",
      price: 3000,
      material: "Wood",
      productType: "Diy",
      category: "Art Toy",
    },
    {
      imageSrc: "./images/Art toy/gg.png",
      name: "Art Toy C",
      price: 7000,
      material: "Granit",
      productType: "Figurine",
      category: "Art Toy",
    },
    {
      imageSrc: "./images/Art toy/ww.png",
      name: "Art Toy D",
      price: 2000,
      material: "Metal",
      productType: "Model Kit",
      category: "Art Toy",
    },
    {
      imageSrc: "./images/Art toy/ss.png",
      name: "Art Toy E",
      price: 6000,
      material: "Polyester",
      productType: "Accessory",
      category: "Art Toy",
    },
    {
      imageSrc: "./images/Art toy/ii.png",
      name: "Art Toy F",
      price: 8000,
      material: "Abs",
      productType: "Diy",
      category: "Art Toy",
    },
    {
      imageSrc: "./images/Art toy/qq.png",
      name: "Art Toy G",
      price: 4000,
      material: "Wood",
      productType: "Figurine",
      category: "Art Toy",
    },
    {
      imageSrc: "./images/Art toy/dd.png",
      name: "Art Toy H",
      price: 9000,
      material: "Granit",
      productType: "Model Kit",
      category: "Art Toy",
    },
    {
      imageSrc: "./images/Art toy/pp.png",
      name: "Art Toy I",
      price: 1000,
      material: "Metal",
      productType: "Accessory",
      category: "Art Toy",
    },
    {
      imageSrc: "./images/Art toy/ee.png",
      name: "Art Toy J",
      price: 11000,
      material: "Polyester",
      productType: "Diy",
      category: "Art Toy",
    },
    {
      imageSrc: "./images/Art toy/yy.png",
      name: "Art Toy K",
      price: 12000,
      material: "Abs",
      productType: "Figurine",
      category: "Art Toy",
    },
    {
      imageSrc: "./images/Art toy/tt.png",
      name: "Art Toy L",
      price: 13000,
      material: "Wood",
      productType: "Model Kit",
      category: "Art Toy",
    },
    {
      imageSrc: "./images/Hero/01.png",
      name: "Hero A",
      price: 9999,
      material: "Abs",
      productType: "Accessory",
      category: "Hero",
    },
    {
      imageSrc: "./images/Hero/02.png",
      name: "Hero B",
      price: 8999,
      material: "Wood",
      productType: "Diy",
      category: "Hero",
    },
    {
      imageSrc: "./images/Hero/03.png",
      name: "Hero C",
      price: 7999,
      material: "Granit",
      productType: "Figurine",
      category: "Hero",
    },
    {
      imageSrc: "./images/Hero/04.png",
      name: "Hero D",
      price: 6999,
      material: "Metal",
      productType: "Model Kit",
      category: "Hero",
    },
    {
      imageSrc: "./images/Hero/05.png",
      name: "Hero E",
      price: 5999,
      material: "Polyester",
      productType: "Accessory",
      category: "Hero",
    },
    {
      imageSrc: "./images/Hero/06.png",
      name: "Hero F",
      price: 4999,
      material: "Abs",
      productType: "Diy",
      category: "Hero",
    },
    {
      imageSrc: "./images/Hero/07.png",
      name: "Hero G",
      price: 3999,
      material: "Wood",
      productType: "Figurine",
      category: "Hero",
    },
    {
      imageSrc: "./images/Hero/08.png",
      name: "Hero H",
      price: 2999,
      material: "Granit",
      productType: "Model Kit",
      category: "Hero",
    },
    {
      imageSrc: "./images/Hero/09.png",
      name: "Hero I",
      price: 1999,
      material: "Metal",
      productType: "Accessory",
      category: "Hero",
    },
    {
      imageSrc: "./images/Hero/10.png",
      name: "Hero J",
      price: 10999,
      material: "Polyester",
      productType: "Diy",
      category: "Hero",
    },
    {
      imageSrc: "./images/Hero/11.png",
      name: "Hero K",
      price: 11999,
      material: "Abs",
      productType: "Figurine",
      category: "Hero",
    },
    {
      imageSrc: "./images/Hero/12.png",
      name: "Hero L",
      price: 12999,
      material: "Wood",
      productType: "Model Kit",
      category: "Hero",
    },
    {
      imageSrc: "./images/Hero/13.png",
      name: "Hero M",
      price: 13999,
      material: "Granit",
      productType: "Accessory",
      category: "Hero",
    },
    {
      imageSrc: "./images/Hero/14.png",
      name: "Hero N",
      price: 14999,
      material: "Polyester",
      productType: "Diy",
      category: "Hero",
    },
    {
      imageSrc: "./images/Hero/15.png",
      name: "Hero O",
      price: 15999,
      material: "Abs",
      productType: "Figurine",
      category: "Hero",
    },
    {
      imageSrc: "./images/Hero/16.png",
      name: "Hero P",
      price: 16999,
      material: "Wood",
      productType: "Model Kit",
      category: "Hero",
    },
    {
      imageSrc: "./images/Hero/17.png",
      name: "Hero Q",
      price: 17999,
      material: "Granit",
      productType: "Accessory",
      category: "Hero",
    },
    {
      imageSrc: "./images/Hero/18.png",
      name: "Hero R",
      price: 18999,
      material: "Polyester",
      productType: "Diy",
      category: "Hero",
    },
    {
      imageSrc: "./images/Hero/19.png",
      name: "Hero S",
      price: 19999,
      material: "Abs",
      productType: "Figurine",
      category: "Hero",
    },
    {
      imageSrc: "./images/Hero/20.png",
      name: "Hero T",
      price: 20999,
      material: "Wood",
      productType: "Model Kit",
      category: "Hero",
    },
  ]);

  useEffect(() => {
    const filtered = toyLists.filter((toy) => {
      const categoryMatch = toy.category === category;
      const materialMatch = filters.materials.length
        ? filters.materials.includes(toy.material)
        : true;
      const productTypeMatch = filters.productTypes.length
        ? filters.productTypes.includes(toy.productType)
        : true;
      return categoryMatch && materialMatch && productTypeMatch;
    });
    setFilteredToys(filtered);
  }, [filters, toyLists, category]);

  const handleSort = (option) => {
    let sortedToys;
    if (option === "name-asc") {
      sortedToys = [...toyLists].sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === "name-desc") {
      sortedToys = [...toyLists].sort((a, b) => b.name.localeCompare(a.name));
    } else if (option === "price-asc") {
      sortedToys = [...toyLists].sort((a, b) => a.price - b.price);
    } else if (option === "price-desc") {
      sortedToys = [...toyLists].sort((a, b) => b.price - a.price);
    }
    setSortOption(option);
    setToyLists(sortedToys);
    setDropdownOpen(false);
  };

  const handleFilter = (name, values) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: values,
    }));
  };

  const applyFilters = () => {
    setFilterOpen(false);
  };

  const sortOptions = [
    { label: "Name Ascending", value: "name-asc" },
    { label: "Name Descending", value: "name-desc" },
    { label: "Price Ascending", value: "price-asc" },
    { label: "Price Descending", value: "price-desc" },
  ];

  return (
    <>
      <h1 className="font-bold text-3xl text-center my-10 md:text-5xl">
        {category === "Art Toy" ? "Art Toys" : "Heroes"}
      </h1>

      <div className="flex flex-row justify-end items-center mt-16 mb-5 border-solid border-2 border-gray-200 relative">
        <div className="relative">
          <button
            className="flex-initial bg-[#FFA4D5] rounded-md text-white text-xl font-bold px-8 py-3 shadow-sm shadow-gray-700 hover:bg-[#e9449e] md:text-2xl md:px-24"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            Sort by {dropdownOpen ? "▲" : "▼"}
          </button>
          {dropdownOpen && <Sort options={sortOptions} onSelect={handleSort} />}
        </div>
        <button
          className="flex-initial bg-[#B47AEA] rounded-md text-white text-xl font-bold px-8 py-3 shadow-sm shadow-gray-700 hover:bg-purple-600 md:text-2xl md:px-24"
          onClick={() => setFilterOpen(true)}
        >
          Filter
        </button>
      </div>

      <Filter
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
        onFilter={handleFilter}
        onApply={applyFilters}
      />

      <div
        id="container-ToyList"
        className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 mx-6 my-6"
      >
        {filteredToys.map((toy, index) => (
          <Card
            key={index}
            imageSrc={toy.imageSrc}
            name={toy.name}
            price={toy.price}
            link="/detail"
          />
        ))}
      </div>
    </>
  );
};

export default ToyList;