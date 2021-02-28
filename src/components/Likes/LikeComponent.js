import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";
import * as S from "./LikeComponent.style";

function LikeComponent({ movie }) {
  const likeBox = JSON.parse(localStorage.getItem("liked"))
    ? JSON.parse(localStorage.getItem("liked"))
    : [];

  const [like, setLike] = useState(
    likeBox.some((save) => JSON.stringify(save.id) === JSON.stringify(movie.id))
      ? false
      : true
  );

  const ontoggle = () => {
    setLike(!like);
    if (like) {
      likeBox.push(movie);
      localStorage.setItem("liked", JSON.stringify(likeBox));
    } else {
      const likeCancel = likeBox.filter(
        (el) => JSON.stringify(el) !== JSON.stringify(movie)
      );
      localStorage.setItem("liked", JSON.stringify(likeCancel));
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
