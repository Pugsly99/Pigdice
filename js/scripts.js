//Business Logic
function Game() {
  this.players = [];
  this.playerId = 0;
}

Game.prototype.addPlayer = function (player) {
  player.id = this.assignId();
  this.players.push(player);
}

Game.prototype.assignId = function () {
  this.playerId += 1;
  return this.playerId;
}


  //Business logic for Game
  function Player(name, score) {
    this.name = name;
    this.score = score;
  }


  //UI Logic
  let game = new Game();
  let newPlayer = new Player("Glen", 12);
  game.addPlayer(newPlayer);