import React, { Component } from 'react';
import './App.css';
// Must import components used in JSX
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">React Mastermind</header>
        <GameBoard />
        <ColorPicker />
      </div>
    );
  }
}

export default App;
