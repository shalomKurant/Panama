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
        <div className={`player-state ${+ this.props.player.isActive ? " active" : ""}`}>
          <span className="player-name">{this.props.player.name}</span>
          <span className="player-cardWins"><span>מספר כרטיסים</span>&nbsp;{this.props.player.cardWins}</span>
          <span className="player-score"><span>מספר נצחונות כולל</span>&nbsp;{this.props.player.score}</span>
        </div>
    );
  }
}
export default PlayerState;