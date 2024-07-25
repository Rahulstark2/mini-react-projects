import React, { useState } from 'react';
import NameInput from './components/NameInput';
import BirthdayCards from './components/BirthdayCards';

function App() {
  const [name, setName] = useState('');

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url('/src/assets/Valley-day.png')` }}>
      <div className="max-w-md w-full bg-custom bg-opacity-50 rounded-lg">
        {!name ? (
          <NameInput setName={setName} />
        ) : (
          <BirthdayCards name={name} />
        )}
      </div>
    </div>
  );
}

export default App;
