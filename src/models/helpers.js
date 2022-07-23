const axios = require('axios');

class Helper {
  async fetchGameImages(cardCount) {
    const randomPage = this.getRandomNum(5);
    const url = `https://picsum.photos/v2/list?page=${randomPage}&limit=${cardCount / 2}`;
    return axios.get(url);
  }

  getRandomNum(max) {
    return Math.floor(Math.random() * max);
  }
}

module.exports = Helper;
