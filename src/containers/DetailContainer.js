import React, { useEffect } from "react";
import DetailComponent from "../components/Detail/DetailComponent";
import { useDispatch, useSelector } from "react-redux";
import { getTrendMovies } from "../store/modules//movies";
import { useParams } from "react-router-dom";

function DetailContainer() {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector(
    (state) => state.movies.trendMovies
  );

  const { id } = useParams();

  useEffect(() => {
    dispatch(getTrendMovies());
  }, [dispatch]);

  if (loading) return <div>로딩중</div>;
  if (!data) return null;
  if (error) return <div>error</div>;

  return (
    data && (
      <DetailComponent
        movie={data.find((movie) => movie.id === parseInt(id))}
      />
    )
  );
}

export default DetailContainer;
