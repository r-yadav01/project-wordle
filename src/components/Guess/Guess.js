import React from 'react';
import { range } from '../../utils';

function Guess({ word }) {
  let letters = [];

  if (word) {
    word = word.name;
    letters = [...word];
  }

  return (
    <p className='guess'>
      {range(5).map((index) => (
        <span
          className='cell'
          key={index}
        >
          {letters[index]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
