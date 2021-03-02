import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeContainer = styled.main`
  display: block;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100vh;
`;

const HomeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  width: 100%;
  height: 100vh;
`;

const InfoBox = styled.div`
  position: relative;
  text-align: center;
  color: white;
  padding: 0 ${(props) => props.theme.paddingL};
  z-index: 5;

  h3 {
    font-size: ${(props) => props.theme.fontM};
  }

  h1 {
    font-weight: 900;
    font-size: 40px;
    margin: ${(props) => props.theme.marginM} 0;

    @media ${(props) => props.theme.tabletSmall} {
    }

    @media ${(props) => props.theme.deskTop} {
    }
  }
`;

const DetailLink = styled(Link)`
  display: block;
  width: 100px;
  margin: 0 auto;
  color: white;
  text-decoration: none;
  font-size: ${(props) => props.theme.fontM};
  padding: ${(props) => props.theme.paddingS};
  border: 2px solid white;
  border-radius: 2px;
`;

export { HomeContainer, HomeBox, InfoBox, DetailLink };
