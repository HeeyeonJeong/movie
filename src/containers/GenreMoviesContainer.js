import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../index";
import GenreMoviesComponent from "../components/Genre/GenreMoviesComponent";
import { getGenreMovies } from "../store/modules/movies";
import { getGenre } from "../services/genreService";

function GenreMoviesContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenreMovies(getGenre));
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
