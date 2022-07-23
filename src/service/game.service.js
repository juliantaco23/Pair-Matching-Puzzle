class Game {
  test(req, res) {
    res.send("Entré");
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

module.exports = Game;
