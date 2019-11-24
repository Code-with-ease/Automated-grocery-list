import React, {Component} from 'react';
import Card from '../Navbar/Components/Automate/Card/Card'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
export default class CardsList extends Component {

    constructor(props){
        super(props);
        this.moveRestUp = this.moveRestUp.bind(this);
        this.removeCard = this.removeCard.bind(this);
        this.resetTravel = this.resetTravel.bind(this);
        this.beginRemoveCard = this.beginRemoveCard.bind(this);
        this.state = {
            cards: []
        };
    }
    componentWillMount(){
        axios.get('https://smart-flask-api.herokuapp.com/ml/recommend')
        .then(res=>{
          console.log(res.data)
          const result = res.data;
          this.setState({cards:result})
        })
    }
    

    removeCard(card) {
        let index = this.state.cards.indexOf(card);

        if (index > -1) {
            return [...this.state.cards.slice(0, index), ...this.state.cards.slice(index+1)];
        }

    }

    beginRemoveCard(card) {
        let newCards = [...this.state.cards];
        newCards[newCards.indexOf(card)].removing = true;
        this.setState({cards: newCards});
    }

    moveRestUp(card, delta){
        let initialCardIndex = this.state.cards.indexOf(card);
        let newCards = [...this.state.cards];
        newCards.forEach((currCard, i)=>{
            if (i>initialCardIndex){
                currCard.travelTo = delta
            }
        });

        this.setState({cards: newCards});
    }

    resetTravel(){
        let newCards = this.removeCard(this.state.cards.find(card=>card.removing));

        if (newCards) {
            newCards.forEach(card=>delete card.travelTo);
            this.setState({cards: newCards});
        }
    }

    render() {
        return <div className="cards-list">
            {this.state.cards.map((card, i)=>{
                return <Card
                    key={card.key}
                    card={card}
                    moveRestUp={this.moveRestUp}
                    resetTravel={i === this.state.cards.length-1 ? this.resetTravel : null}
                    beginRemoveCard={this.beginRemoveCard}/>
            })}
        </div>
    }
}