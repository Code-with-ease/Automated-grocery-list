import React, { Component } from 'react';
// import axios from "axios";
export class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:"",
            password_confirmation:"",
            registration_errors:""
        }
        this.handleChange=this.handleChange.bind(this)
        // this.handleSubmit=this.handleSubmit.bind(this)
    }
    
    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render() {
        return (
            <div>
                <form action = "https://smart-flask-list.herokuapp.com/register" method="POST">
                    <input type="text" name = "username" placeholder="username" value={this.state.username} onChange = {this.handleChange} required></input>
                    <input type="password" name = "password" placeholder="password" value={this.state.password} onChange={this.handleChange} required></input>
                    <input type="password" name="password_confirmation" placeholder="password_confirmation" value={this.state.password_confirmation} onChange={this.handleChange} required></input>
                    <input type="submit" name="" id="" class="btn btn-primary" value="Register"></input>
                </form>
            </div>
        );
    }
}

export default Registration;
