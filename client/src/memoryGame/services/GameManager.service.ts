import { ICard } from "../interfaces/ICard";
import { IPlayer } from "../interfaces/IPlayer";

export class GameManager {
    private cards: ICard[] = [];
    private players: Map<string, IPlayer> = new Map();
    
    constructor() {}

    public getCards(): ICard[] {
        return this.cards;
    }

    public setPalyer(palyerName: string): void {
        const layerId: string = palyerName;
        this.players.set(layerId, this.setPlayerProperties(layerId, palyerName));
    }

    public getPalyerByName(name: string): IPlayer {
        return this.players.get(name)!;
    }

    public setPlayerTurn(name: string, layerId: string): void {
        const player = this.players.get(name)!;
        this.players.forEach(player => {
            player.isActive = false;
        });
        player.isActive = true;
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


}