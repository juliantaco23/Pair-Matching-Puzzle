const axios = require('axios');
const crypto = require('crypto');
const Config = require('../config/config');
class Helper {
  async fetchGameImages(cardCount) {
    const randomPage = this.getRandomNum(5);
    const url = `${Config.URL_IMAGE}?page=${randomPage}&limit=${cardCount / 2}`;
    return axios.get(url);
  }

  getRandomNum(max) {
    return Math.floor(Math.random() * max);
  }

  shuffleList(array) {
    let currentIndex = array.length;
    let randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = this.getRandomNum(currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  
}

module.exports = Helper;
