const choices = ["rock", "paper", "scissors"]
let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie';    
    }else {
        if(playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") { 
        playerScore++
        return "Player Wins!"
        } else if (playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        return "Computer Wins!"
        }
}}



function game() {
    for (let i = 0; i < 5; i++) {
            const playerSelection = prompt("Pick between Rock, Paper, Scissors").toLowerCase();
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));
        }
    

    if (playerScore > computerScore) {
        return "You have beaten the computer";
    }else if (playerScore < computerScore) {
        return "You lost to the computer.";
    }else {
        return "You tied with the computer.";
    }
}
console.log(game());
