import React, { useState } from "react";
import MovieViewComponent from "../MovieView/MovieViewComponent";
import * as BsIcons from "react-icons/bs";
import * as S from "./MyComponent.style";

function MyComponent({ likeMovies }) {
  const [sort, setSort] = useState({ value: "pick" });
  const [sortMovies, setSortMovies] = useState(likeMovies);

  const handleSelect = (e) => {
    setSort({ value: e.target.value });

    switch (e.target.value) {
      case "pick":
        setSortMovies(JSON.parse(localStorage.getItem("liked")));
        break;
      case "release":
        setSortMovies(likeMovies.sort(dateSort));
        break;
      case "popularity":
        setSortMovies(
          likeMovies.sort((a, b) => a.popularity - b.popularity).reverse()
        );
        break;
      default:
        console.log("error");
    }
  };

  const dateSort = (a, b) => {
    var dateA = new Date(a["release_date"]).getTime();
    var dateB = new Date(b["release_date"]).getTime();
    return dateA > dateB ? -1 : 1;
  };

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
          <S.Select onChange={handleSelect} vlaue={sort}>
            <option value="pick">선택순</option>
            <option value="release">최신순</option>
            <option value="popularity">인기순</option>
          </S.Select>
        </S.SelectBox>
      </S.Top>

      {likeMovies ? (
        <MovieViewComponent data={sortMovies} />
      ) : (
        <p>찜한 영화가 없습니다.</p>
      )}
    </S.Section>
  );
}

export default MyComponent;
