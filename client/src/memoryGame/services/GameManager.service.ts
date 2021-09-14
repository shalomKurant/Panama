import _, { values } from "lodash";
import { ICard } from "../interfaces/ICard";
import { IPlayer } from "../interfaces/IPlayer";
import { CardsGenerator } from "./CardsGenerator.service";
import { eventBuilder } from "./eventsManager/EventBuilder";
import { Events } from "./eventsManager/Events";

class GameManager {
    private cards: ICard[] = [];
    private players: _.Dictionary<IPlayer> = {};
    private isGameActive: boolean = false;

    constructor() {}

    public resetGame(): void {
      this.players = {};
      this.isGameActive = false;
      this.refreshPlayersEvetn();
    }

    public getCards(): ICard[] {
        return JSON.parse(JSON.stringify(this.cards));
    }

    private setCards(cardsAmount?: number) {
      this.cards = CardsGenerator.generate(cardsAmount);
    }

    public getPlayers(): IPlayer[] {
      return Object.values(this.players);
    }

    public getRevealCards(): ICard[] {
        return this.cards.filter(card => card.isShown);
    }

    public setPalyer(palyerName: string): void {
        const layerId: string = palyerName;
        this.players[layerId] = this.setPlayerProperties(layerId, palyerName);
        this.refreshPlayersEvetn();
    }

    public removePalyer(palyerName: string): void {
      const layerId: string = palyerName;
      delete this.players[layerId];
      this.refreshPlayersEvetn();
  }

    public getPalyerByName(name: string): IPlayer {
        return this.players[name];
    }

    public setPlayerTurn(name?: string): void {
        if (!name) {
          Object.values(this.players)[0].isActive = true;
        } else {
          const player = this.players[name];
          Object.values(this.players).forEach(player => {
              player.isActive = false;
          });
          player.isActive = true;
        }
        this.refreshPlayersEvetn();
    }

    public isGameOn(): boolean {
      return this.isGameActive;
    }

    public startGame(isGameOn: boolean, cardsAmount?: number): void {
      this.isGameActive = isGameOn;
      this.setCards(cardsAmount);
    }

    public addPlayerCardWin(playerName: string) {
      this.players[playerName].cardWins += 1;
      this.refreshPlayersEvetn();
    }

    public addPlayerTotalScore(playerName: string) {
      this.players[playerName].score += 1;
      this.refreshPlayersEvetn();
    }

    public getActivePlayer(): IPlayer {
        return Object.values(this.players).filter(player => player.isActive)[0];
    }

    public getNextPlayerTurn(): IPlayer {
      const playersArray: IPlayer[] = Object.values(this.players);
      const activePlayerIndex: number = playersArray.findIndex(value => value.isActive);
      const nextPlayer: IPlayer = playersArray[activePlayerIndex + 1];
      if (nextPlayer)  
        return nextPlayer;
      
      return playersArray[0];
    }

    private setPlayerProperties(name: string, playerId: string): IPlayer {
        return {
            id: playerId,
            name: name,
            cardWins: 0,
            isActive: false,
            score: 0
        }
    }

    private refreshPlayersEvetn() {
      eventBuilder.dispatch(Events.playerAdded, { players: this.getPlayers() });
    };

    public refreshCardsEvetn() {
      eventBuilder.dispatch(Events.refreshCards, { cards: this.getCards() });
    };
}
const gameManager: GameManager = new GameManager();
export { gameManager };