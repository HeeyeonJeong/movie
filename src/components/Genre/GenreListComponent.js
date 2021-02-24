import React from "react";
import * as S from "./GenreListComponent.style";

function GenreListComponent({ data }) {
  return (
    <S.Section>
      <S.Genres>
        <S.Title>장르별 영화 찾기</S.Title>
        <S.GenreBox>
          <S.GenreList>
            <S.Input
              type="checkbox"
              name="genres"
              id="allGenres"
              value="allGenres"
              checked
            />
            <S.Label htmlFor="allGenres">모든 장르</S.Label>
          </S.GenreList>
          {data &&
            data.map((genre) => (
              <S.GenreList key={genre.id}>
                <S.Input
                  type="checkbox"
                  name="genres"
                  id={genre.name}
                  value={genre.id}
                />
                <S.Label htmlFor={genre.name}>{genre.name}</S.Label>
              </S.GenreList>
            ))}
        </S.GenreBox>
        <S.ButtonBox>
          <S.Button>전체해제</S.Button>
          <S.Button>찾아보기</S.Button>
        </S.ButtonBox>
      </S.Genres>
    </S.Section>
  );
}

export default GenreListComponent;
