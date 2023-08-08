import "./styles.css";
function getComputerChoice(max) {
  const randomNumber = Math.floor(Math.random() * max);

  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
console.log(getComputerChoice(3));
console.log(getComputerChoice(2));
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's tie!";
  }
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}

const result = playRound("beat", "scissors");
console.log(result);

function game() {
  for (let i = 0; i < 5; i++) {
    let result = playRound("beat", "paper");
    console.log(result);
  }
}
game();
