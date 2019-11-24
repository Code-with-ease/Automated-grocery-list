import React, { Component } from 'react'
import Dashboard from './Dashboard'
import './css/LoginPage.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Signup = (props) => {
    return (
        <div>
            <h1>Signup</h1>
            <form action = "https://smart-flask-list.herokuapp.com/register" method="POST">
                    <input type="text" name = "username" placeholder="username" value={props.username} onChange = {props.handleChange} required></input>
                    <input type="password" name = "password" placeholder="password" value={props.password} onChange={props.handleChange} required></input>
                    <input type="password" name="password_confirmation" placeholder="password_confirmation" value={props.password_confirmation} onChange={props.handleChange} required></input>
                    <input type="submit" name="" id="" class="btn btn-primary" value="Register"></input>
            </form>
        </div>
            
    );
}

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <form action="https://smart-flask-api.herokuapp.com/login" method="POST">
                <input name="username" placeholder="username"></input><br/>
                <input type="password" name="password" placeholder="password"></input><br/>
                <input name="" id="" className="btn btn-primary" type="submit" value="Login"></input>
            </form>
        </div>
    );
}

// export default Login;


export default class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:"",
            password_confirmation:"",
            registration_errors:"",
            isLoggedIn:1
        }
        this.handleChange=this.handleChange.bind(this)
        // this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render() {
        if(!this.state.isLoggedIn){
        return (
            <div>
                {/* <h1>Hello</h1> */}
                <Router>
                    <Link to="/login">login</Link>
                    <Link to="/signup">signup</Link>
                    <main id="main">
                        <Switch>
                            <Route path="/login" component={Login}></Route>
                            <Route path="/signup" component={Signup}></Route>
                            <Route path="/" component={Dashboard}></Route>
                        </Switch>
                    </main> 
                </Router>   
            </div>
            )
        }
        else{
            return (<Dashboard/>)
        }
    }
}
