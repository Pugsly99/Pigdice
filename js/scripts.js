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

Player.prototype.diceRoll = function () {
  let dice = Math.floor(Math.random() * 6) + 1;
  let total = 0;

  if (dice > 1) {
    total += dice
  } else if (dice === 1) {
    total = 0;
    //pass to next player
  }
  //this.score += total;
  //total = 0
  this.score += total;
}


//UI Logic
let game = new Game();
let (form#player1)= new Player((form#player1), 12);
let player2 = new Player("Ryalnd", 2);
game.addPlayer(newPlayer);