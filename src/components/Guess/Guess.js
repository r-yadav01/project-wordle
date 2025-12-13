import React from 'react';
import { range } from '../../utils';

function Guess({ wordInfo }) {
  if (wordInfo === undefined) wordInfo = [];

  return (
    <p className='guess'>
      {range(5).map((index) => {
        let currentLetter = wordInfo[index];
        if (currentLetter === undefined)
          currentLetter = { letter: '', status: '' };

        return (
          <span
            className={`cell ${currentLetter.status}`}
            key={index}
          >
            {currentLetter.letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
