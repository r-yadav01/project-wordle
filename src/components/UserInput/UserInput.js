import React from 'react';

function UserInput({ addGuess, disabled }) {
  const [guess, setGuess] = React.useState('');

  return (
    <div>
      <form
        className='guess-input-wrapper'
        onSubmit={(e) => {
          e.preventDefault();
          let enteredGuess = e.target.elements.guessInput.value;

          if (enteredGuess.length !== 5) {
            window.alert('Please enter a 5 character input');
            return;
          }

          console.info({ guess });
          addGuess(guess);
          setGuess('');
        }}
      >
        <label htmlFor='guess-input'>Enter guess:</label>
        <input
          disabled={disabled}
          id='guess-input'
          type='text'
          required
          title='Must enter a 5 letter word'
          pattern='[A-Za-z]{5}'
          maxLength={5}
          name='guessInput'
          value={guess}
          onChange={(e) => {
            let guessedWord = e.target.value.toUpperCase();
            setGuess(guessedWord);
          }}
        />
      </form>
    </div>
  );
}

export default UserInput;
