import React from 'react';
import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';
import ScoreButton from '../ScoreButton/ScoreButton';

const GuessRow = (props) => (
  <div className='flex-h'>
    <div>{props.rowIdx + 1}</div>
    <GuessPegs 
      colors={props.colors}
      code={props}
    />
    {
      props.currentGuess ?
        <ScoreButton /> :
        <GuessScore />
    }
  </div>
);

export default GuessRow;