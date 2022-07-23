const axios = require('axios');
const crypto = require('crypto');

class Helper {
  static async fetchGameImages(cardCount) {
    const randomPage = Helper.getRandomNum(5);
    const url = `https://picsum.photos/v2/list?page=${randomPage}&limit=${cardCount / 2}`;
    return axios.get(url);
  }

  static getRandomNum(max) {
    return Math.floor(Math.random() * max);
  }

  static shuffleList(array) {
    let currentIndex = array.length;
    let randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Helper.getRandomNum(currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  static generateUUID() {
    return crypto.randomUUID();
  }
}

module.exports = Helper;