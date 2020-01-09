import React from 'react';
import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';

const GuessRow = (props) => (
  <div className='flex-h'>
    <div>{props.rowIdx + 1}</div>
    <GuessPegs />
    <GuessScore />
  </div>
);

export default GuessRow;