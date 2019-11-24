import React, { Component } from 'react';
import Axios from 'axios';
import CardList from '../../../CardList/CardList'
// import axios;
class Recommend extends Component {
  state={
    result:[]
  }
  componentDidMount(){
    Axios.get('https://smart-flask-api.herokuapp.com/ml/automate')
      .then(res=>{
        console.log(res.data)
        const result = res.data;
        this.setState({result:result})
      })
  }
  render() {
    return (
      <div>
        <h1>Automate</h1>
        {/* <form action="https://smart-flask-api.herokuapp.com/ml/automate" method="GET">
          <input name="itemid" placeholder="item id"></input>
          <input name="" id="" class="btn btn-primary" type="submit" value="Add"></input>
        </form> */}
        {/* <ul>
          {this.state.result.map(element=>
            <li key={element.key}>{element.key}</li>
          )}
        </ul> */}
        <CardList/>
      </div>
    );
  }
}

export default Recommend;

