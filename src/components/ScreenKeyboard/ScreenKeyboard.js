import React from 'react';
import styles from './ScreenKeyboard.module.css';

function ScreenKeyboard({ enteredData = [] }) {
  const enteredLetters = enteredData.map((obj) => obj.letter);
  // console.info({ enteredData }, { enteredLetters });

  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ];

  return (
    <div className={styles.keyboard}>
      {' '}
      {rows.map((row, index) => {
        return (
          <div
            key={index}
            className={styles.row}
          >
            {row.map((letter, index) => {
              const locInEnteredLetters = enteredLetters.indexOf(letter);
              let status = '';
              if (locInEnteredLetters > -1) {
                status = enteredData[locInEnteredLetters].status;
                enteredLetters[locInEnteredLetters] = null;
              }

              return (
                <span
                  key={index}
                  className={`${styles.key} ${styles[status]}`}
                >
                  {letter}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default ScreenKeyboard;
