import React from 'react';
import { range } from '../../utils';

function Guess({ wordObj }) {
  let letters = [];

  if (wordObj) {
    let word = wordObj.name;
    letters = [...word];
  }

  return (
    <p className='guess'>
      {range(5).map((index) => {
        return (
          <span
            className='cell'
            key={index}
          >
            {letters[index]}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
