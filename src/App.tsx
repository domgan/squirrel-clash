import Game from './Game';
import styled from 'styled-components';

const AppWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

function App() {
  return (
    <AppWrapper>
      <header>
        <h1>Squirrel CLASH!</h1>
      </header>
      <main>
        <Game />
      </main>
    </AppWrapper>
  );
}

export default App;
