import "./CardsBoard.style.scss";
import * as React from "react";
import Card from "./card/Card.component";
import { GameManager } from "../../services/GameManager.service";

class CardsBoard extends React.Component {

  gameManager;
  constructor(props) {
    super(props);
    
    this.gameManager = new GameManager();
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
    this.state.cards = this.gameManager.getCards()
  }

  getGameState() {
    const revealCards = this.getRevealCard();
    const getGameerId = "this"
    return revealCards;
  }

  setGameState(card) {
    let allCards = this.state.cards;
    const shownCards = this.gameManager.getRevealCards();
    if (shownCards.length === 1) {
      if (card.linkingId === shownCards[0].linkingId) {
        card.isShown = true;
        this.toggleDisableCards(allCards, true);
        setTimeout(() => {
          allCards = allCards.filter(c => !c.isShown);
          allCards.forEach(c => c.isShown = false);
          this.toggleDisableCards(allCards, false);
        }, 3000)
      } else {
        card.isShown = true;
      }
    } else {
      card.isShown = true;
    }
    this.checkWinCards(card);

  }

  checkWinCards(currentCard) {
    const shownCards = this.getRevealCard();
    if (shownCards.length === 2) {
      const isWinCard = shownCards.filter(card => card.linkingId === currentCard.linkingId);
      if (isWinCard.length === 2) {
        this.setState({cards: this.state.cards.filter(card => !card.isShown)});
      } else {
        shownCards.forEach(c => c.isShown = false);
      }
    }
  }
  
  getRevealCard() {
    return this.state.cards.filter(card => card.isShown);
  }

  toggleDisableCards(cards, disabled) {
    cards.map(card => card.disabled = disabled);
  }
}
export default CardsBoard;