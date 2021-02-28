import React from "react";
import * as S from "./FooterComponent.style";
import * as AiIcons from "react-icons/ai";

function FooterComponent() {
  return (
    <S.Footer>
      <S.Right>Copyright 2021. HEEYEONJEONG All rights reserved.</S.Right>
      <S.LinkBox>
        <a href="https://github.com/HeeyeonJeong/movie">GitHub</a>
        <S.Github>
          <AiIcons.AiFillGithub />
        </S.Github>
      </S.LinkBox>
    </S.Footer>
  );
}

export default FooterComponent;
