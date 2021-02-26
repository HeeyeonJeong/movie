import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";
import * as S from "./LikeComponent.style";

function LikeComponent() {
  const [liked, setLiked] = useState(false);

  const ontoggle = () => {
    setLiked(!liked);
  };

  return (
    <S.LikeBox>
      <S.Button onClick={ontoggle} liked={liked}>
        {liked ? (
          <BsIcons.BsStarFill style={{ color: "yellow" }} />
        ) : (
          <BsIcons.BsStar />
        )}
      </S.Button>
    </S.LikeBox>
  );
}

export default LikeComponent;
