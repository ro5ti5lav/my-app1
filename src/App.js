import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setInputValue('');
  };

  return (
    <div className="container">
      <input
        className="input-field"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Введите текст"
      />
      <button className="button" onClick={handleButtonClick}>Очистить</button>
    </div>
  );
}

export default App;
