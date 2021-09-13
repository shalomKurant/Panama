import "./GameManage.style.scss";
import * as React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {gameManager} from "../../services/GameManager.service";

class GameManage extends React.Component {

  MAX_PALYERS_IN_GAME = 5;
  constructor(props) {
    super(props);
      this.state = { 
        players: [],
        errorInput: null,
        playerToAdd: ""
      }

    this.init()
  }

  render() {
      return (
        <div id="game-manage">
          <div className="players-list">
            {this.state.players.map(player => {
              return (
                <div>
                  <div key={player.name}>{player.name}</div>
                  <DeleteOutlineIcon onClick={this.removePalyer.bind(this, player.name)}/>
                </div>
              )
            })}
          </div>
          <div className="add-player-options">
          <TextField 
            id="standard-basic" 
            label="הוספת שם שחקן"
            helperText= {this.state.errorInput}
            onChange={this.onChange.bind(this)}
            value={this.state.playerToAdd}
          />
          <Button className="action-buttons" disabled={false} onClick={() => this.addPlayer()}>הוספת שחקן</Button>
          </div>
        </div>
    );
  }

  init() {
    this.getPlayers();
  }

  addPlayer() {
    if (this.notAllowdToAddPlayer()) return;

    gameManager.setPalyer(this.state.playerToAdd);
    this.setState({playerToAdd: ""})
    this.getPlayers();
  }

  removePalyer(playerName) {
    gameManager.removePalyer(playerName);
    this.getPlayers();
  }

  getPlayers() {
    this.setState({players: gameManager.getPlayers()});
  }

  onChange(event) {
    this.setState({playerToAdd: event.target.value})
    if (this.state.players.some(player => player.name === event.target.value)) {
      this.setState({ errorInput: 'שם קיים במשחק'});
    } else if (this.state.players.length >= this.MAX_PALYERS_IN_GAME) {
      this.setState({ errorInput: `${this.MAX_PALYERS_IN_GAME} מקסימום שחקנים`});
    } else {
      this.setState({ errorInput: null});
    }
  }

  notAllowdToAddPlayer() {
    return this.state.errorInput !== null || 
      !this.state.playerToAdd || 
      this.state.players.length >= this.MAX_PALYERS_IN_GAME;
  }
}
export default GameManage;