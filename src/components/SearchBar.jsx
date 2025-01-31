import React from "react";

const SearchBar = () => {
  return (
    // <div className="flex items-center justify-center w-full h-screen bg-blue-200">
      <div className="flex items-center bg-white rounded-lg shadow-lg p-0 w-[30rem] absolute top-28 overflow-hidden">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className="flex-grow rounded-lg outline-none px-4 py-2 text-gray-700"
        />
        <button className="bg-black text-white p-3 px-4">
          ➔
        </button>
      </div>
    // </div>
  );
};

export default SearchBar;
