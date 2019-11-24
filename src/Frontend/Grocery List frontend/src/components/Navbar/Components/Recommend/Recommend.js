import React, { Component } from 'react';
import Axios from 'axios';
import './Recommend.css'
// import './Card.css'
// import axios;
class Recommend extends Component {
  state={
    result:[]
  }
  componentDidMount(){
    Axios.get('https://smart-flask-api.herokuapp.com/ml/recommend')
      .then(res=>{
        console.log(res.data)
        const result = res.data;
        this.setState({result:result})
      })
  }
  render() {
    // const {reslut} = this.props;

        let travelTo = this.state.result.travelTo || 0, className = 'card';

        if (travelTo !== 0) {
            className += ' traveling';
        }
        console.log(this.state.result)
    return (
      <div>
      <div class="container-fluid">
        <h1>Recommend</h1>
        </div> 
        <div class="container-fluid">
        <div className="cards-list">
        <ul>
          {this.state.result.map(element=>
          <div className={className}
          style={{opacity: element.removing ? 0 : 1, transform:`translate3d(0,${travelTo}px,0)`}}
          id={element.key}>
           <div className='card-inner ripple'>
               <div className="information" key={element.key}>
                   <div className="value">{element.productid}</div>
                   <div className="value">{element.item_id}</div>
                   <div className="value">{element.item_name}</div>
                   <button onclick="addToList()">Tick</button>
               </div>
           </div>
           </div>
          )}
        </ul>
        </div>
        </div>
      </div>
      
    );
  }
}

export default Recommend;
