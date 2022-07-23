const axios = require('axios');
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
}

module.exports = Helper;
