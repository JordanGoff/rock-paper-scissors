// Randomly return "Rock", "Paper", or "Scissors".
function getComputerChoice() {
  // Get a random integer between 0 and 2.
  // Math.random() is the interval [0, 1).
  let choice = Math.floor(3 * Math.random());

  // Return the computer's choice depending on the random integer.
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    default:
      return "scissors";
  }
}



// Play a round and return a string that dictates the winner.
function playRound(playerSelection, computerSelection) {
  // Make the playerSelection case insensitive.
  playerSelection = playerSelection.toLowerCase();
  
  if (playerSelection == "rock" && computerSelection == "paper") {
    console.log("You Lose! Paper beats Rock");
    return "l";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("You Win! Rock beats Scissors");
    return "w";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("You Win! Paper beats Rock");
    return "w";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    console.log("You Lose! Scissors beats Paper");
    return "l";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    console.log("You Lose! Rock beats Scissors");
    return "l";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("You Win! Scissors beats Paper");
    return "w";
  } else {
    console.log("Tie!");
    return "t";
  }
}



// Play a 5 round game and report the winner at the end.
function game() {
  for (let i = 0; i < 5; i++) {
    let response = prompt("Enter Rock, Paper, or Scissors: ");
    result = playRound(response, getComputerChoice());
    console.log(result);
  }
}