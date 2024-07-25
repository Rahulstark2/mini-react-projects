import React, { useState } from 'react';

const ParaGenerator = () => {
  const [wordCount, setWordCount] = useState('');
  const [paragraph, setParagraph] = useState('');

  const generateParagraph = () => {
    const words = [
      'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
      'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
      'magna', 'aliqua'
    ];
    
    let result = '';
    for (let i = 0; i < parseInt(wordCount); i++) {
      result += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    setParagraph(result.trim());
  };

  return (
    <>
      <h1 className="text-3xl font-bold mt-20 text-center">Para Generator</h1>

      <div className="flex space-x-4 mt-10 justify-center">
      <input
  type="number"
  value={wordCount}
  onChange={(e) => setWordCount(e.target.value)}
  placeholder="Enter Number of Words"
  className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
/>



        <button
          onClick={generateParagraph}
          className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Generate
        </button>
      </div>
        {paragraph && (
    <div className="flex justify-center mt-4">
        <p className="p-4 bg-gray-100 w-3/4 sm:w-2/3 md:w-3/5 rounded-md  mx-auto ">{paragraph}</p>
    </div>
    )}

    </>
  );
};

export default ParaGenerator;
