import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovies } from "../features/moviesSlice.js";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (search) {
      if (timer) {
        clearTimeout(timer);
      }

      setTimer(
        setTimeout(() => {
          dispatch(searchMovies(search));
        }, 1000)
      );
    }
  }, [search]);

  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        placeholder="Search movie..."
        className="mt-2 p-2 text-white  bg-gray-900 border-2 border-gray-600 focus:border-red-500 focus:outline-none rounded-md"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
