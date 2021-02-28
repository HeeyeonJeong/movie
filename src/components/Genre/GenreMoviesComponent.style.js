import styled from "styled-components";

const Section = styled.section`
  padding: 0 30px 30px 30px;

  @media ${(props) => props.theme.tabletSmall} {
    padding: 0 90px 100px;
  }

  @media ${(props) => props.theme.deskTop} {
    padding: 0 160px 100px;
  }
`;

const Title = styled.h2`
  padding: 0 ${(props) => props.theme.paddingM};
  margin-bottom: ${(props) => props.theme.marginM};

  @media ${(props) => props.theme.tabletSmall} {
    font-size: ${(props) => props.theme.fontL};
    margin-bottom: ${(props) => props.theme.marginL};
  }
`;

const Blank = styled.p`
  text-align: center;
  padding: ${(props) => props.theme.paddingXXL};
`;

export { Section, Title, Blank };
