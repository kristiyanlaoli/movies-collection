// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import MovieCard from "../components/MovieCard";
import AddButton from "../components/AddButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../src/features/moviesSlice.js";

const Home = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);
  const navigate = useNavigate();

  const HandleNew = () => {
    navigate("/new");
  };

  const HandleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  // get movies
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <>
      <Header />
      <SearchBox />
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          director={movie.director}
          summary={movie.summary}
          genres={movie.genres}
          onClick={() => HandleDetail(movie.id)}
        />
      ))}

      <AddButton onClick={HandleNew} />
    </>
  );
};

export default Home;
