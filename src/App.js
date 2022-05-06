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
  // function to handle selecting a letter  from the keyboard
  const onSelectLetter = (keyVal) => {
    // return and end the function after the 5th letter
    if (setCurrentAttempt.letterPos > 4) return;
    // spread out board array(from context) and set to newBoard variable
    const newBoard = [...board];
    // set board tile to key value
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    // set the board state to the new board, this will happen every time you click/guess a new letter.
    setBoard(newBoard);
    //
    setCurrentAttempt({
      ...currAttempt,
      letterPos: currAttempt.letterPos + 1,
    });
  };

  // function to delete a letter
  const onDelete = () => {
    // if letter position is already in first position, do nothing.
    if (currAttempt.letterPos === 0) return;
    // spread out board array(from context) and set to newBoard variable
    const newBoard = [...board];
    // set previous tile to an empty string, removing thr letter from the board.
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = '';
    // set board state to new board with letter removed
    setBoard(newBoard);
    // set letter position to -1 from its current state
    setCurrentAttempt({
      ...currAttempt,
      letterPos: currAttempt.letterPos - 1,
    });
  };

  // function to handle pressing enter key
  const onEnter = () => {
    // return if guess is under 5 letters.
    if (currAttempt.letterPos !== 5) return;
    // increment the attempt by 1, moving to the next line on the board, set letterPos back to 0 (first position)
    setCurrentAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    console.log(currAttempt);
  };

  return (
    <div className='App'>
      <nav>
        <h1>Stone's Wordle</h1>
      </nav>
      {/* set value of appcontext provider to board and currentattempt state, so that board and keyboard components both have access to it. */}
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrentAttempt,
          onDelete,
          onEnter,
          onSelectLetter,
        }}
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
