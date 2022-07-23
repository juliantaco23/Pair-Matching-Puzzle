const Helper = require('./helpers'); 

class Game {
  #id;
  #cardCount;
  #imagesList;
  #cardList;
  #attempts; 
  
  constructor(cardCount = 12) {
    if (typeof cardCount !== 'number' || cardCount % 2 !== 0) {
      cardCount = 12;
    }
    this.#cardCount = cardCount;
    this.#attempts = 0;
    this.setImageList()
      .then(() => this.#setCardList());
  }

  async setImageList() {
    const helper = new Helper();
    const response = await helper.fetchGameImages(this.#cardCount);
    this.#imagesList = response.data.map(img => {
      const {id, download_url} = img;
      return {id, urlImg: download_url};
    })
    return;
  }

  #setCardList() {
    const helper = new Helper();
    this.#cardList = [...this.#imagesList, ...this.#imagesList];
    helper.shuffleList(this.#cardList);
  }

  #isMaxAttempt() {
    if (this.#attempts >= this.#cardCount) {
      return true;
    }
  }

  getAttempts() {
    return this.#attempts;
  }

  addOneAttemp() {
    this.#isMaxAttempt()
    return this.#attempts ++;
  }

  getCardList() {
    return this.#cardList;
  }
}

module.exports = Game;