const Game = require('../models/game');

class App {
  
  test(req, res) {
    const game = new Game();
    setTimeout(() => {
      console.log(game.getCardList());
      res.status(200).json(game.getCardList());
    }, 2000)
  }

  getRandomImage(req, res) {
    const { id } = req.params;
    id && res.status(200).json(id);
  }

  setLevel(req, res, next) {
    const game = new Game();
    const { id } = Number(req.params);
    if (id === 1) {
      setTimeout(() => {
        console.log(game.getCardList());
        res.status(200).json(game.getCardList());
      }, 2000)
      } else {
      next();
    }
  }
}

module.exports = App;
