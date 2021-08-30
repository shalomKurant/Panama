import "./CardsBoard.style.scss";
import * as React from "react";
import Card from "./card/Card.component";

class CardsBoard extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
        cards: [
          {
            id: Math.random(),
            linkingId: "linkingId1",
            title: "title1",
            details: "details1",
            isShown: false
          },
          {
            id: Math.random(),
            linkingId: "linkingId1",
            title: "title1",
            details: "details1",
            isShown: false
          },
          {
            id: Math.random(),
            linkingId: "linkingId2",
            title: "title2",
            details: "details2",
            isShown: false
          },
          {
            id: Math.random(),
            linkingId: "linkingId2",
            title: "title2",
            details: "details2",
            isShown: false
          }
        ]
    }

    this.getGameState = this.getGameState.bind(this);
    this.setGameState = this.setGameState.bind(this);
  }

  render() {
      return (
        <div id="cards-board">
          {
            this.state.cards.map(card => {
              return (
                  <Card key={card.id} card={card} getGameState={this.getGameState} setGameState={this.setGameState}></Card>
              ) 
            })
          }
          <span>Cards Board</span>
        </div>
    );
  }

  getGameState() {
    const revealCards = this.getRevealCard();
    const getGameerId = "this"
    return revealCards;
  }

  setGameState(card) {
    console.log(card);
  }

  getRevealCard() {
    return this.state.cards.filter(card => card.isShown);
  }
}
export default CardsBoard;