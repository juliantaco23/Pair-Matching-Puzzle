const Game = require('./src/models/game');
const Helper = require('./src/models/helpers');

const game = new Game(12);
game.configGameImages().then(() => {
  setTimeout(()=>{
    console.log(Helper.getGameState(game.getId()));
  },5000)
  
})