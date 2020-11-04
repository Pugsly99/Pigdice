player {
  Name;
  Score;
  playerid[];
}
displayer player name
<h1><span class player[id].score></span></h1>


// display score for current player {
//   player[id]
// }

passplayer {
  player id + 1
  if(player id > playerid.lenght)
  set player id to [1]
}


dice roll {

dice = Math.floor(Math.random() * 6) + 1;
total = 0

if(dice > 1){
  total += dice;
} if else(dice = 1) {
  total = 0
  pass next player
} if else(button pass) {
  player.score.push (total)
  pass to next player
}

dice = Math.floor(Math.random() * 6) + 1