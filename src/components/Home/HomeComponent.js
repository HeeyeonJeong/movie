import React from "react";
import LayoutComponent from "../Layout/LayoutComponent";
import * as S from "./HomeComponent.style";

function HomeComponent({ trendMovie }) {
  return (
    <>
      {trendMovie && (
        <LayoutComponent>
          <S.HomeContainer
            style={{
              backgroundImage: `url(${`https://image.tmdb.org/t/p/original/${trendMovie.backdrop_path}`})`,
            }}
          >
            <S.HomeBox>
              <S.InfoBox>
                <h3>
                  오늘의 <span>TOP 10</span> 영화
                </h3>
                <h1>{trendMovie.title}</h1>
                <S.DetailLink to={`/detail/${trendMovie.id}`}>
                  자세히 보기
                </S.DetailLink>
              </S.InfoBox>
            </S.HomeBox>
          </S.HomeContainer>
        </LayoutComponent>
      )}
    </>
  );
}

export default HomeComponent;
