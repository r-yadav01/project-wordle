import React from 'react';

import { sample } from '../../utils';
import { range } from '../../utils';
import { WORDS } from '../../data';
import UserInput from '../UserInput/UserInput';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

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
            wordInfo={inputList[num]}
            key={num}
          ></Guess>
        ))}
      </div>

      <UserInput addGuess={addGuess}></UserInput>
    </>
  );

  // will only run after the user enters a value
  function addGuess(guess) {
    const resultOfCheck = checkGuess(guess, answer);
    console.info({ resultOfCheck });
    const newList = [...inputList, resultOfCheck];
    setInputList(newList);
  }
}

export default Game;
