// eslint-disable-next-line no-unused-vars
import React from "react";

const SearchBox = () => {
  return (
    <input
      type="text"
      placeholder="Search movie..."
      className="m-2 p-2 text-white flex mx-auto bg-gray-900 border-2 border-gray-600 focus:border-red-500 focus:outline-none rounded-md"
    />
  );
};

export default SearchBox;
