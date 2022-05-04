import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { createContext } from 'react';
// use context api to pass state to all children components inside provider
export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className='App'>
      <nav>
        <h1>Stone's Wordle</h1>
      </nav>
      {/* set value of appcontext provider to board state, so that board and keyboard components both have access to it. */}
      <AppContext.Provider value={{ board, setBoard }}>
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
}

export default App;
