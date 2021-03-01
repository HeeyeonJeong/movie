import React from "react";
import * as S from "./MovieViewComponent.style";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { getUserSelect } from "../../store/modules/movies";
import LikeComponent from "../Likes/LikeComponent";
import * as BsIcons from "react-icons/bs";

function MovieViewComponent({ data }) {
  const dispatch = useDispatch();

  const pageMove = (id) => {
    dispatch(getUserSelect(id));
  };

  const isTabletUp = useMediaQuery({
    query: "(min-width:768px)",
  });

  const is5Down = useMediaQuery({
    query: "(max-width:374px)",
  });

  return (
    <S.ListBox>
      {data &&
        data.map((movie) => (
          <S.List key={movie.id}>
            <S.ImageBox>
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/${
                    isTabletUp ? "w185" : is5Down ? "w92" : "w154"
                  }/${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <S.Blank>
                  <h3>{movie.title}</h3>
                </S.Blank>
              )}
            </S.ImageBox>
            <S.Back>
              {JSON.parse(localStorage.getItem("liked")) &&
                JSON.parse(localStorage.getItem("liked")).some(
                  (save) => JSON.stringify(save.id) === JSON.stringify(movie.id)
                ) && <BsIcons.BsStarFill style={{ color: "yellow" }} />}
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
  );
}

export default MovieViewComponent;
