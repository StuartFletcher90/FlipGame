import React, {Component} from 'react';
import styled from "styled-components";
import Card from "./Cards/Card";
import './App.css';

import bombomb from './assets/img/bombomb.jpg';
import theGoodDoge from "./assets/img/doge.jpg";
import evilKerm from "./assets/img/evilK.jpeg";
import goodGuyFry from "./assets/img/Fry.jpg";
import hvyCat from "./assets/img/Hcat.jpg";
import isThis from "./assets/img/isThis.jpg";
import mySponge from "./assets/img/Msponge.jpg";
import spiderMens from "./assets/img/spidermens.jpg";
import surprisedPika from "./assets/img/surprisedP.png";
import nicolasCage from "./assets/img/nicolasCage.jpg";
import aliens from "./assets/img/Aliens.jpg";
import suddenClarity from "./assets/img/suddenClarity.jpg";
import willyWonka from "./assets/img/willyWonka.png";
import BJtosser from "./assets/img/BJJohnson.jpg";
import gRamsey from "./assets/img/Gramsey.jpg";
import miniReeves from "./assets/img/miniReeves.png";
import stoned from "./assets/img/stonedGuy.jpg";

import './App.css';

class App extends Component {
  state = {
    cards: [
      {id: 0, flipped: false, image: bombomb},
      {id: 1, flipped: false, image: theGoodDoge},
      {id: 2, flipped: false, image: evilKerm},
      {id: 3, flipped: false, image: goodGuyFry},
      {id: 4, flipped: false, image: hvyCat},
      {id: 5, flipped: false, image: isThis},
      {id: 6, flipped: false, image: mySponge},
      {id: 7, flipped: false, image: spiderMens},
      {id: 8, flipped: false, image: surprisedPika},
      {id: 9, flipped: false, image: theGoodDoge},
      {id: 10, flipped: false, image: evilKerm},
      {id: 11, flipped: false, image: goodGuyFry},
      {id: 12, flipped: false, image: hvyCat},
      {id: 13, flipped: false, image: isThis},
      {id: 14, flipped: false, image: mySponge},
      {id: 15, flipped: false, image: spiderMens},
      {id: 16, flipped: false, image: surprisedPika},
    ],
    alert: "Match the cards scrub, get bombomb'd... you = f@#%ed",
    CardImage1: null,
    CardImage2: null,
    isLoading: true
  };

  ogCards =  [
    {id: 0, flipped: false, image: bombomb},
    {id: 1, flipped: false, image: theGoodDoge},
    {id: 2, flipped: false, image: evilKerm},
    {id: 3, flipped: false, image: goodGuyFry},
    {id: 4, flipped: false, image: hvyCat},
    {id: 5, flipped: false, image: isThis},
    {id: 6, flipped: false, image: mySponge},
    {id: 7, flipped: false, image: spiderMens},
    {id: 8, flipped: false, image: surprisedPika},
    {id: 9, flipped: false, image: theGoodDoge},
    {id: 10, flipped: false, image: evilKerm},
    {id: 11, flipped: false, image: goodGuyFry},
    {id: 12, flipped: false, image: hvyCat},
    {id: 13, flipped: false, image: isThis},
    {id: 14, flipped: false, image: mySponge},
    {id: 15, flipped: false, image: spiderMens},
    {id: 16, flipped: false, image: surprisedPika},
  ]

  newCardsMedium = [ 
    {id: 17, flipped: false, image: nicolasCage},
    {id: 0, flipped: false, image: bombomb},
    {id: 18, flipped: false, image: nicolasCage},
    {id: 19, flipped: false, image: aliens},
    {id: 0, flipped: false, image: bombomb},
    {id: 20, flipped: false, image: aliens},
    {id: 21, flipped: false, image: suddenClarity},
    {id: 22, flipped: false, image: suddenClarity},
    {id: 23, flipped: false, image: willyWonka},
    {id: 24, flipped: false, image: willyWonka}
  ];

  newcardsHard = [
    {id: 0, flipped: false, image: bombomb},
    {id: 0, flipped: false, image: bombomb},
    {id: 0, flipped: false, image: bombomb},
    {id: 0, flipped: false, image: bombomb},
    {id:24, flipped: false, image: BJtosser},
    {id:25, flipped: false, image: BJtosser},
    {id:26, flipped: false, image: gRamsey},
    {id:27, flipped: false, image: gRamsey},
    {id:28, flipped: false, image: miniReeves},
    {id:29, flipped: false, image: miniReeves},
    {id:30, flipped: false, image: stoned},
    {id:31, flipped: false, image: stoned},
  ]
  
    //? randomiser
    componentDidMount() {
      let newCardDeck = this.state.cards
      newCardDeck = this.shuffle(newCardDeck)
      this.setState({ cards: newCardDeck, isLoading: false})
    }

      cardFlipHandler = (index) => {
        
        if(this.state.CardImage1 == null) {
          let newCards = this.state.cards;
          newCards[index].flipped =true;
          this.setState({cards: newCards, CardImage1: index});
        } else if (this.state.CardImage2 ==null) {
          let newCards = this.state.cards;
          newCards[index].flipped = true;
          this.setState({cards: newCards, CardImage2: index});

        setTimeout(() => {

        if (this.state.cards[this.state.CardImage1].image === this.state.cards[this.state.CardImage2].image)
          {
            let newCards = this.state.cards;
            this.setState({cards: newCards, CardImage1: null, CardImage2: null})
          } else {
            let newCards = this.state.cards;
            newCards[this.state.CardImage1].flipped = false;
            newCards[this.state.CardImage2].flipped = false;
            this.setState({cards: newCards, CardImage1: null, CardImage2: null});
          }
            //? *** Win Conditions & bombomb fail condition ***
          if (this.state.cards[index].image === bombomb) {
            console.log("you've found the bomb");
          this.setState({CardImage1: null})
            this.restart();
        }
          }, 1500);
        }

        if ( this.state.cards.every(card => {
          return card.flipped === true;
        })) {
          this.setState({ alert: "You win bro, you f#!•@ng nerd"})
        }
      }

      //? Diffucultly

      BasicDiff = () => {
        let newArray = [...this.ogCards]
        newArray = this.shuffle(newArray)
        this.setState({cards: newArray});
      }

      MediumDiff = () => {
       let newArray = [...this.ogCards, ...this.newCardsMedium]
       console.log(newArray)
       newArray = this.shuffle(newArray)
       this.setState({cards: newArray});
    }
      HardDiff = () => {
        let newArray = [...this.ogCards, ...this.newCardsMedium, ...this.newcardsHard]
        newArray = this.shuffle(newArray)
        this.setState({cards: newArray});
      }

    //?  Hard restart

    restart = () => {
      let newCards = this.state.cards;
      for (let i = 0; i < newCards.length; i++) {
        setTimeout(() => {
          newCards[i].flipped = false;
          this.setState({
            cards: newCards
          });
        }, 500);
      }
    };
    
    //? card shuffle function

    shuffle = cardDeck => {
      for (let i = cardDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        let temp = cardDeck[i]
        cardDeck[i] = cardDeck[j]
        cardDeck[j] = temp
      }
    
      return cardDeck
    }
  render() {
    return (
      <Mydiv>
        <Mydiv2>
          <h1>The fantastic meme game, knuckles knows Dae Wae</h1>
          <h3>{this.state.alert}</h3>
            <MyDiv3>
              <Button className="btn" onClick={this.restart}>Reset</Button>
              <Ez className="btn" onClick={this.BasicDiff}>Basic Mode</Ez>
              <Medium className="btn" onClick={this.MediumDiff}>Medium</Medium>
              <Hard className="btn" onClick={this.HardDiff}>Hard</Hard>
            </MyDiv3>
        </Mydiv2>
        <Gameboard>
        {this.state.cards.map((card, index) => {
          return(
            <Card key={index} image={card.image} index={index} flipped={card.flipped} click={this.cardFlipHandler}/>
          );
        })}
        </Gameboard>
      </Mydiv>
    )
  }
}


export default App;


//! Styled Components & Comments

const Mydiv = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
margin: 0;
`;

const Mydiv2 = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
margin: 0;
`;

const MyDiv3 = styled.div`
width: 100vw;
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
`

const Button = styled.button`
background-color: #ff9ff3;
border-radius: 5px;
height: 40px;
width: 90px;
`;

const Ez = styled.button`
background-color: #2ecc71;
border-radius: 5px;
height: 40px;
width: 90px;
`;

const Medium = styled.button`
background-color: #48dbfb;
border-radius: 5px;
height: 40px;
width: 100px;
`;

const Hard = styled.button`
background-color: #ee5253;
border-radius: 5px;
height: 40px;
width: 100px;
`;

const Gameboard = styled.div`
max-width: 1200px;
display: flex;
justify-content: center;
flex-wrap: wrap;
`;