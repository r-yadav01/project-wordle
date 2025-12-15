import React from 'react';

import { sample } from '../../utils';
import { range } from '../../utils';
import { WORDS } from '../../data';
import UserInput from '../UserInput/UserInput';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import DeclareResult from '../DeclareResult/DeclareResult';
import ScreenKeyboard from '../ScreenKeyboard/ScreenKeyboard';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // array of objects
  const [inputList, setInputList] = React.useState([]);
  const [totalAttempt, setTotalAttempt] = React.useState(0);
  const [declareWin, setDeclareWin] = React.useState(false);
  const [declareLose, setDeclareLose] = React.useState(false);
  const [resultOfCheck, setResultOfCheck] = React.useState(undefined);

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

      <UserInput
        addGuess={addGuess}
        disabled={declareWin || declareLose}
      ></UserInput>

      {declareWin && (
        <DeclareResult
          result='win'
          attempt={inputList.length}
        ></DeclareResult>
      )}

      <ScreenKeyboard enteredData={resultOfCheck}></ScreenKeyboard>

      {declareLose && (
        <DeclareResult
          result='lose'
          answer={answer}
        ></DeclareResult>
      )}
    </>
  );

  // will only run after the user enters a value
  function addGuess(guess) {
    const result = checkGuess(guess, answer);
    const matchResult = checkWinCondition(result);
    setResultOfCheck(result);

    if (matchResult === 'win') {
      setDeclareWin(true);
    } else {
      setTotalAttempt(totalAttempt + 1);
      // console.info({ totalAttempt });
      if (totalAttempt === NUM_OF_GUESSES_ALLOWED - 1) {
        setDeclareLose(true);
      }
    }

    // console.info({ resultOfCheck }, { declareWin }, { declareLose });
    const newList = [...inputList, result];
    // console.info({ newList });

    setInputList(newList);
  }

  function checkWinCondition(array) {
    let correctMatch = 0;
    array.forEach((letterObj) => {
      if (letterObj.status === 'correct') correctMatch++;
    });

    // console.info({ correctMatch });

    if (correctMatch === 5) return 'win';
    else return 'lose';
  }
}

export default Game;
