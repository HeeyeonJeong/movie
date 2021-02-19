import React, { useState } from "react";
import * as MdIcons from "react-icons/md";
import * as GoIcons from "react-icons/go";
import * as FaIcons from "react-icons/fa";
import * as S from "./HeaderComponent.style";
import NavBarComponent from "./NavBarComponent";
import { useMediaQuery } from "react-responsive";

function HeaderCompoenent() {
  const [open, setOpen] = useState(false);

  const isTabletUp = useMediaQuery({
    query: "(min-width:768px)",
  });

  const menuClick = () => setOpen(true);
  const slideClick = () => setOpen(false);

  return (
    <S.HeaderContainer>
      <S.HeaderBox>
        <S.HomeLink to={`/`}>
          <MdIcons.MdMovie />
        </S.HomeLink>
        <S.MenuBtn open={open} onClick={menuClick}>
          <GoIcons.GoThreeBars />
        </S.MenuBtn>
        {isTabletUp && <NavBarComponent />}
      </S.HeaderBox>

      {open && (
        <S.Nav>
          <S.Button onClick={slideClick}>
            <FaIcons.FaWindowClose />
          </S.Button>
          <NavBarComponent />
        </S.Nav>
      )}
    </S.HeaderContainer>
  );
}

export default HeaderCompoenent;
