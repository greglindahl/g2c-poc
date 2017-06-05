import React, { Component } from 'react';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Dashboard />
      </div>
    );
  }
}

export default App;
