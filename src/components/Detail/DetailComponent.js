import React from "react";
import * as S from "./DetailComponent.style";
import { useMediaQuery } from "react-responsive";
import LikeComponent from "../Likes/LikeComponent";

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
              <S.TitleBox>
                <h1>{movie.title}</h1>
                <LikeComponent movie={movie} />
              </S.TitleBox>
              <h3>{movie.original_title}</h3>
              <span>
                {movie.genres &&
                  movie.genres.map((genre) => genre.name).join(" / ")}
              </span>
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
