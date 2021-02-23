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

  const pageMove = (id) => {
    dispatch(getUserSelect(id));
  };

  return (
    <S.Section>
      <S.SectionTitle>비슷한 영화 찾아보기</S.SectionTitle>
      <S.ListBox>
        {similar &&
          similar.map((movie) => (
            <S.List key={movie.id}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/${
                    isTabletUp ? "w185" : is5Down ? "w92" : "w154"
                  }/${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
              <S.Back>
                <h3>{movie.title}</h3>
                <span>{movie.release_date}</span>
                <S.More
                  to={`/detail/${movie.id}`}
                  onClick={() => pageMove(movie.id)}
                >
                  자세히
                </S.More>
              </S.Back>
            </S.List>
          ))}
      </S.ListBox>
    </S.Section>
  );
}

export default SimilarComponent;
