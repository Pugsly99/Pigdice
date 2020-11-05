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

$(document).ready(function () {
  $("form#newPlayers").submit(function (event) {
    event.preventDefault();

    const inputPlayer1 = $("input#first").val();
    const inputPlayer2 = $("input#second").val();
    const inputPlayer3 = $("input#third").val();

    let game = new Game();
    let player1 = new Player(inputPlayer1, 0);
    let player2 = new Player(inputPlayer2, 0);
    let player3 = new Player(inputPlayer3, 0);
    game.addPlayer(player1);
    game.addPlayer(player2);
    game.addPlayer(player3);
    console.log(game);
  });
});
