import React from "react";
import * as S from "./SimilarComponent.style";
import MovieViewComponent from "../MovieView/MovieViewComponent";

function SimilarComponent({ similar }) {
  return (
    <S.Section>
      <S.SectionTitle>비슷한 영화 찾아보기</S.SectionTitle>
      <MovieViewComponent data={similar} />
    </S.Section>
  );
}

export default SimilarComponent;
