import "./CardsBoard.style.scss";
import * as React from "react";
import Card from "./card/Card.component";
import {gameManager} from "../../services/GameManager.service";
import { Events } from "../../services/eventsManager/Events";
import { eventBuilder } from "../../services/eventsManager/EventBuilder";

class CardsBoard extends React.Component {

  TIMEOUT_TO_HIDE_DISPLAYED_CARDS = 2000;
  constructor(props) {
    super(props);
    
    this.state = {cards: []}

    this.setGameState = this.setGameState.bind(this);
    this.initialization();
  }

  render() {
      return (
        <div id="cards-board">
          {
            this.state.cards.map(card => {
              return (
                  <Card key={Math.random() + ""} card={card} setGameState={this.setGameState}></Card>
              ) 
            })
          }
        </div>
    );
  }

  initialization() {
    this.initCards();
  }

  initCards() {
    this.state.cards = gameManager.getCards()
  }

  componentDidMount() {
    eventBuilder.on(Events.refreshCards, (data) =>
      this.setState({ cards: data.cards })
    );
  }

  componentWillUnmount() {
    eventBuilder.remove(Events.refreshCards);
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
        const activePlayer = gameManager.getActivePlayer();
        gameManager.addPlayerCardWin(activePlayer.name);
        if (this.state.cards.length === 2) {
          gameManager.addPlayerTotalScore(activePlayer.name);
        }
      } else {
        setTimeout(() => {
          shownCards.forEach(c => c.isShown = false);
          this.toggleDisableCards(this.state.cards, false);
          this.setState({cards: this.state.cards});
          const nextPlayer = gameManager.getNextPlayerTurn();
          gameManager.setPlayerTurn(nextPlayer.name);
        }, this.TIMEOUT_TO_HIDE_DISPLAYED_CARDS);
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