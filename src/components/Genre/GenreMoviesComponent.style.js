import styled from "styled-components";

const Section = styled.section`
  padding: 0 ${(props) => props.theme.paddingM};

  @media ${(props) => props.theme.tabletSmall} {
    padding: 0 90px;
  }

  @media ${(props) => props.theme.deskTop} {
    padding: 0 160px;
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

export { Section, Title };
