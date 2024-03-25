// eslint-disable-next-line no-unused-vars
import React from "react";

const MovieCard = () => {
  return (
    <div className="bg-gray-900 m-2 p-2 rounded-md">
      <h2 className="font-bold text-red-500 text-base">Movie Title</h2>
      <p className="text-slate-300 text-sm">Director Name</p>
      <p className="mt-2 text-slate-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="mt-2 flex gap-1 justify-end text-xs text-red-500">
        <p className="border-[0.3px] border-red-500 p-0.5 rounded-md">Action</p>
        <p className="border-[0.3px] border-red-500 p-0.5 rounded-md">Comedy</p>
        <p className="border-[0.3px] border-red-500 p-0.5 rounded-md">
          Animation
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
