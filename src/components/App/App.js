import React, { Component } from 'react';
import './App.css';
import Optionalpower from '../OptionalPower/Optionalpower';
import FixAge from '../FixAge.js/FixAge'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Optionalpower />
        <FixAge />
        </header>
      </div>
    );
  }
}

export default App;
