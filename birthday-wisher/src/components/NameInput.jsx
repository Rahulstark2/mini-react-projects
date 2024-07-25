import React, { useState } from 'react';

function NameInput({ setName }) {
  const [inputName, setInputName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(inputName);
  };

  return (
    <div className="bg-opacity-20 backdrop-blur-lg rounded-lg p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4 text-center mt-5">Enter Your Name</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          className="w-full p-2 mb-4 rounded mt-10"
          placeholder="Enter Your Name"
        />
        
        <button
          type="submit"
          className="w-1/5 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Done
        </button>
      </form>
    </div>
  );
}

export default NameInput;
