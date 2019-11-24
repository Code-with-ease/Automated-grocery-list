import React, { Component } from 'react';
import './App.css';
import Structure from './components/Structure/Structure';

class App extends Component {
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("name","ayush");
  }
  render() {
    return (
      <div className="App">
        <Structure />
      </div>
    );
  }
}

export default App;
