import React from 'react';
import GuessRow from '../GuessRow/GuessRow'

const GameBoard = (props) => (
  <div className='component'>
    <div> 
      GameBoard
      <GuessRow />
      <GuessRow />
    </div>
  </div>
);

export default GameBoard;