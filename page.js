import Game from "./modules/game";

export default class Page{
    
    #levelContainer;
    #boardContainer;
    #size;

    constructor(){

        this.#boardContainer = window.querySelector('.');
        this.#boardContainer.addEventListener('click',this.#onCardSelected);
        this.#levelContainer = window.querySelector('.');
        this.#levelContainer.addEventListener('click', this.#onLevelSelect)
        this.#size;
    }
    
    #onCardSelected(event){
        let target = event.target;
    }

    #onLevelSelect(event){
        let target = event.target;
        if(target.tagName == 'BUTTON'){
            this.#size = target.innerHTML;

        }
    }

    #drawBoard(){
        const cardsCount = 6;
        const puzzle = document.querySelector('.puzzle');
        if (cardsCount > 6) {
            puzzle.style["grid-template-columns"] = "repeat(7,1fr)";
        }
        for (let index = 0; index < cardsCount; index++) {
            const card =`<div id="card-${index}" class="card hidden-card" onclick={attempt('card-${index}')}>
                            <img id="img-${index}" src="https://www.clipartmax.com/png/full/282-2828778_question-mark-icon-interrogation-icon.png"></img>
                        </div>`;
            puzzle.innerHTML += card
        }
    }
}