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
  this.roundTotal = 0;
}

Player.prototype.diceRoll = function () {
  let dice = Math.floor(Math.random() * 6) + 1;

  if (dice === 1) {
    this.roundTotal = 0;
  }
  else if (dice !== 1)
    this.roundTotal += dice;

  //passbuttoin
  //this.score += roundTotal;
  //roundTotal = 0
  //console.log(roundTotal); //total shows what the dice is
  //console.log(score); //total score
}

let game = new Game();

function showPlayer(scoresToDisplay) {
  let displayGame = $(".test");
  let htmlForPlayerInfo = "";
  scoresToDisplay.players.forEach(function(player) {
    htmlForPlayerInfo +=  player.id;
  });
  displayGame.html(htmlForPlayerInfo);



}

$(document).ready(function () {
  $("form#newPlayers").submit(function (event) {
    event.preventDefault();

    const inputPlayer1 = $("input#first").val();
    const inputPlayer2 = $("input#second").val();
    const inputPlayer3 = $("input#third").val();
 
    let player1 = new Player(inputPlayer1, 0);
    let player2 = new Player(inputPlayer2, 0);
    let player3 = new Player(inputPlayer3, 0);
    game.addPlayer(player1);
    game.addPlayer(player2);
    game.addPlayer(player3);
    console.log(game);

    $("button#dice").click(function () {
      player1.diceRoll();
      console.log(player1);
    });

    $("button#toScore").click(function () {
      player1.score += player1.roundTotal
      player1.roundTotal = 0
      console.log(player1);
    });
  });

  showPlayer(game);
});