import styled, { css } from "styled-components";

const Button = styled.button`
  background: none;
  color: white;
  border: none;
  outline: none;
  font-size: ${(props) => props.theme.fontL};
  padding: ${(props) => props.theme.paddingS};
  position: relative;
  top: -5px;
  cursor: pointer;

  ${(props) =>
    props.size &&
    css`
      padding: 5px;
      font-size: 15px;

      @media (max-width: 320px) {
        font-size: 10px;
      }
    `}
`;

export { Button };
