// Players round. player1=0 player2=1
var activePlayer = 1;

//Total score
var socres = [0, 0];

// Round score
var roundScore = 0;

// Side of the Dice (1-6)
var dice = Math.floor(Math.random() * 6) + 1;
// program eh;ehed beltgeh ni

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

document.querySelector(".dice").style.display = "none";
