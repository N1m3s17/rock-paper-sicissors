function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(computer, user) {
    const userVal = user.toLowerCase()
    if(computer === userVal) {
        return ['Tie game', 2];
    } else if(computer === 'rock' && userVal === 'paper' || computer === 'paper' && userVal === 'scissors' || computer === 'scissors' && userVal === 'rock') {
        return ["You Win! " + userVal + " beats "  + computer, 0];
    } else {
        return ["You Lose! " + computer + " beats "  + userVal, 1];
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++) {
        const playerChoice = prompt("Please enter your choice(rock, paper or scissors):");
        const computerChoice = getComputerChoice();
        const [string, winner] = playRound(computerChoice, playerChoice);
        console.log(string);
        if(winner === 0) {
            userScore++;
        } else if(winner === 1) {
            computerScore++;
        }
    }
    if(userScore === computerScore) {
        console.log("Its a tie game!");
    } else if(userScore > computerScore) {
        console.log("You beat the computer: " + userScore + " - " + computerScore);
    } else {
        console.log("Computer beat you: " + computerScore + " - " + userScore);
    }

}

game();


