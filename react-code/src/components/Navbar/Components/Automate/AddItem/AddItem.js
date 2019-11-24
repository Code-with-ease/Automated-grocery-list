import React, { Component } from 'react';
import Axios from 'axios';
// import CardList from '../../../CardList/CardList'
// import axios;

const Card = ({result}) => {
    return (<div className='card-inner ripple'>
                    <div className="information">
                        <div className="value">{result.key}</div>
                        <div className="value">{card.name}</div>
                        <div className="value">{card.value}</div>
                        <button onclick="handleClick">Edit</button>
                        <button onclick="handleClick">Tick</button>
                        
                        {/* <img src={card.imageSrc} className='card-image' alt='some alt'/>
                        <div className="value">{card.value}</div>
                        <div className="label">{card.label}</div> */}
                    </div>
                </div>)
}

const CardList = ({result}) => {
    return <div className="cards-list">
            {this.state.cards.map((card, i)=>{
                
            })}
        </div>
}

class AddItem extends Component {
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
        <h1>new Item</h1>
        <form >
            <input name="item_name"></input>
            <input name="quantity"></input>
            <button>Add</button>
        </form>
        <CardList/>
      </div>
    );
  }
}

export default AddItem;
