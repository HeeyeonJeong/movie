import styled from "styled-components";

const Footer = styled.footer`
  text-align: center;
  padding: ${(props) => props.theme.paddingXL};
`;

const Right = styled.small`
  display: block;
  font-size: 12px;

  @media (max-width: 320px) {
    font-size: 10px;
  }

  @media ${(props) => props.theme.tabletSmall} {
    font-size: 15px;
  }
`;

const LinkBox = styled.div`
  a {
    color: white;
    text-decoration: none;
    font-size: 12px;
    margin-right: 5px;

    :hover {
      text-decoration: underline;
    }

    @media (max-width: 320px) {
      font-size: 10px;
    }

    @media ${(props) => props.theme.tabletSmall} {
      font-size: 15px;
    }
  }
`;

const Github = styled.div`
  display: inline-block;
  position: relative;
  top: 3px;
`;

export { Footer, Right, LinkBox, Github };
