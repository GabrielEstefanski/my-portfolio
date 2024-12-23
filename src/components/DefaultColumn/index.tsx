import styled from "styled-components";

const DefaultColumn = styled.div`
display: block;
flex-basis: 0;
flex-grow: 1;
flex-shrink: 1;
padding: 0.75rem;

@media screen and (min-width: 769px) {
  flex: none;
  width: 60%;
}
`;

export default DefaultColumn;