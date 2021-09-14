import "./GameManage.style.scss";
import * as React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {gameManager} from "../../services/GameManager.service";
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Tooltip from '@material-ui/core/Tooltip';
import { Constants } from "../../services/Constants";
import GeneralDialog from "../dialog/dialog.component";

class GameManage extends React.Component {
  constructor(props) {
    super(props);
      this.state = { 
        players: [],
        errorInput: null,
        errorNumberInput: null,
        playerToAdd: "",
        cardsAmount: 0
      }

    this.init()
  }

  render() {
      return (
        <div id="game-manage">
          <div className="players-list">
            {this.state.players.map(player => {
              return (
                <div className="player-item">
                  <div className="name" key={player.name}>{player.name}</div>
                  <DeleteOutlineIcon className="delete-icon" onClick={this.removePalyer.bind(this, player.name)}/>
                </div>
              )
            })}
          </div>
          <div className="add-player-options">
          <TextField 
            id="standard-basic" 
            label="הזן שם"
            helperText= {this.state.errorInput}
            onChange={this.onChange.bind(this)}
            value={this.state.playerToAdd}
            size="small"
            autoFocus
          />
          <TextField
            className="number-cards-input"
            id="standard-number"
            label="מספר כרטיסים"
            type="number"
            size="small"
            onChange={this.checkCardsAmountInput.bind(this)}
            helperText= {this.state.errorNumberInput}
            InputLabelProps={{
              shrink: true
            }}
          />
          <Button className="add-player-button" disabled={false} onClick={() => this.addPlayer()}>הוספת שחקן</Button>
          <Button className="start-game-button" disabled={this.state.players.length <= 0} onClick={() => this.startGame()}><span>התחל משחק</span><PlayCircleOutlineIcon/></Button>
          <Tooltip title="מחיקת נתונים" arrow>
            <Button className="reset-game-button" onClick={() => this.resetGame()}><RotateLeftIcon/></Button>
          </Tooltip>
          </div>
          <GeneralDialog button={<div>BUTTON</div>} title={"TITLE"} description={"description"} onClose={() => {}}></GeneralDialog>
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

  startGame() {
    gameManager.startGame(true, this.state.cardsAmount);
    this.props.startGame();
    gameManager.setPlayerTurn();
  }

  resetGame() {
    this.setState({players: []});
    this.setState({playerToAdd: ""})
    gameManager.resetGame();
  }

  getPlayers() {
    this.setState({players: gameManager.getPlayers()});
  }

  onChange(event) {
    this.setState({playerToAdd: event.target.value})
    if (this.state.players.some(player => player.name === event.target.value)) {
      this.setState({ errorInput: 'שם קיים במשחק'});
    } else if (this.state.players.length >= Constants.maxPlayersInGame) {
      this.setState({ errorInput: `${Constants.maxPlayersInGame} מקסימום שחקנים`});
    } else {
      this.setState({ errorInput: null});
    }
  }

  notAllowdToAddPlayer() {
    return this.state.errorInput !== null || 
      !this.state.playerToAdd || 
      this.state.players.length >= Constants.maxPlayersInGame;
  }

  checkCardsAmountInput(event) {
    if (event.target.value <= Constants.maxCardsInGame) {
      this.setState({ errorNumberInput: null});
    } else {
      event.target.value = Constants.maxCardsInGame;
      this.setState({ errorNumberInput: `מקסימום ${Constants.maxCardsInGame} קלפים`});
    }
    this.setState({ cardsAmount: event.target.value});
  }
}
export default GameManage;