import React from 'react';
import styles from './ScreenKeyboard.module.css';

function ScreenKeyboard() {
  return (
    <div className={styles.keyboard}>
      <div className={styles.row}>
        <span className={styles.key}>W</span>
        <span className={styles.key}>Q</span>
        <span className={styles.key}>E</span>
        <span className={styles.key}>R</span>
        <span className={styles.key}>T</span>
        <span className={styles.key}>Y</span>
        <span className={styles.key}>U</span>
        <span className={styles.key}>I</span>
        <span className={styles.key}>O</span>
        <span className={styles.key}>P</span>
      </div>

      <div className={styles.row}>
        <span className={styles.key}>A</span>
        <span className={styles.key}>S</span>
        <span className={styles.key}>D</span>
        <span className={styles.key}>F</span>
        <span className={styles.key}>G</span>
        <span className={styles.key}>H</span>
        <span className={styles.key}>J</span>
        <span className={styles.key}>K</span>
        <span className={styles.key}>L</span>
      </div>

      <div className={styles.row}>
        <span className={styles.key}>Z</span>
        <span className={styles.key}>X</span>
        <span className={styles.key}>C</span>
        <span className={styles.key}>V</span>
        <span className={styles.key}>B</span>
        <span className={styles.key}>N</span>
        <span className={styles.key}>M</span>
      </div>
    </div>
  );
}

export default ScreenKeyboard;
