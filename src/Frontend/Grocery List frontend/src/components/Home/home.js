import React, { Component } from 'react';
class Home extends Component {
  render() {
    return (
      <div class="container-fluid Home">
        <div class="row">
            <div class="col">
                <a href="/"><img src="https://img.icons8.com/android/24/000000/left.png" alt="Go Back"></img></a>
            </div>
            <div class="col">
            <a href="/"><img src="https://img.icons8.com/material-outlined/48/000000/home--v2.png"  alt="Go to Home"></img></a>
            </div>
            <div class="col">
                <a href="/"><img src="https://img.icons8.com/android/48/000000/logout-rounded-down.png" alt="Logout"></img></a>
            </div>
        </div>
        </div>
    );
  }
}

export default Home;
