import "./PlayersState.style.scss";
import * as React from "react";
import {gameManager} from "../../services/GameManager.service";
import PlayerState from "./playerState/PlayerState.component";
import { eventBuilder } from "../../services/eventsManager/EventBuilder";
import { Events } from "../../services/eventsManager/Events";

class PlayersState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players: []
    }
    this.init();
  }
  render() {
      return (
        <div id="players-state">
          {
            this.state.players.map(player => {
              return (
              <div>
                <PlayerState player={player}></PlayerState>
              </div>)
            })
          }
        </div>
    );
  }

  componentDidMount() {
    eventBuilder.on(Events.playerAdded, (data) =>
      this.setState({ players: data.players })
    );
  }

  componentWillUnmount() {
    eventBuilder.remove(Events.playerAdded);
  }

  init() {
    this.componentDidMount();
    this.setState({players: gameManager.getPlayers()});
  }
}
export default PlayersState;