import React, { useContext } from 'react';
import { AppContext } from '../App';

function Letter({ letterPos, attemptVal }) {
  // get board state from context and save to variable
  const { board } = useContext(AppContext);
  // create letter variable and set value to position on board
  const letter = board[attemptVal][letterPos];
  // return div with letter passed in as value
  return <div className='letter'>{letter}</div>;
}

export default Letter;
