import React, { useState } from "react";
import * as S from "./SimilarComponent.style";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserSelect } from "../../store/modules/movies";

function SimilarComponent({ similar }) {
  const dispatch = useDispatch();

  const isTabletUp = useMediaQuery({
    query: "(min-width:768px)",
  });

  const is5Down = useMediaQuery({
    query: "(max-width:374px)",
  });

  const onClick = (id) => {
    dispatch(getUserSelect(id));
  };

  return (
    <S.Section>
      <S.SectionTitle>비슷한 영화 찾아보기</S.SectionTitle>
      <S.ListBox>
        {similar &&
          similar.map((movie) => (
            <S.List key={movie.id}>
              <Link
                to={`/detail/${movie.id}`}
                onClick={() => onClick(movie.id)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/${
                    isTabletUp ? "w185" : is5Down ? "w92" : "w154"
                  }/${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
            </S.List>
          ))}
      </S.ListBox>
    </S.Section>
  );
}

export default SimilarComponent;
