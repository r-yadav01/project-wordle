import React from 'react';

function RenderGuesses({ guesses }) {
  return (
    <div className='guess-results'>
      {guesses.map((guess) => (
        <p
          className='guess'
          key={guess.id}
        >
          {guess.name}
        </p>
      ))}
    </div>
  );
}

export default RenderGuesses;
