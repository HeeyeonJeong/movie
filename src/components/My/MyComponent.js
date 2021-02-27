import React from "react";
import MovieViewComponent from "../MovieView/MovieViewComponent";
import * as BsIcons from "react-icons/bs";
import * as S from "./MyComponent.style";

function MyComponent({ likeMovies }) {
  return (
    <S.Section>
      <S.Top>
        <S.TitleBox>
          <S.Title>내가 찜한 영화</S.Title>
          <S.Icon>
            <BsIcons.BsStarFill />
          </S.Icon>
        </S.TitleBox>

        <S.SelectBox>
          <S.Select>
            <option value="release">찜한순</option>
            <option value="release">최신순</option>
            <option value="popularity">인기순</option>
          </S.Select>
        </S.SelectBox>
      </S.Top>

      {likeMovies ? (
        <MovieViewComponent data={likeMovies} />
      ) : (
        <p>찜한 영화가 없습니다.</p>
      )}
    </S.Section>
  );
}

export default MyComponent;
