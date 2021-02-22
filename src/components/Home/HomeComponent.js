import React from "react";
import { useDispatch } from "react-redux";
import { getSimilarMovies } from "../../store/modules/movies";
import * as S from "./HomeComponent.style";

function HomeComponent({ trendMovie }) {
  const dispatch = useDispatch();

  const onClick = (id) => {
    dispatch(getSimilarMovies(id));
  };

  return (
    <>
      {trendMovie && (
        <S.HomeContainer
          style={{
            backgroundImage: `url(${`https://image.tmdb.org/t/p/original/${trendMovie.backdrop_path}`})`,
          }}
        >
          <S.HomeBox>
            <S.InfoBox>
              <h3>
                오늘의 <span>TOP 10</span> 영화
              </h3>
              <h1>{trendMovie.title}</h1>
              <S.DetailLink
                to={`/detail/${trendMovie.id}`}
                onClick={() => onClick(trendMovie.id)}
              >
                자세히 보기
              </S.DetailLink>
            </S.InfoBox>
          </S.HomeBox>
        </S.HomeContainer>
      )}
    </>
  );
}

export default HomeComponent;
