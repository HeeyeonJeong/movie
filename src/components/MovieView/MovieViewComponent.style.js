import { Link } from "react-router-dom";
import styled from "styled-components";

const ListBox = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const List = styled.li`
  position: relative;
  margin-bottom: ${(props) => props.theme.marginS};

  :hover div {
    display: flex;
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
    margin-bottom: ${(props) => props.theme.marginS};
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

export { ListBox, List, Back, More };
