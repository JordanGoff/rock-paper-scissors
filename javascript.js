// Randomly return "Rock", "Paper", or "Scissors".
function getComputerChoice() {
  // Get a random integer between 0 and 2.
  // Math.random() is the interval [0, 1).
  choice = Math.floor(3 * Math.random());

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
    return "You Lose! Paper beats Rock";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You Win! Scissors beats Paper";
  } else {
    return "Tie!";
  }
}