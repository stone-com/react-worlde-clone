import React, { useEffect, useCallback, useContext } from 'react';
import Key from './Key';
import { AppContext } from '../App';
// here we create keyboard by mapping through arrays of keys and creting a key component for each key
function Keyboard() {
  // bring in key selection handler functions from context
  const { onEnter, onDelete, onSelectLetter} = useContext(AppContext);
  // create arrays for different keys, will map through them in the return
  const keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  // handling using physical keyboard for letter inputs
  const handleKeyboard = useCallback((event) => {
    if (event.key === 'Enter') {
      onEnter();
    } else if (event.key === 'Backspace') {
      onDelete();
    } else {
      // loop through each keys array and compare to event.key. if its a match then run selectLetter function to display it on the board
      keys1.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      keys2.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      keys3.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
    }
  });
  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard);
    return () => {
      document.removeEventListener('keydown', handleKeyboard);
    };
  }, [handleKeyboard]);
  return (
    <div className='keyboard' onKeyDown={handleKeyboard}>
      {/* map through key arrays, creating a new Key component for each letter and passing in the value */}
      <div className='line1'>
        {keys1.map((key) => {
          return <Key keyVal={key} />;
        })}
      </div>
      <div className='line2'>
        {keys2.map((key) => {
          return <Key keyVal={key} />;
        })}
      </div>
      <div className='line3'>
        {/* On line 3, create 2 more key components for enter and delete, set bigKey value to true to style them wider with ID and CSS */}
        <Key keyVal={'ENTER'} bigKey />
        {keys3.map((key) => {
          return <Key keyVal={key} />;
        })}
        <Key keyVal={'DELETE'} bigKey />
      </div>
    </div>
  );
}

export default Keyboard;
