// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import MovieCard from "../components/MovieCard";
import AddButton from "../components/AddButton";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const Handle = () => {
    navigate("/new");
  };
  return (
    <>
      <Header />
      <SearchBox />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <AddButton onClick={Handle} />
    </>
  );
};

export default Home;
