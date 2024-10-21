function playGame() {
    "use strict";
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    let userChoice = prompt("What do you choose: Rock, Paper, or Scissors?").toUpperCase();

    if (!choices.includes(userChoice)) {
        alert("Invalid choice. Please choose Rock, Paper, or Scissors.");
        return;
    }

    let computerChoice = choices[Math.floor(Math.random() * 3)];
    alert(`Computer chose ${computerChoice}`);

    if (userChoice === computerChoice) {
        alert("It's a tie!");
    } else if (
        (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (userChoice === "SCISSORS" && computerChoice === "PAPER") ||
        (userChoice === "PAPER" && computerChoice === "ROCK")
    ) {
        alert("You win!");
    } else {
        alert("You lose.");
    }
}
playGame();
