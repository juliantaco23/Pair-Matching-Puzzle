const Helper = require('./helpers'); 

class Game {
  #cardCount;
  #imagesList;
  #cardList;
  // #formatCardList;
  
  constructor(cardCount = 12) {
    if (typeof cardCount !== 'number' || cardCount % 2 !== 0) {
      cardCount = 12;
    }
    this.#cardCount = cardCount;
    console.log(this.#cardCount)
    this.#setImageList().then(() => this.#formatCardList);
  }

  async #setImageList() {
    const helper = new Helper();
    const response = await helper.fetchGameImages(this.#cardCount);
    this.#imagesList = response.data;
  }

  #formatCardList() {
    
  }

}

module.exports = Game;