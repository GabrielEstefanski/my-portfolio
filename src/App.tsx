import './App.css'
import Router from './Router';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
  margin-top: 90px;
`;

function App() {
  return (
    <>
    <AppContainer>
      <Router/>
    </AppContainer>
    </>
  )
}

export default App
