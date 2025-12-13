import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import UserInput from '../UserInput/UserInput';
import RenderGuesses from '../RenderGuesses/RenderGuesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [inputList, setInputList] = React.useState([]);

  return (
    <>
      <RenderGuesses guesses={inputList}></RenderGuesses>
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
