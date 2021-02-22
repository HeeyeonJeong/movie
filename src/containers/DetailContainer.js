import React, { useEffect } from "react";
import DetailComponent from "../components/Detail/DetailComponent";
import { useDispatch, useSelector } from "react-redux";
import { getTrendMovies, getUserSelect } from "../store/modules//movies";
import { useParams } from "react-router-dom";
import { store } from "../index";

function DetailContainer() {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector(
    (state) => state.movies.useSelectMovie
  );

  const trendSelectMovie = store.getState().movies.trendMovies.data;

  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserSelect(parseInt(id)));
  }, [dispatch]);

  if (loading) return <div>로딩중</div>;
  if (!data) return null;
  if (error) return <div>error</div>;

  return data ? (
    <DetailComponent movie={data} />
  ) : (
    <DetailComponent
      movie={trendSelectMovie.find((movie) => movie.id === parseInt(id))}
    />
  );
}

export default DetailContainer;
