const express = require('express');
const router = express.Router();
const Game = require('../service/game.service');

const game = new Game();

router.get('/', game.test);
router.get('/game/:id', game.getRandomImage);
router.get('/game/level/:id', game.setLevel);

module.exports = router;