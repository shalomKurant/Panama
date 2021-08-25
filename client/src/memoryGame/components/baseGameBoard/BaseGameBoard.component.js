import "./BaseGameBoard.style.scss";
import * as React from "react";
import CardsBoard from "../cardsBoard/CardsBoard.component";

class BaseGameBoard extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
      return (
        <div id="base-board">
          <span>Base Board</span>
          <CardsBoard></CardsBoard>
        </div>
    );
  }
}
export default BaseGameBoard;