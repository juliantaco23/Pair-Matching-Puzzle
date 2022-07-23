const Helper = require('./helpers'); 

class Game {
  #id;
  #cardCount;
  #imagesList;
  #cardList;
  #attempts; 
  
  constructor(cardCount = 12) {

    this.#id = Helper.generateUUID();

    if (typeof cardCount !== 'number' || cardCount % 2 !== 0) {
      cardCount = 12;
    }

    this.#cardCount = cardCount;
    this.#attempts = 0;
  }

  async configGameImages() {
    await this.#setImageList()
    this.#setCardList();
  }

  async #setImageList() {
    const response = await Helper.fetchGameImages(this.#cardCount);
    this.#imagesList = response.data.map(img => {
      const {id, download_url} = img;
      return {id, urlImg: download_url};
    })
    return;
  }

  #setCardList() {
    this.#cardList = [...this.#imagesList, ...this.#imagesList];
    Helper.shuffleList(this.#cardList);
  }

  #isMaxAttempt() {
    if (this.#attempts >= this.#cardCount) {
      return true;
    }
    return false;
  }

  getId(){
    return this.#id;
  }

  getAttempts() {
    return this.#attempts;
  }

  addOneAttemp() {
    this.#attempts ++;
    if (this.#isMaxAttempt()) {
      throw new Error('The maximum number of attemps has been made');
    }
  }

  getCardList() {
    return this.#cardList;
  }
}

module.exports = Game;