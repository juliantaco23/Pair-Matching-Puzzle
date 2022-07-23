const Game = require('../models/game');

class App {
  
  async test(req, res) {
    const game = new Game();
    res.status(200).json(game.setImageList());
  }

  getRandomImage(req, res) {
    const { id } = req.params;
    id && res.status(200).json(id);
  }

  setLevel(req, res, next) {
    const { id } = req.params;
    if (id >= 1 && id <= 3) {
      id && res.status(200).json({ Level: id });
    } else {
      next();
    }
  }
}

module.exports = App;
