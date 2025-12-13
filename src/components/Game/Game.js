import React from 'react';

import { sample } from '../../utils';
import { range } from '../../utils';
import { WORDS } from '../../data';
import UserInput from '../UserInput/UserInput';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // array of objects
  const [inputList, setInputList] = React.useState([]);

  return (
    <>
      <div className='guess-results'>
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
          <Guess
            wordObj={inputList[num]}
            key={num}
          ></Guess>
        ))}
      </div>

      <UserInput addGuess={addGuess}></UserInput>
    </>
  );

  function addGuess(guess) {
    const guessObj = { name: guess, id: Math.random() };
    const newList = [...inputList, guessObj];
    setInputList(newList);
  }
}

export default Game;
