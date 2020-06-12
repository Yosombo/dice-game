// Players round. player1=0 player2=1
var activePlayer;

//Total score
var scores;

// Round score
var roundScore;

var diceDom = document.querySelector(".dice");
// togloomiig ehluuleh
initGame();
// shine togloom ehluuleh tovchluurnii event listener
function initGame() {
  // program ehlehed beltgeh ni
  // Players round. player1=0 player2=1
  activePlayer = 0;

  //Total score
  scores = [0, 0];

  // Round score
  roundScore = 0;

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  //   toglogchdiig neriig butsaaj gargah
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
  diceDom.style.display = "none";
}
document.querySelector(".btn-new").addEventListener("click", initGame);

// shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  // Side of the Dice (1-6 sanamsrgui toog gargaj awna)
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  //shoonii zuragiig gargaj irne
  diceDom.style.display = "block";

  //   buusan shoonii zurgiig gargaj irne
  diceDom.src = "dice-" + diceNumber + ".png";

  // buusan too ni 1ees yalgaatai bol toglogchiin eeljiin onoog nemegduulne
  if (diceNumber !== 1) {
    //   1ees uur too buusan tul onoog nemne
    document.getElementById("current-" + activePlayer).textContent = roundScore;
    roundScore = roundScore + diceNumber;
  } else {
    switchToNextPlayer();
  }
});
// HOLD tovchni event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  //ug toglogchiin eeljni onoog global onoon der ni nemj ugnu
  scores[activePlayer] = scores[activePlayer] + roundScore;
  //   delgetsen deer onoo ni uurchlugdunu
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  //   ug toglogch hojson esehiig shalgah
  if (scores[activePlayer] >= 10) {
    document.getElementById("name-" + activePlayer).textContent = "WINNER!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    // togllogchiineeljiig solih
    switchToNextPlayer();
  }
});
// toglogchiin erhiig daraaagiin toglogchid shiljuuleh
function switchToNextPlayer() {
  //   eeljiin onoog ni 0 bolgoh
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  //   1 buusan tul toglogchiin onoog teglej  eeljig solino
  // herevee idvehtei toglogch 0 baih ym bol 1 bolgon, ugui bol 0 bolgo
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  // ulaan tsegiig shiljuuleh
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  diceDom.style.display = "none";
}
