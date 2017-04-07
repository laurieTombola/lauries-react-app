import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Product Management</h1>
          <h1>Please Login to continue</h1>
          <h1>P.S. username: john.doe</h1>
          <h1>password: password</h1>
      </div>
    );
  }
}

export default App;