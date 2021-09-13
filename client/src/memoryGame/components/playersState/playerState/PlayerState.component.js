import "./PlayerState.style.scss";
import * as React from "react";

class PlayerState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      player: this.props.player
    }
  }

  render() {
      return (
        <div className="player-state">
          <span>{this.props.player.name}</span>
          <span>{this.props.player.cardWins}</span>
          <span>{this.props.player.isActive}</span>
          <span>{this.props.player.score}</span>
          <span>{this.props.player.id}</span>
        </div>
    );
  }
}
export default PlayerState;