import React, { useState } from "react";

const SortFilter = ({ onSortChange, onFilterChange, uniqueProductTypes, uniqueMaterials, filterType, filterMaterial }) => {
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

  const toggleSortDropdown = () => {
    setIsSortDropdownOpen(!isSortDropdownOpen);
  };

  const toggleFilterPanel = () => {
    setIsFilterPanelOpen(!isFilterPanelOpen);
  };

  const handleSortOptionClick = (sortOption) => {
    onSortChange(sortOption);
    setIsSortDropdownOpen(false); // Close the dropdown after selecting an option
  };

  const handleFilterChange = (e, filterCategory) => {
    const value = e.target.value;
    onFilterChange(value, filterCategory);
  };

  const applyFilters = () => {
    setIsFilterPanelOpen(false); // Close the filter panel after applying filters
  };

  return (
    <div className="flex justify-end mb-4 border-b border-gray-300 pb-4">
      <div className="relative">
        <button onClick={toggleSortDropdown} className="border p-2 rounded bg-gray-200 flex items-center">
          Sort by
          <span className={`ml-2 transform ${isSortDropdownOpen ? 'rotate-180' : 'rotate-0'}`}>
            ▼
          </span>
        </button>
        {isSortDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
            <button onClick={() => handleSortOptionClick("price-asc")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
              Price Ascending
            </button>
            <button onClick={() => handleSortOptionClick("price-desc")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
              Price Descending
            </button>
          </div>
        )}
      </div>
      <button onClick={toggleFilterPanel} className="border px-8 rounded bg-[#B47AEA] text-white">
        Filter
      </button>
      {isFilterPanelOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-end items-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-1/3 h-full overflow-y-auto z-50 relative">
            <button onClick={toggleFilterPanel} className="absolute top-6 right-6 text-gray-800 hover:text-black">
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4">Filter Options</h3>
            <div className="mb-4">
              <h4 className="text-xl font-semibold">Product Types</h4>
              {uniqueProductTypes.map((type) => (
                <div key={type}>
                  <input
                    type="checkbox"
                    value={type}
                    onChange={(e) => handleFilterChange(e, "type")}
                    checked={filterType.includes(type)}
                  />
                  <label className="ml-2">{type}</label>
                </div>
              ))}
            </div>
            <div className="mb-4">
              <h4 className="text-xl font-semibold">Materials</h4>
              {uniqueMaterials.map((material) => (
                <div key={material}>
                  <input
                    type="checkbox"
                    value={material}
                    onChange={(e) => handleFilterChange(e, "material")}
                    checked={filterMaterial.includes(material)}
                  />
                  <label className="ml-2">{material}</label>
                </div>
              ))}
            </div>
            <button onClick={applyFilters} className="border p-2 rounded bg-[#B47AEA] text-white">
              View results
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortFilter;


