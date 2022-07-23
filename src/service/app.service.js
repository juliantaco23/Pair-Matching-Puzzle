const Game = require("../models/game");

class App {
  async setLevel(req, res, next) {
    const game = new Game();
    await game.configGameImages();
    const id = Number(req.params.id);
    if (id === 1) {
      try {
        await res.status(200).json(game.getCardList());
      } catch (error) {
        console.log({ error });
      }
    } else {
      next();
    }
  }
}

module.exports = App;
