import React from 'react';
import styles from './ScreenKeyboard.module.css';

function ScreenKeyboard() {
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
            {row.map((letter, index) => (
              <span
                key={index}
                className={styles.key}
              >
                {letter}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default ScreenKeyboard;
