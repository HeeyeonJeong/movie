import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GenreListComponent from "../components/Genre/GenreListComponent";
import { getGenreList } from "../store/modules/movies";

function GenreListContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenreList());
  }, [dispatch]);

  const { loading, data, error } = useSelector(
    (state) => state.movies.genreList
  );

  if (loading) return <div>로딩중</div>;
  if (!data) return null;
  if (error) return <div>error</div>;

  return data && <GenreListComponent data={data} />;
}

export default GenreListContainer;
