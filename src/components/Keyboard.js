import React from 'react';
import Key from './Key';

function Keyboard() {
  // create arrays for different keys, will map through them in the return
  const keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  return (
    <div className='keyboard'>
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
