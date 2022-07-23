const express = require('express');
const router = express.Router();
const App = require('../service/app.service');

const app = new App();

router.get('/game/level/:id', app.setLevel);

module.exports = router;