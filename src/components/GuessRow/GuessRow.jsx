import React from 'react';
import GuessPegs from '../GuessPegs/GuessPegs';

const GuessRow = (props) => (
  <div className='component'>
    <div>
      Guess Row #
      <GuessPegs />
    </div>
  </div>
);

export default GuessRow;