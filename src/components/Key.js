import React, { useContext } from 'react';
import { AppContext } from '../App';

function Key({ keyVal, bigKey }) {
  // bring in board state from context
  const { board, setBoard, currAttempt, setCurrentAttempt } =
    useContext(AppContext);
  // function to handle when a letter is clicked
  const selectLetter = () => {
    // checking if key clicked is enter key, and handling it if so.
    if (keyVal === 'ENTER') {
      // return if guess is under 5 letters.
      if (currAttempt.letterPos !== 5) return;
      // increment the attempt by 1, moving to the next line on the board, set letterPos back to 0 (first position)
      setCurrentAttempt({ attempt: currAttempt + 1, letterPos: 0 });
    } else {
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
    }
  };
  return (
    // return a key, with the letter/ keyval on it and the onclick set to call selectletter, which will update
    // board state and display selected letter in tile
    <div className='key' id={bigKey && 'big'} onClick={selectLetter}>
      {keyVal}
    </div>
  );
}

export default Key;
