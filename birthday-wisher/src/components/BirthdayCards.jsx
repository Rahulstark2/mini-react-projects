import React from 'react';

const wishes = [
  "Wishing you a day filled with happiness and a year filled with joy!",
  "Hope your special day brings you all that your heart desires!",
  "May your birthday be the start of a year filled with good luck, good health, and much happiness."
];

function BirthdayCards({ name }) {
  return (
    <div className="space-y-4">
      {wishes.map((wish, index) => (
        <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Happy Birthday, {name}!</h2>
          <p>{wish}</p>
        </div>
      ))}
    </div>
  );
}

export default BirthdayCards;