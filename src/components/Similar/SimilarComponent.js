import React from "react";
import * as S from "./SimilarComponent.style";
import MovieViewComponent from "../MovieView/MovieViewComponent";

function SimilarComponent({ similar }) {
  return (
    <S.Section>
      <S.SectionTitle>비슷한 영화 찾아보기</S.SectionTitle>
      {similar.length ? (
        <MovieViewComponent data={similar} />
      ) : (
        <S.Blank>비슷한 영화가 없습니다.</S.Blank>
      )}
    </S.Section>
  );
}

export default SimilarComponent;
