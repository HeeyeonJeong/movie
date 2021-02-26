import React from "react";
import * as S from "./GenreMoviesComponent.style";
import MovieViewComponent from "../MovieView/MovieViewComponent";

function GenreMoviesComponent({ data }) {
  const genreList = JSON.parse(localStorage.getItem("genre"));
  const genreName = genreList.map((genre) => genre.name);

  return (
    <S.Section>
      <S.Title>
        {genreName.length ? `${genreName.join(" / ")} 장르` : "모든 장르"}
      </S.Title>
      {data.length ? (
        <MovieViewComponent data={data} />
      ) : (
        <S.Blank>장르에 맞는 영화가 없습니다.</S.Blank>
      )}
    </S.Section>
  );
}

export default GenreMoviesComponent;
