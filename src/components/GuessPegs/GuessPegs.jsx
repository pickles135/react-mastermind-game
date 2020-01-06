import React from 'react';
import GuessPeg from '../GuessPeg/GuessPeg'

const GuessPegs = (props) => (
  <div className='component'>
    <div>
      GuessPegs
      <GuessPeg />
      <GuessPeg />
      <GuessPeg />
      <GuessPeg />
    </div>
  </div>
);

export default GuessPegs;