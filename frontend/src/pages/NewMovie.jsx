// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import HeaderNewMovie from "../components/HeaderNewMovie";
const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Adventure" },
  { id: 3, name: "Comedy" },
  { id: 4, name: "Drama" },
  { id: 5, name: "Fantasy" },
  { id: 6, name: "Horror" },
  { id: 7, name: "Mystery" },
  { id: 8, name: "Romance" },
  { id: 9, name: "Thriller" },
  { id: 10, name: "Sci-Fi" },
];

const NewMovie = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleSelect = (id) => {
    if (selectedGenres.includes(id)) {
      setSelectedGenres(selectedGenres.filter((genreId) => genreId !== id));
    } else {
      setSelectedGenres([...selectedGenres, id]);
    }
  };
  return (
    <>
      <HeaderNewMovie />
      <div className="container mx-auto p-4">
        <form>
          <div className="mb-4">
            <label
              className="block text-red-500 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Title"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-red-500 text-sm font-bold mb-2"
              htmlFor="director"
            >
              Director Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="director"
              type="text"
              placeholder="Director Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-red-500 text-sm font-bold mb-2"
              htmlFor="summary"
            >
              Summary
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="summary"
              placeholder="Summary"
            ></textarea>
          </div>
        </form>
        <div>
          <label
            className="block text-red-500 text-sm font-bold mb-2"
            htmlFor="summary"
          >
            Select Categories
          </label>
          <div>
            {genres.map((genre) => (
              <button
                key={genre.id}
                className={`px-2 py-1 m-1 border rounded ${
                  selectedGenres.includes(genre.id)
                    ? "border-red-500 bg-red-500 text-white text-xs"
                    : "border-white text-white text-xs"
                }`}
                onClick={() => handleSelect(genre.id)}
              >
                {genre.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewMovie;
