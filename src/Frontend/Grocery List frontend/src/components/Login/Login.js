import React, { Component } from 'react';
import '../Login/Login.css'
import Axios from 'axios';
// import axios;
class Login extends Component {
  state={
    result:[]
  }
  componentDidMount(){
    Axios.get('https://smart-flask-api.herokuapp.com/login')
      .then(res=>{
        console.log(res.data)
        const result = res.data;
        this.setState({result:result})
      })
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form action="https://smart-flask-api.herokuapp.com/login" method="POST">
          <input name="username" placeholder="username"></input><br/>
          <input type="password" name="password" placeholder="password"></input><br/>
          <input name="" id="" class="btn btn-primary" type="submit" value="Login"></input>
        </form>
      </div>
    );
  }
}

export default Login;

