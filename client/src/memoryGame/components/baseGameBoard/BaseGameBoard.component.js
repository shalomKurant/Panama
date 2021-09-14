import "./BaseGameBoard.style.scss";
import * as React from "react";
import CardsBoard from "../cardsBoard/CardsBoard.component";
import GameManage from "../gameManage/GameManage.component";
import PlayersState from "../playersState/PlayersState.component";
import { gameManager } from "../../services/GameManager.service";

class BaseGameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGameOn: false
    }
    this.startGame = this.startGame.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }
  render() {
      return (
        <div id="base-board">
          { this.state.isGameOn ?
            <CardsBoard></CardsBoard> :
            <GameManage startGame={this.startGame}></GameManage>
          }
          <PlayersState resetGame={this.resetGame}></PlayersState>
        </div>
    );
  }

  startGame() {
    this.setState({isGameOn: true})
  }

  resetGame() {
    this.setState({isGameOn: false});
    gameManager.resetGame();
  };
}
export default BaseGameBoard;