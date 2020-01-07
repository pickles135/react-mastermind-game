import React from 'react';
import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';

const GuessRow = (props) => (
  <div className='component'>
    <div>
      Guess Row #
      <GuessPegs />
      <GuessScore />
    </div>
  </div>
);

export default GuessRow;