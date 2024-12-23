import styled from "styled-components";

interface TitleProps {
  size?: string;
}

const Title = styled.h1<TitleProps>`
  font-weight: 800;
  margin-bottom: 1em;
  margin-top: 1em;
  font-size: ${({ size }) => size || "20px"};
`;

export default Title;