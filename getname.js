   function getPlayername() {
     // Importing elements needed for modifications
     let playernameboard = document.getElementById("playername");
     
    // Get player name
    playerName = prompt("What's your name please?");
    
    if (!playerName) {
      playernameboard.innerHTML = "Player: ";
    }
    else {
      playernameboard.innerHTML = playerName + ": ";
    }
   }
   