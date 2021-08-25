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
            title: "title",
            details: "details",
            isShown: false
          },
          {
            id: Math.random(),
            title: "title",
            details: "details",
            isShown: false
          }
        ]
    }

    this.getGameState = this.getGameState.bind();
  }

  render() {
      return (
        <div id="cards-board">
          {
            this.state.cards.map(card => {
              return (
                  <Card key={card.id} card={card} getGameState={this.getGameState}></Card>
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

  getRevealCard() {
    return this.state.cards.filter(card => card.isShown);
  }
}
export default CardsBoard;