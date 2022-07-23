import { Card } from "card.js";

export default class Board{
    #size;
    #cards;

    constructor(size){
        this.#size = size
        this.#cards = new Array(this.#size);
    }

    getCards(){
        return this.#cards;
    }

    createBoard(){
        for(let position=0; position<this.#size/2; position++){
            let newCardPosition = Math.floor(Math.random() * this.#size);
            let pairCardPosition = Math.floor(Math.random() * this.#size);

            if(this.checkIfCardIsCorrect(newCardPosition) && this.checkIfCardIsCorrect(pairCardPosition)){
                let card = new Card(this.getInfoFromServer(position));
                this.#cards[newCardPosition] = card;
            }
            else{
                if(!this.checkIfCardIsCorrect(newCardPosition)){
                    newCardPosition = Math.floor(Math.random() * this.#size);
                    let card = new Card(this.getInfoFromServer(position));
                    this.#cards[newCardPosition] = card;
                }
                if(!this.checkIfCardIsCorrect(pairCardPosition)){
                    pairCardPosition = Math.floor(Math.random() * this.#size);
                    let card = new Card(this.getInfoFromServer(position));
                    this.#cards[pairCardPosition] = card;
                }
            }
        }

    }

    checkIfCardIsCorrect(position){
        if(this.#cards[position]){
            return false;
        }
        return true;
    }

    getInfoFromServer(position){
        let infoFromServer = [
            {
                id: 1,
                urlImage:'https://picsum.photos/id/1002/4312/2868'
            },
            {   id: 2,
                urlImage:'https://picsum.photos/id/1003/1181/1772'
            },
            {   id: 3,
                urlImage:'https://picsum.photos/id/1004/5616/3744'
            }];
        return infoFromServer[position];
    }

    sendInfoToServer(){

    }

    checkIfPairIsFound(position1, position2){
        if(this.#cards[position1].id == this.#cards[position2].id){
            return true;

        }
        return false;
    }


    deleteCardFromBoard(cardToDelete){
        cardWithId = this.#cards.find(card => card.id === cardToDelete.id);
        if(cardWithId){
            let indexOfCard = this.#cards.findIndex(card => card.id === cardToDelete.id);
            this.#cards.splice(indexFromElement,1);
        }
        else{
            throw new Error('Card not found in array');
        }
    }

}


