import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { createContext, useState } from 'react';
import { boardDefault } from './Words';

// use context api to pass state to all children components inside provider
export const AppContext = createContext();

function App() {
  // set state here, using context api to pass state to all child components when using provider wrapper.
  // Basically able to use them globally
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPos: 0,
  });
  return (
    <div className='App'>
      <nav>
        <h1>Stone's Wordle</h1>
      </nav>
      {/* set value of appcontext provider to board and currentattempt state, so that board and keyboard components both have access to it. */}
      <AppContext.Provider
        value={{ board, setBoard, currAttempt, setCurrentAttempt }}
      >
        <div className='game'>
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
