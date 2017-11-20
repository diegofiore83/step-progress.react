import React, { Component } from 'react';
import StepProgress from './components/StepProgress';
import logo from './logo.svg';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Step Progress Demo</h1>
        </header>
        <StepProgress />
      </div>
    );
  }
}

export default App;
