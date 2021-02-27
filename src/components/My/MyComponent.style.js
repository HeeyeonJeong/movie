import styled from "styled-components";

const Section = styled.section`
  margin: 65px 0;
  padding: ${(props) => props.theme.paddingL};

  @media ${(props) => props.theme.tabletSmall} {
    margin: 100px 0;
    padding: 0 90px;
  }

  @media ${(props) => props.theme.deskTop} {
    padding: 0 200px;
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${(props) => props.theme.paddingM};
  margin-bottom: ${(props) => props.theme.marginL};

  @media ${(props) => props.theme.tabletSmall} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const TitleBox = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.marginM};

  @media ${(props) => props.theme.tabletSmall} {
    margin-bottom: 0;
  }
`;

const Title = styled.h2`
  margin-right: ${(props) => props.theme.marginS};

  @media ${(props) => props.theme.tabletSmall} {
    font-size: ${(props) => props.theme.fontL};
  }
`;

const Icon = styled.div`
  position: relative;
  top: 3px;
  color: yellow;
  font-size: 24px;

  @media ${(props) => props.theme.tabletSmall} {
    font-size: ${(props) => props.theme.fontL};
  }
`;

const SelectBox = styled.div`
  text-align: center;
`;

const Select = styled.select`
  width: 150px;
  height: 30px;

  @media ${(props) => props.theme.tabletSmall} {
    position: relative;
    top: 8px;
  }
`;

export { Section, Top, TitleBox, Title, Icon, SelectBox, Select };
