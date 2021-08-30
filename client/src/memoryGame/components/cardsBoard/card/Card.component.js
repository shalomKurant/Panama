import "./Card.style.scss";
import * as React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: this.props.card
    }
  }
  render() {
      return (
        <div className="card" onClick={() => this.toggleCard()}>
            { this.props.card.isShown ?
            <div className="front-card">
              <span className="title">{this.state.card.title}</span>
              <div className="details">{this.state.card.details}</div>
            </div>
        : <div className="back-card"></div>}
        </div>
    );
  }


  toggleCard() {
    this.props.setGameState(this.state.card);
    const card = this.state.card;
    this.checkIfPossibleToRevealCard(card)
    card.isShown = !card.isShown;
    this.setState({card})
  }

  checkIfPossibleToRevealCard(card) {
    if (card.isShown) 
      return true;

      const gameState = this.props.getGameState();
  }
}
export default Card;