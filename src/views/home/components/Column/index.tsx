import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  flex-grow: 1;
  flex-shrink: 1;
  display: block;
  flex-basis: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  padding: 30px 25px;
  border-bottom: 1px solid #E6ECF8;
  
  @media screen and (min-width: 769px) {
    padding: 60px 35px;
    border-right: 1px solid #E6ECF8;
    border-bottom: 0px solid #E6ECF8;
  }

  &:last-child {
    border-right: none;
    border-bottom: none;
  }
`;

export default Container;