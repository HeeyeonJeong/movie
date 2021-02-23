import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
  position: fixed;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HomeLink = styled(Link)`
  color: white;
  font-size: ${(props) => props.theme.fontL};
  padding: ${(props) => props.theme.paddingS};

  @media ${(props) => props.theme.tabletSmall} {
    font-size: ${(props) => props.theme.fontXL};
    padding: ${(props) => props.theme.paddingM};
  }
`;

const MenuBtn = styled.button`
  background: none;
  border: none;
  color: white;
  position: relative;
  top: 6px;
  padding: ${(props) => props.theme.paddingS};
  font-size: ${(props) => props.theme.fontL};

  @media ${(props) => props.theme.tabletSmall} {
    display: none;
  }
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 11;
`;

const Button = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  background: none;
  border: none;
  color: white;
  font-size: ${(props) => props.theme.fontL};
`;

const NavMenu = styled.ul`
  @media ${(props) => props.theme.tabletSmall} {
    display: flex;
  }
`;

const List = styled.li`
  list-style: none;
  text-align: center;
  padding: ${(props) => props.theme.paddingM} 0;

  @media ${(props) => props.theme.tabletSmall} {
    margin: 0 20px;
    position: relative;
    top: 10px;
  }
`;

const ListLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: ${(props) => props.theme.fontL};
  font-weight: 900;

  @media ${(props) => props.theme.tabletSmall} {
    font-size: ${(props) => props.theme.fontM};
  }
`;

export {
  HeaderContainer,
  HeaderBox,
  HomeLink,
  MenuBtn,
  Nav,
  NavMenu,
  Button,
  List,
  ListLink,
};
