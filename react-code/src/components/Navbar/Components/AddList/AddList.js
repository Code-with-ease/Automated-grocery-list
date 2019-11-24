import React, { Component } from 'react';
import Axios from 'axios';
// import CardList from '../../../CardList/CardList'
// import axios;
class AddList extends Component {
  state={
    itemList:[]
  }
//   componentDidMount(){
//     Axios.get('https://smart-flask-api.herokuapp.com/ml/automate')
//       .then(res=>{
//         console.log(res.data)
//         const result = res.data;
//         this.setState({result:result})
//       })
//   }
  render() {
    return (
      <div>
        <h1>Create List</h1>
        <form action="https://smart-flask-api.herokuapp.com/login" method="POST">
            <input name="item_name"></input>
            <input name="quantity"></input>
            <button onClick="addItem">Add</button>
            <button type="submit">Save</button>
        </form>
        {/* <CardList/> */}
      </div>
    );
  }
}

export default AddList;
