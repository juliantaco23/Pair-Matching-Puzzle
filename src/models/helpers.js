const axios = require('axios');
const crypto = require('crypto');
const fs = require('fs');
var path = require('path');

const Config = require('../config/config');
class Helper {
  static async fetchGameImages(cardCount) {
    const randomPage = Helper.getRandomNum(5);
    const url = `${Config.URL_IMAGE}?page=${randomPage}&limit=${cardCount / 2}`;    
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

  static writeDataToFile(dataObj) {
    const jsonContent = JSON.stringify(dataObj);

    const jsonPath = path.join(__dirname, '..', 'persistence', `${dataObj.id}.json`);

    fs.writeFile(jsonPath, jsonContent, 'utf8', (err) => {
      if (err) {
        // Do something useful...
      }
    });   
  }

  static fetchDataFromFile(fileName) {
    const jsonPath = path.join(__dirname, '..', 'persistence', fileName);
    return fs.readFileSync(jsonPath, 'utf8');
  }

  static getGameState(gameId) {
    const fileName = gameId.concat('.json');
    const jsonString = Helper.fetchDataFromFile(fileName);
    const jsonObject = JSON.parse(jsonString);
    jsonObject.cardList.forEach(card => delete card.id);
    return jsonObject;
  }
}

module.exports = Helper;
