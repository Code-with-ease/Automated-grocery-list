import React, { Component } from 'react';
class Navbar extends Component {
  render() {
    return (
        <nav class="nav justify-content-center">
          <a class="nav-link" href="/">Automate</a>
          <a class="nav-link" href="/">Camera</a>
          <a class="nav-link" href="/">Signout</a>
        </nav>
    );
  }
}

export default Navbar;