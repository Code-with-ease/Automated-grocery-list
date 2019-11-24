import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import Add from './components/addcustomer';
import Navbar from './components/nav';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar/>
        </header>
        <Add/>
        <Customers />
      </div>
    );
  }
}

export default App;
