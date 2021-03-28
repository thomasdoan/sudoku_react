import styled from 'styled-components'
import Game from './containers/Game';

const Container = styled.div`
  // height: 100vh;
  // width: 100vw;
  background: white;
`;

function App() {
  return (
    <Container>
      <Game />
    </Container>
  );
}

export default App;
