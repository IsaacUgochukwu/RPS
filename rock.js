function checkRock(p) {
  // Importing elements needed for modifications
  let userScore = document.getElementById("userscore");
  let computerScore = document.getElementById("computerscore");
  let scoreAlertBox = document.getElementById("scorealert");
  let playerName = document.getElementById("playername");
  let restartbtn = document.getElementById("restart");
  let board = document.getElementById("board");

  // Pre modifications
  restartbtn.style.display = "block";

  // Make random number for computer choice
  let min = 1;
  let max = 3;
  let computerChoice = Math.floor(Math.random() * (max - min + 1)) + min;

  // Get user's choice and compare
  let userChoice = document.querySelector("p");
  userChoice = userChoice.innerHTML;

  // Comparison
  if (userChoice === "Rock" && computerChoice === 1) {
    scoreAlertBox.style.display = "block";
    scoreAlertBox.innerHTML = "A Tie Game 😮";
    setTimeout(function() {
      scoreAlertBox.style.display = "none";
    }, 1500)
  }
  else if (userChoice === "Rock" && computerChoice === 3) {
    userScore.innerHTML++;
  } else {
    computerScore.innerHTML++;
  }

  // Check if the game is over

  //Checking if player won
  if (userScore.innerHTML >= 5) {
    board.style.visibility = "visible";
    board.innerHTML = "Game Over! 🎮 " + "<br>" + "You won 🎉🎉";
    setTimeout(function() {
  location.reload();
}, 5000)
  }
  else {
    // Do nothing
  }

  // Checking if computer won
  if (computerScore.innerHTML >= 5) {
    board.style.visibility = "visible";
    board.innerHTML = "Game over! 🎮" + "<br>" + "You lose 😣😣";
    setTimeout(function() {
  location.reload();
}, 5000)
  } else {
    // Do nothing
  }
}