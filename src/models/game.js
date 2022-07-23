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
    await this.#setImageList();
    this.#setCardList();
    this.#writeGameDataToJson();
  }

  async #setImageList() {
    const response = await Helper.fetchGameImages(this.#cardCount);
    this.#imagesList = response.data.map(img => {
      const {id, download_url} = img;
      return {
        id,
        urlImg: download_url,
        found: false,
      };
    })
  }

  #setCardList() {
    this.#cardList = [...this.#imagesList, ...this.#imagesList];
    Helper.shuffleList(this.#cardList);
    this.#cardList = this.#addClientId();
  }

  #addClientId() {
    return this.#cardList.map((card, idx) => {
      return {
        id: card.id,
        urlImg: card.urlImg,
        found: card.found,
        clientId: idx + 1
      }
    });
  }

  #writeGameDataToJson() {
    const jsonData = {
      id: this.#id,
      currentAttempts: this.#attempts,
      cardList: this.#cardList,
    };
    Helper.writeDataToFile(jsonData);
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