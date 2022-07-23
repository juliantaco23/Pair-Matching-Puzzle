import Board from "./board";

export default  class Game{
    
    #currentCard;
    #pairOfCard;
    #board;
    #tries;
    constructor(){
        this.#currentCard;
        this.#pairOfCard
        this.#board;
        this.#tries;
    }


    createBoard(level){
        new Board(level)
    }


    selectNewCard(cardSelected){
        if(this.#currentCard){
            this.#pairOfCard = cardSelected;
            return false;
        }
        else{
            this.#currentCard = cardSelected;
            this.#tries++;
        }
    }





}