import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSimilarMovies } from "../store/modules//movies";
import { useParams } from "react-router-dom";
import SimilarComponent from "../components/Similar/SimilarComponent";

function SimilarContainer() {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector(
    (state) => state.movies.similarMovies
  );

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSimilarMovies(parseInt(id)));
  }, [dispatch, id]);

  let silceSimilarData = data && data.slice(0, 10);

  if (loading) return <div>로딩중</div>;
  if (!data) return null;
  if (error) return <div>error</div>;

  return <SimilarComponent similar={silceSimilarData} />;
}

export default SimilarContainer;
