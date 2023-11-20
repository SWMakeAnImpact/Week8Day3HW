import React from 'react';

const Score = ({ date, score }) => {
  // This component receives score data as props
  return (
    <div className="score">
      <p>Date: {date}, Score: {score}</p> {/* Displaying the score and date */}
    </div>
  );
};

export default Score;
