import React from 'react';
import Home from '../Home/home';
// import Camera from '../Navbar/Components/Camera/Camera'
import Automate from '../Navbar/Components/Automate/Automate'
import Recommend from '../Navbar/Components/Recommend/Recommend'
import Login from './auth/Login'
// import Input from '../Input/Input'
import './Structure.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Registration from './auth/Registration';
// import Login from '../Login/Login';

class Structure extends React.Component {
    render() {
        return (
            <div class="container-fluid" id="container-fluid">
                    <header  className="App-header">
                        <Home/>
                        <div class="item">
                            <span class="tag-font">Date</span>
                        </div>
                        <div class="item">
                                <span class="tag-font">Status</span>
                            </div>
                    </header>
                    <Router>
                    <main id="main">
                    <Login/>
                    <Registration/>
                        <Switch>
                            <Route path="/automate" component={Automate} ></Route>
                            {/* <Route path="/camera" component={Camera} >Camera</Route> 
                            <Route path="/camera" component={Day} ></Route> 
                            <Route path="/camera" component={Status} ></Route> */}
                            <Route path="/recommend" component={Recommend} ></Route> 
                        </Switch>
                    </main>
                    
                    <footer  className="App-footer">
                        
                        
                        <div class="container navbar">
                            <div class="item">
                            
                                <Link to="/automate" >
                                <img src="https://image.flaticon.com/icons/svg/684/684831.svg" alt="Automate list"></img><span class="tag-font">Automate</span>
                                
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
                {/* <Input/> */}
            </div>
        )}
    }

export default Structure;