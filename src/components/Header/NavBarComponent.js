import React from "react";
import * as S from "./HeaderComponent.style";

function NavBarComponent() {
  return (
    <S.NavMenu>
      <S.List>
        <S.ListLink to={`/genre`}>영화 더보기</S.ListLink>
      </S.List>
      <S.List>
        <S.ListLink to={`/my`}>MY</S.ListLink>
      </S.List>
    </S.NavMenu>
  );
}

export default NavBarComponent;
