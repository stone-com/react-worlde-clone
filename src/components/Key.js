import React, { useContext } from 'react';
import { AppContext } from '../App';

function Key({ keyVal, bigKey }) {
  // bring in handler functions from context
  const { onDelete, onSelectLetter, onEnter } =
    useContext(AppContext);
  // function to handle when a letter is clicked
  const selectLetter = () => {
    if (keyVal === 'ENTER') {
      onEnter();
    } else if (keyVal === 'DELETE') {
      onDelete();
    } else {
      onSelectLetter(keyVal);
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
