import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GenreMoviesComponent from "../components/Genre/GenreMoviesComponent";
import { getGenreMovies } from "../store/modules/movies";

function GenreMoviesContainer() {
  const dispatch = useDispatch();
  const genreList = JSON.parse(localStorage.getItem("genre"))
    ? JSON.parse(localStorage.getItem("genre"))
    : [];

  useEffect(() => {
    dispatch(getGenreMovies(genreList.map((genre) => genre.id)));
  }, [dispatch]);

  const { loading, data, error } = useSelector(
    (state) => state.movies.genreMovies
  );

  if (loading) return <div>로딩중</div>;
  if (!data) return null;
  if (error) return <div>error</div>;

  return <GenreMoviesComponent data={data} />;
}

export default GenreMoviesContainer;
