import "./CardsBoard.style.scss";
import * as React from "react";
import Card from "./card/Card.component";
import {gameManager} from "../../services/GameManager.service";

class CardsBoard extends React.Component {

  timeOutToHideDisplayedCards = 2000;
  constructor(props) {
    super(props);
    
    this.state = {cards: []}

    this.getGameState = this.getGameState.bind(this);
    this.setGameState = this.setGameState.bind(this);
    this.initialization();
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

  initialization() {
    this.initCards();
  }

  initCards() {
    this.state.cards = gameManager.getCards()
  }

  getGameState() {
    const revealCards = this.getRevealCard();
    const getGameerId = "this"
    return revealCards;
  }

  setGameState(card) {
    const thisCard = this.state.cards.find(c => c.id === card.id);
    thisCard.isShown = true;
    const shownCards = this.getRevealCard();
    if (shownCards.length === 2) {
      this.toggleDisableCards(this.state.cards, true);
      this.checkWinCards(card);
    }
  }

  checkWinCards(currentCard) {
    const shownCards = this.getRevealCard();
    if (shownCards.length === 2) {
      const isWinCard = shownCards.filter(card => card.linkingId === currentCard.linkingId);
      if (isWinCard.length === 2) {
        this.toggleDisableCards(this.state.cards, false);
        this.setState({cards: this.state.cards.filter(card => !card.isShown)});
      } else {
        setTimeout(() => {
          shownCards.forEach(c => c.isShown = false);
          this.toggleDisableCards(this.state.cards, false);
          this.setState({cards: this.state.cards})
        }, this.timeOutToHideDisplayedCards)
      }
    }
  }
  
  getRevealCard() {
    return this.state.cards.filter(card => card.isShown);
  }

  toggleDisableCards(cards, disabled) {
    cards.forEach(card => card.disabled = disabled);
  }
}
export default CardsBoard;