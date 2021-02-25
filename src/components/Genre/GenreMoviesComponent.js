import React from "react";
import * as S from "./GenreMoviesComponent.style";
import MovieViewComponent from "../MovieView/MovieViewComponent";

function GenreMoviesComponent({ data }) {
  return (
    <S.Section>
      <S.Title>코미디 / 로맨스 / 범죄 / 공포 / 음악 장르</S.Title>
      <MovieViewComponent data={data} />
    </S.Section>
  );
}

export default GenreMoviesComponent;
