import styled from "styled-components";

const Section = styled.section`
  padding: 0 ${(props) => props.theme.paddingL} 50px;

  @media ${(props) => props.theme.tabletSmall} {
    padding: 0 90px 100px;
  }

  @media ${(props) => props.theme.deskTop} {
    padding: 0 230px 100px;
  }
`;

const SectionTitle = styled.h1`
  font-size: 25px;
  margin-bottom: ${(props) => props.theme.marginM};
`;

export { Section, SectionTitle };
