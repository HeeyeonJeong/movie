import React from "react";
import * as S from "./DetailComponent.style";
import { useMediaQuery } from "react-responsive";

function DetailComponent({ movie }) {
  const isTabletUp = useMediaQuery({
    query: "(min-width:768px)",
  });

  return (
    <>
      {movie && (
        <section>
          <S.DetailBack
            style={{
              backgroundImage: `url(${`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`})`,
            }}
          ></S.DetailBack>
          <S.DetaileBox>
            <S.Poster>
              <img
                src={`https://image.tmdb.org/t/p/${
                  isTabletUp ? "w300" : "w185"
                }/${movie.poster_path}`}
                alt={movie.title}
              />
            </S.Poster>
            <S.InfoBox>
              <h1>{movie.title}</h1>
              <h3>{movie.original_title}</h3>
              <span>{movie.release_date}</span>
              <p>{movie.overview}</p>
            </S.InfoBox>
          </S.DetaileBox>
        </section>
      )}
    </>
  );
}

export default DetailComponent;
