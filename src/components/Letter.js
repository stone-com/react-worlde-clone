import React from 'react'

function Letter({letterPos, attemptVal}) {
    const letter = board[attemptVal][letterPos];
  return (
    <div className="letter"></div>
  )
}

export default Letter