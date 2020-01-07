import React, { Component } from 'react';
import './App.css';
// Must import components used in JSX
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import GameTimer from './components/GameTimer/GameTimer'
import NewGameButton from './components/NewGameButton/NewGameButton';

class App extends Component {
  constructor() {
    //super must be called before accessing 'this'
    super();
    //state is an object that holds information in it's properties
    this.state = {
      selColorIdx: 0
    };
  }
  render() {
    return (
      <div className="App">
        Selected color: {this.state.selColorIdx}
          <header className="App-header">React Mastermind</header>
            <div className='flex-h'>
              <GameBoard />
              <div>
                <ColorPicker />
                <GameTimer />
                <NewGameButton />
              </div>
            </div>
            <footer>footer</footer>
          </div>
        );
      }
}

export default App;
