import React from 'react';

function DeclareResult({ result, attempt, answer }) {
  let bannerType = 'sad';

  console.info({ result });

  if (result === 'win') {
    bannerType = 'happy';

    return (
      <div className={`banner ${bannerType}`}>
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {attempt} guesses</strong>.
        </p>
      </div>
    );
  } else
    return (
      <div className={`banner ${bannerType}`}>
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
}

export default DeclareResult;
