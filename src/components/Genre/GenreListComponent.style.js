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

const Genres = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 300px;

  @media ${(props) => props.theme.tabletSmall} {
    min-height: 400px;
  }
`;

const Title = styled.h2`
  margin-bottom: ${(props) => props.theme.marginM};

  @media ${(props) => props.theme.tabletSmall} {
    font-size: ${(props) => props.theme.fontL};
    margin-bottom: ${(props) => props.theme.marginL};
  }
`;

const GenreBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 250px;
  margin-bottom: ${(props) => props.theme.marginM};

  @media ${(props) => props.theme.tabletSmall} {
    min-height: 180px;
    margin-bottom: ${(props) => props.theme.marginL};
  }

  @media ${(props) => props.theme.deskTop} {
    min-height: 100px;
    max-width: 1000px;
  }
`;

const GenreList = styled.div`
  & + & {
    margin-left: ${(props) => props.theme.marginS};
  }

  input {
    margin-right: 5px;
  }

  label {
    font-size: ${(props) => props.theme.fontM};
    position: relative;
    top: 1px;
    font-weight: 600;
  }

  @media ${(props) => props.theme.tabletSmall} {
    & + & {
      margin-left: ${(props) => props.theme.marginM};
    }
  }
`;

const ButtonBox = styled.div`
  display: flex;
`;

const Button = styled.button`
  color: white;
  width: 100px;
  height: 50px;
  font-weight: 600;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 2px;
  padding: 7px;
  font-size: 15px;
  cursor: pointer;

  :active {
    background-color: white;
    color: black;
  }

  :focus {
    outline-style: none;
  }

  & + & {
    margin-left: ${(props) => props.theme.marginS};
  }

  @media ${(props) => props.theme.tabletSmall} {
    width: 130px;
    font-size: ${(props) => props.theme.fontM};

    & + & {
      margin-left: ${(props) => props.theme.marginL};
    }
  }

  @media ${(props) => props.theme.deskTop} {
    :hover {
      background-color: white;
      color: black;
    }
  }
`;

export { Section, Genres, Title, GenreBox, GenreList, ButtonBox, Button };
