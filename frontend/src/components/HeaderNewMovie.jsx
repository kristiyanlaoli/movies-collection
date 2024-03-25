// eslint-disable-next-line no-unused-vars
import React from "react";
import DeleteButtom from "./DeleteButtom";
import SaveButtom from "./SaveButtom";

const HeaderNewMovie = () => {
  return (
    <header className="bg-gray-950 mx-4 h-20 flex justify-between items-center font-bold text-red-600 text-xl border-b-2 border-b-red-500">
      Add New Movie
      <div className="flex gap-5">
        <DeleteButtom />
        <SaveButtom />
      </div>
    </header>
  );
};

export default HeaderNewMovie;
