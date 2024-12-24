import styled from "styled-components";

const Paragraph = styled.p`
  margin-bottom: 2em;

  @media screen and (min-width: 769px) {
    font-size: 16px;
    height: 100px;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    height: auto;
    line-height: 1.5;
  }
`;

export default Paragraph;