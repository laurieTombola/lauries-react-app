import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to my Laurie's React App</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </div>

      </div>
    );
  }
}

export default App;
