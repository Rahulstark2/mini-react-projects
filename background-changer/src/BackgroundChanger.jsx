import React, { useState } from 'react';

const ColorButton = ({ color, onClick, backgroundColor }) => (
  <button
    className={`w-full sm:w-128 px-4 py-2 rounded-lg text-sm font-semibold text-black shadow-md hover:opacity-80 transition-opacity`}
    style={{
      backgroundColor: backgroundColor || color.toLowerCase(),
      color: color === 'Black' ? 'white' : 'black'
    }}
    onClick={() => onClick(color.toLowerCase())}
  >
    {color}
  </button>
);

const BackgroundChanger = () => {
  const [bgColor, setBgColor] = useState('white');
  
  const colors = ['Red', 'Yellow', 'Black', 'Purple', 'Green', 'Blue', 'Default'];

  const handleColorChange = (color) => {
    if (color === 'default') {
      setBgColor('#ff5733');
    } else {
      setBgColor(color === 'default' ? 'white' : color);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-end items-center" style={{ backgroundColor: bgColor }}>
      <div className="bg-white p-4 rounded-lg shadow-lg flex flex-wrap justify-center gap-4 mb-0 sm:mb-8 mx-4 max-w-4xl w-full">
        {colors.map((color) => (
          <React.Fragment key={color}>
            {color !== 'Default' && <ColorButton color={color} onClick={handleColorChange} />}
            {color === 'Default' && <ColorButton color={color} onClick={handleColorChange} backgroundColor="#ff5733" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BackgroundChanger;