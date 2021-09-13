import "./BaseGameBoard.style.scss";
import * as React from "react";
import CardsBoard from "../cardsBoard/CardsBoard.component";
import GameManage from "../gameManage/GameManage.component";
import PlayersState from "../playersState/PlayersState.component";

class BaseGameBoard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
        <div id="base-board">
          <span>Base Board</span>
          <GameManage></GameManage>
          <PlayersState></PlayersState>
          <CardsBoard></CardsBoard>
        </div>
    );
  }
}
export default BaseGameBoard;