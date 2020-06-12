// Players round. player1=0 player2=1
var activePlayer = 0;

//Total score
var scores = [0, 0];

// Round score
var roundScore = 0;

// Side of the Dice (1-6)

// program ehlehed beltgeh ni
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

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
  //   delgetsen deer onoo ni uurchlugdunu
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  // togllogchiineeljiig solih
  switchToNextPlayer();
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
}

// shine togloom ehluuleh tovchluurnii event listener
document.querySelector(".btn-new").addEventListener("click", function () {
  alert("fuck");
});
