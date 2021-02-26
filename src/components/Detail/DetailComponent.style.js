import styled from "styled-components";

const DetailBack = styled.div`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 50vh;
  mix-blend-mode: luminosity;
`;

const DetaileBox = styled.div`
  &::after {
    content: "";
    display: block;
    height: 1px;
    clear: both;
  }
`;

const Poster = styled.div`
  width: 185px;
  min-height: 250px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 7px 7px 7px black;
  background-color: rgb(29, 28, 28);

  @media ${(props) => props.theme.tabletSmall} {
    width: 300px;
    min-height: 420px;
  }

  @media ${(props) => props.theme.tabletMedium} {
    top: 50%;
    left: 25%;
  }

  img {
    display: block;
    height: 100%;
  }
`;

const InfoBox = styled.div`
  padding: 0 ${(props) => props.theme.paddingL};
  margin: 180px 0 120px 0;

  h1 {
    font-size: ${(props) => props.theme.fontL};
    font-weight: 900;
    margin: 0 ${(props) => props.theme.marginS}
      ${(props) => props.theme.marginM} 0;
  }

  h3 {
    margin-bottom: ${(props) => props.theme.marginS};
  }

  span {
    display: block;
    margin-bottom: ${(props) => props.theme.marginS};
  }

  p {
    line-height: 1.7;
    letter-spacing: 0.05em;
  }

  @media ${(props) => props.theme.tabletSmall} {
    padding: 0 100px;
    margin-top: 300px;
  }

  @media ${(props) => props.theme.tabletMedium} {
    padding: 0 85px;
    margin-top: 80px;
    float: right;
    width: 45%;
  }

  @media ${(props) => props.theme.deskTop} {
    padding: 0 200px;
  }
`;

const TitleBox = styled.div`
  display: flex;
`;

export { DetailBack, DetaileBox, Poster, InfoBox, TitleBox };
