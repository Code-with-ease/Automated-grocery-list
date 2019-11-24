import React, { Component } from 'react';
import Axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
// import CardList from '../../../CardList/CardList'
// import axios;

// import React from 'react';

// import React from 'react';

// const Card = () => {
//   const {card} = this.props;

//         let travelTo = card.travelTo || 0, className = 'card';

//         if (travelTo !== 0) {
//             className += ' traveling';
//         }
//   return (
//     <div className={className}
//          style={{opacity: card.removing ? 0 : 1, transform:`translate3d(0,${travelTo}px,0)`}}
//          ref={ref => this.cardRef = ref}
//          onClick={this.onCardClick.bind(this)}
//          id={card.id}>
//         <div className='card-inner ripple'>
//             <div className="information">
//                 <div className="value">{card.key}</div>
//                 <div className="value">{card.name}</div>
//                 <div className="value">{card.value}</div>
//                 <button onclick="handleClick">Edit</button>
//                 <button onclick="handleClick">Tick</button>
                
//                 {/* <img src={card.imageSrc} className='card-image' alt='some alt'/>
//                 <div className="value">{card.value}</div>
//                 <div className="label">{card.label}</div> */}
//             </div>
//         </div>
//     </div>
// )
// }

// export default Card;


// const CardList = () => {
//   return <div className="cards-list">
//             {this.state.cards.map((card, i)=>{
//                 return <Card
//                     key={card.key}
//                     card={card}
//                     moveRestUp={this.moveRestUp}
//                     resetTravel={i === this.state.cards.length-1 ? this.resetTravel : null}
//                     beginRemoveCard={this.beginRemoveCard}/>
//             })}
//         </div>
// }

// export default CardList;


class Automate extends Component {
  constructor(props){
    super(props);
    this.state={
    result:[]
  }

  // this.additem = this.additem.bind(this)
  }
  componentDidMount(){
    Axios.get('https://smart-flask-api.herokuapp.com/ml/automate')
      .then(res=>{
        console.log(res.data)
        const result = res.data;
        this.setState({result:result})
      })
  }
  // additem(){
  //   // this.state.result.push({"item_id":"item"+this.state.result.length,"item_name":name,"quantity":quantity})
  //   var result = this.state.result
  //   this.setState({
  //     result: result.concat({
  //       "item_id":"item"+this.state.result.length,
  //       "item_name":document.getElementById("item_name").value,
  //       "quantity": document.getElementById("quantity").value})
  //     // lists:this.state.result.concat()
  //     })
  //     console.log(this.state.result)
  // }
  render() {
    let itemCards = this.state.result.map(item => {
      return (
        <Col sm="4">
          <itemCard key={item.id} removeItem={this.removeItem.bind(this)} item={item} />
        </Col>
      )
    })
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
        {/* <form >
            <input name="item_name" id="item_name" placeholder="add item name"></input>
            <input name="quantity" id="quantity" placeholder="quantity"></input>
            <a onClick={this.additem.bind()}>Add</a>
        </form> */}
        {/* <CardList card={this.state.result}/> */}
        <Container fluid>
        <Row>
          {itemCards}
        </Row>
      </Container>
        
      </div>
    );
  }
}

export default Automate;

