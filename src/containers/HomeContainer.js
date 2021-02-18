import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrendMovies } from "../store/modules/home";
import HomeComponent from "../components/Home/HomeComponent";

function HomeContainer() {
  const { loading, data, error } = useSelector(
    (state) => state.home.trendMovies
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrendMovies());
  }, [dispatch]);

  if (loading) return <div>로딩중</div>;
  if (!data) return null;
  if (error) return <div>error</div>;

  return (
    <>
      {data && (
        <HomeComponent
          trendMovie={data[Math.floor(Math.random() * (data.length - 10))]}
        />
      )}
    </>
  );
}

export default HomeContainer;
