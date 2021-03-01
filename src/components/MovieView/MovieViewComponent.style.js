import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const ListBox = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  ${(props) =>
    props.pick &&
    css`
      @media ${(props) => props.theme.deskTop} {
        justify-content: flex-start;

        & > li + li {
          margin-left: 10px;
        }
      }
    `}
`;

const List = styled.li`
  position: relative;
  margin-bottom: ${(props) => props.theme.marginS};

  :hover div {
    display: flex;
  }
`;

const ImageBox = styled.div`
  @media (max-width: 374px) {
    width: 92px;
    min-height: 140px;
  }

  @media (min-width: 375px) {
    width: 154px;
    min-height: 235px;
  }

  @media ${(props) => props.theme.tabletSmall} {
    width: 185px;
    min-height: 278px;
  }

  img {
    display: block;
    height: 100%;
  }
`;

const Blank = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  background-color: rgb(29, 28, 28);
  text-align: center;

  @media (max-width: 374px) {
    min-height: 140px;
  }

  @media (min-width: 375px) {
    min-height: 235px;
  }

  @media ${(props) => props.theme.tabletSmall} {
    font-size: ${(props) => props.theme.fontM};
    min-height: 278px;
  }
`;

const Back = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    font-size: 15px;
    margin: 5px 0 ${(props) => props.theme.marginS} 0;
  }

  span {
    font-size: ${(props) => props.theme.fontS};
    margin-bottom: ${(props) => props.theme.marginS};
  }

  @media ${(props) => props.theme.tabletSmall} {
    h3 {
      font-size: ${(props) => props.theme.fontM};
    }

    span {
      font-size: 15px;
    }
  }
`;

const More = styled(Link)`
  color: white;
  text-decoration: none;
  border: 1px solid white;
  padding: 5px;
  font-size: 15px;

  :hover {
    background-color: white;
    color: black;
  }

  @media (max-width: 374px) {
    font-size: ${(props) => props.theme.fontS};
  }

  @media ${(props) => props.theme.deskTop} {
    padding: 6px;
  }
`;

export { ListBox, List, ImageBox, Blank, Back, More };
