// Dropdown.js
import React from "react";

const Sort = ({ options, onSelect }) => {
  return (
    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
      {options.map((option, index) => (
        <button
          key={index}
          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          onClick={() => onSelect(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Sort;
