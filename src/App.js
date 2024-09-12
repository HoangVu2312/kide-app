import React, { useState } from 'react';
import './App.css';
import Sheet from './Sheet.js';  // Import the new Sheet component

function App() {
  const [isSheetVisible, setIsSheetVisible] = useState(false);  // State to control the sheet visibility

  const handleButtonClick = () => {
    setIsSheetVisible(true);  // Show the sheet when the button is clicked
  };

  const handleCloseSheet = () => {
    setIsSheetVisible(false);  // Hide the sheet when the close button in the sheet is clicked
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Frank App
        </p>
        <button onClick={handleButtonClick} className="App-button">
          Show card
        </button>
        {/* Sheet component */}
        <Sheet isVisible={isSheetVisible} onClose={handleCloseSheet} />
      </header>
    </div>
  );
}

export default App;

