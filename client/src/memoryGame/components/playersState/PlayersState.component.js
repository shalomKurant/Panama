import "./PlayersState.style.scss";
import * as React from "react";
import {gameManager} from "../../services/GameManager.service";
import PlayerState from "./playerState/PlayerState.component";
import { eventBuilder } from "../../services/eventsManager/EventBuilder";
import { Events } from "../../services/eventsManager/Events";
import { Button } from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import RefreshIcon from '@material-ui/icons/Refresh';

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
          { this.state.players.length > 0 && gameManager.isGameOn() ? 
            <div className="navigation-buttons">
              <Button className="exit-game-button" onClick={() => this.exit()}><span>יציאה</span><ExitToAppIcon/></Button>
              <Button className="refresh-board-button" onClick={() => gameManager.refreshCardsEvetn()}><span>לוח חדש</span><RefreshIcon/></Button>
            </div>
          : <></>}
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

  init() {
    this.setState({players: gameManager.getPlayers()});
  }

  componentDidMount() {
    eventBuilder.on(Events.playerAdded, (data) =>
      this.setState({ players: data.players })
    );
  }

  componentWillUnmount() {
    eventBuilder.remove(Events.playerAdded);
  }

  exit() {
    this.props.resetGame();
  }
}
export default PlayersState;