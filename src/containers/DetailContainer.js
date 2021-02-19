import React from "react";
import DetailComponent from "../components/Detail/DetailComponent";
import { useSelector } from "react-redux";

function DetailContainer({ match }) {
  const { data, error } = useSelector((state) => state.home.trendMovies);

  const { id } = match.params;

  if (error) return <div>error</div>;

  return (
    <DetailComponent
      movie={data && data.find((movie) => movie.id === parseInt(id))}
    />
  );
}

export default DetailContainer;
