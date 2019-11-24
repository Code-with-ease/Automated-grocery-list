import React, { Component } from 'react'
import Recommend from './Recommend'
import Automate from './Automate'
import './css/Dashboard.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Router>
        
      
      <footer  className="App-footer">
        <div class="container navbar">
          <div class="item">
            <Link to="/automate" >
              <img src="https://image.flaticon.com/icons/svg/684/684831.svg" alt="Automate list"></img><span class="tag-font">Automate</span>
            </Link>
          </div>
          <div class="item">
            <Link to="/addList" >
              <img src="https://image.flaticon.com/icons/svg/684/684831.svg" alt="Add list"></img>
            </Link>
          </div>
          <div class="item">
            <Link to="/recommend" >
              <span class="tag-font">Recommend</span><img src="https://image.flaticon.com/icons/svg/684/684831.svg" alt="Recommend Item"/>
            </Link>
          </div>
        </div>
      </footer>
      </Router>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <div class="row">
            <div class="col">
                <a href="/Grocery-list-Frontend"><img src="https://img.icons8.com/android/24/000000/left.png" alt="Go Back"></img></a>
            </div>
            <div class="col">
            <a href="/Grocery-list-Frontend"><img src="https://img.icons8.com/material-outlined/48/000000/home--v2.png"  alt="Go to Home"></img></a>
            </div>
            <div class="col">
                <a href="/Grocery-list-Frontend"><img src="https://img.icons8.com/android/48/000000/logout-rounded-down.png" alt="Logout"></img></a>
            </div>
        </div>
    </div>
  );
}


export default class Dashboard extends Component {
  render() {
    return (
      <div>
        {/* <h1>Dashboard</h1> */}
        <Router>
          <header className="App-header">
          <Home/>
          </header>
          <main id="main">
          {/* <Link to="/automate">Automate</Link>
          <Link to="/recommend">Recommend</Link> */}
          <Switch>
            {/* <Route path="/automate" component={Automate}></Route>
            <Route path="/recommend" component={Recommend}></Route> */}
            {/* <Route path="/" component={Dashboard}></Route> */}
          </Switch>
          </main>
    
        </Router>
        <Navbar/>
      </div>
    )
  }
}
