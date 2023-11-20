import React from 'react';
import Score from './Score'; // Importing the Score component

const Student = ({ name, bio, scores }) => {
  // component receives props from App.js
  return (
    <div className="student">
      <h2>{name}</h2> {/* Displaying the student's name */}
      <p>{bio}</p> {/* Displaying the student's bio */}
      {scores.map(score => (
        // Mapping over scores to render Score components for each
        <Score key={score.date} date={score.date} score={score.score} />
      ))}
    </div>
  );
};

export default Student;
