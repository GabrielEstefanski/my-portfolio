import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: auto;
  flex-grow: 1;
  position: relative;
  
  @media screen and (min-width: 1024px) {
    max-width: 960px;
  }
  
  @media screen and (min-width: 1216px) {
    max-width: 1152px;
  }
  
  @media screen and (min-width: 1408px) {
    max-width: 1344px;
  }
`;

export default Container