// Filter.js
import React, { useState } from "react";

const Filter = ({ isOpen, onClose, onFilter, onApply }) => {
  const materials = ["Abs", "Wood", "Granit", "Metal", "Polyester"];
  const productTypes = ["Accessory", "Diy", "Figurine", "Model Kit"];

  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedProductTypes, setSelectedProductTypes] = useState([]);

  const handleMaterialChange = (material) => {
    setSelectedMaterials((prev) =>
      prev.includes(material)
        ? prev.filter((item) => item !== material)
        : [...prev, material]
    );
  };

  const handleProductTypeChange = (type) => {
    setSelectedProductTypes((prev) =>
      prev.includes(type)
        ? prev.filter((item) => item !== type)
        : [...prev, type]
    );
  };

  const applyFilters = () => {
    onFilter("materials", selectedMaterials);
    onFilter("productTypes", selectedProductTypes);
    onApply();
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <button
        className="absolute top-4 right-4 text-gray-700"
        onClick={onClose}
      >
        ×
      </button>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Materials</h3>
          {materials.map((material, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                id={`material-${material}`}
                value={material}
                className="mr-2"
                onChange={() => handleMaterialChange(material)}
              />
              <label htmlFor={`material-${material}`}>{material}</label>
            </div>
          ))}
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Product Type</h3>
          {productTypes.map((type, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                id={`type-${type}`}
                value={type}
                className="mr-2"
                onChange={() => handleProductTypeChange(type)}
              />
              <label htmlFor={`type-${type}`}>{type}</label>
            </div>
          ))}
        </div>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={applyFilters}
        >
          View Result
        </button>
      </div>
    </div>
  );
};

export default Filter;



