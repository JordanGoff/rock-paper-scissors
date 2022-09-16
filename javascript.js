// Randomly return "Rock", "Paper", or "Scissors".
function getComputerChoice() {
  // Get a random integer between 0 and 2.
  choice = Math.floor(3 * Math.random());

  // Return the computer's choice depending on the random integer.
  switch (choice) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    default:
      return "Scissors";
  }
}