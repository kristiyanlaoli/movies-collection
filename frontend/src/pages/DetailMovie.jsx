import { useState } from "react";
import DeleteButtom from "../components/DeleteButtom";
import SaveButtom from "../components/SaveButtom";
import { useDispatch, useSelector } from "react-redux";
import { editMovies, deleteMovies } from "../features/moviesSlice.js";
import { useNavigate, useParams } from "react-router-dom";

const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Comedy" },
  { id: 3, name: "Drama" },
  { id: 4, name: "Sci-Fi" },
  { id: 5, name: "Animation" },
];

const DetailMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isEditingMovie, isSuccess, isDeleteMovie, movies } = useSelector(
    (state) => state.movies
  );
  const { movieId } = useParams();
  const editedMovie = movies.find((movie) => movie.id === Number(movieId));

  // Check if the movie exists before accessing its properties
  const [selectedGenres, setSelectedGenres] = useState(editedMovie.genres);
  const [title, setTitle] = useState(editedMovie.title);
  const [director, setDirector] = useState(editedMovie.director);
  const [summary, setSummary] = useState(editedMovie.summary);

  const handleSelect = (id) => {
    if (selectedGenres.includes(id)) {
      setSelectedGenres(selectedGenres.filter((genreId) => genreId !== id));
    } else {
      setSelectedGenres([...selectedGenres, id]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const movieData = {
      id: Number(movieId),
      title: title,
      director: director,
      summary: summary,
      genre: selectedGenres,
    };

    dispatch(editMovies(movieData));
    if (isSuccess === true && !isEditingMovie) {
      navigate("/");
    }
  };

  const handleDelete = () => {
    dispatch(deleteMovies(Number(movieId)));
    if (isSuccess === true && !isDeleteMovie) navigate("/");
  };

  return (
    <>
      <header className="bg-gray-950 mx-4 h-20 flex justify-between items-center font-bold text-red-600 text-xl border-b-2 border-b-red-500">
        Edit Movie
        <div className="flex gap-5">
          <DeleteButtom onClick={handleDelete} />
          <SaveButtom type="submit" onClick={handleSubmit} />
        </div>
      </header>
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={director}
              onChange={(e) => {
                setDirector(e.target.value);
              }}
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
              value={summary}
              onChange={(e) => {
                setSummary(e.target.value);
              }}
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

export default DetailMovie;
