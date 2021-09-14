import _ from "lodash";
import { ICard } from "../interfaces/ICard"

export class CardsGenerator {
    constructor() {}

    public static generate(maxCards: number = 6) {
        const cards: ICard[] = this.RANDOM_WORDS.slice(0, maxCards).map(word => {
            const randomId = Math.random() + "";
            return {
                id: randomId,
                linkingId: word + randomId,
                title: word,
                details: word,
                isShown: false,
                disabled: false
              }
        });
        const copiedCards: ICard[] = _.cloneDeep(cards);
        copiedCards.forEach(card => card.id = Math.random() + "");
        return this.shuffle([...cards, ...copiedCards]);
    }

    private static shuffle(array: ICard[]) {
        let currentIndex = array.length;
      
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
      
          // Pick a remaining element...
          const randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }


    private static RANDOM_WORDS: string[] = [
        "plead",
        "graze",
        "venture",
        "spontaneous",
        "eternal",
        "hypothesize"
    ]
}