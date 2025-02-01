import React, { useState } from "react";

const SearchBar = ({ fetchIPLocation }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    if (input.trim() !== '') {
      fetchIPLocation(input);
    }
  };

  return (
    <div className="flex items-center bg-white rounded-lg shadow-lg p-0 w-[30rem] absolute top-28 overflow-hidden">
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        className="flex-grow rounded-lg outline-none px-4 py-2 text-gray-700"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-black text-white p-3 px-4" onClick={handleSearch}>
        ➔
      </button>
    </div>
  );
};

export default SearchBar;
