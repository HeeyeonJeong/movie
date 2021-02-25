import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setGenre } from "../../services/genreService";
import { getGenreMovies } from "../../store/modules/movies";
import * as S from "./GenreListComponent.style";

function GenreListComponent({ data }) {
  const dispatch = useDispatch();
  const userGenre = JSON.parse(localStorage.getItem("genre"));

  const [selectGenres, setselectGenres] = useState(
    userGenre.length === 0 ? [] : userGenre
  ); //유저가 선택한 장르
  const [isAllChecked, setIsAllChecked] = useState(
    userGenre.length === 0 ? true : false
  ); //"모든장르" input controller

  //전체해제
  const onCancle = () => {
    setIsAllChecked(true);
    setselectGenres([]);
  };

  //"모든장르" 컨트롤
  const handleAll = () => {
    setselectGenres([]);
    setIsAllChecked(true);
  };

  //"모든장르" 제외 컨트롤
  const handleCheck = (e, checked, genre) => {
    setIsAllChecked(false);
    if (checked) {
      setselectGenres([...selectGenres, genre]);
    } else {
      setselectGenres(
        selectGenres.filter(
          (genres) => JSON.stringify(genres) !== JSON.stringify(genre)
        )
      );
    }
  };

  //찾아보기
  const onSearch = () => {
    setGenre(selectGenres);
    dispatch(getGenreMovies(selectGenres.map((genre) => genre.id)));
  };

  return (
    <S.Section>
      <S.Genres>
        <S.Title>장르별 영화 찾기</S.Title>
        <S.GenreBox>
          <S.GenreList>
            <S.Input
              type="checkbox"
              name="allGenres"
              id="allGenres"
              checked={isAllChecked}
              onChange={(e) => handleAll(e.target.checked)}
            />
            <S.Label htmlFor="allGenres">모든 장르</S.Label>
          </S.GenreList>
          {data &&
            data.map((genre) => (
              <S.GenreList key={genre.id}>
                <S.Input
                  type="checkbox"
                  name={genre.name}
                  id={genre.id}
                  checked={
                    JSON.stringify(selectGenres).includes(JSON.stringify(genre))
                      ? true
                      : false
                  }
                  onChange={(e) => handleCheck(e, e.target.checked, genre)}
                />
                <S.Label htmlFor={genre.id}>{genre.name}</S.Label>
              </S.GenreList>
            ))}
        </S.GenreBox>
        <S.ButtonBox>
          <S.Button onClick={onCancle}>전체해제</S.Button>
          <S.Button onClick={onSearch}>찾아보기</S.Button>
        </S.ButtonBox>
      </S.Genres>
    </S.Section>
  );
}

export default GenreListComponent;
