import React from 'react';
import './App.css';
import Wheel from './Wheel';
import Screen from './Screen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Screen />
        <Wheel />
      </header>
    </div>
  );
}

export default App;
