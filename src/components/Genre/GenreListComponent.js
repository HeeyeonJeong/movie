import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getGenreMovies } from "../../store/modules/movies";
import * as S from "./GenreListComponent.style";

function GenreListComponent({ data }) {
  const dispatch = useDispatch();

  const [selectGenres, setselectGenres] = useState([]); //유저가 선택한 장르
  const [isAllChecked, setIsAllChecked] = useState(true); //모든 장르 input controller

  const onCancle = () => {
    setIsAllChecked(true);
    setselectGenres([]);
  };

  const handleAll = () => {
    setselectGenres([]);
    setIsAllChecked(true);
  };

  const handleCheck = (e, checked, id) => {
    setIsAllChecked(false);
    if (checked) {
      setselectGenres([...selectGenres, id]);
    } else {
      setselectGenres(selectGenres.filter((genre) => genre !== id));
    }
  };

  const onSearch = () => {
    dispatch(getGenreMovies(selectGenres));
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
                  checked={selectGenres.includes(genre.id) ? true : false}
                  onChange={(e) => handleCheck(e, e.target.checked, genre.id)}
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
