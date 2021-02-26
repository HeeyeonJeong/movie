import styled from "styled-components";

const LikeBox = styled.div``;

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
`;

export { LikeBox, Button };
