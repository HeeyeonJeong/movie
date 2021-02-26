import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";
import * as S from "./LikeComponent.style";

function LikeComponent({ movie }) {
  const [like, setLike] = useState(
    localStorage.getItem(movie.id) ? false : true
  );

  const ontoggle = () => {
    setLike(!like);
    if (like) {
      localStorage.setItem(movie.id, JSON.stringify(movie));
    } else {
      localStorage.removeItem(movie.id, movie);
    }
  };

  return (
    <S.Button onClick={ontoggle} like={like}>
      {like ? (
        <BsIcons.BsStar />
      ) : (
        <BsIcons.BsStarFill style={{ color: "yellow" }} />
      )}
    </S.Button>
  );
}

export default LikeComponent;
