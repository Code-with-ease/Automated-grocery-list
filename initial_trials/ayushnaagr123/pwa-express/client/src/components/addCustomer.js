import React, { Component } from 'react';
import './customers.css';

class addCustomer extends Component {
  constructor() {
  }

  render() {
    return (
      <div>
        <form action='/api/addCustomer' method="POST">
            <input name="fname" placeholder="name"></input>
            <input name="lname" placeholder="name"></input>
            <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default addCustomer;
