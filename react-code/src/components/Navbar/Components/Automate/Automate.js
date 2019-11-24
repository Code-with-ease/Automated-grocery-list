import React, { Component } from 'react';
import Axios from 'axios';
import CardList from '../../../CardList/CardList'
// import axios;
class Automate extends Component {
  constructor(props){
    super(props);
    this.state={
    result:[]
  }

  this.additem = this.additem.bind(this)
  }
  componentDidMount(){
    Axios.get('https://smart-flask-api.herokuapp.com/ml/automate')
      .then(res=>{
        console.log(res.data)
        const result = res.data;
        this.setState({result:result})
      })
  }
  additem(){
    // this.state.result.push({"item_id":"item"+this.state.result.length,"item_name":name,"quantity":quantity})
    var result = this.state.result
    this.setState({
      result: result.concat({
        "item_id":"item"+this.state.result.length,
        "item_name":document.getElementById("item_name").value,
        "quantity": document.getElementById("quantity").value})
      // lists:this.state.result.concat()
      })
      console.log(this.state.result)
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
        <form >
            <input name="item_name" id="item_name" placeholder="add item name"></input>
            <input name="quantity" id="quantity" placeholder="quantity"></input>
            <a onClick={this.additem.bind()
            }>Add</a>
        </form>
        <CardList result={this.state.result}/>
        
      </div>
    );
  }
}

export default Automate;

