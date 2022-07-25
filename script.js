function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(computer, user) {
    const userVal = user.toLowerCase()
    if(computer === userVal) {
       // console.log('tie game');
        return ['Tie!', 2];
    } else if(computer === 'rock' && userVal === 'paper' || computer === 'paper' && userVal === 'scissors' || computer === 'scissors' && userVal === 'rock') {
        //console.log('You win');
        return ["You Win! " + userVal + " beats "  + computer, 0];
    } else {
       // console.log('You lose');
        return ["You Lose! " + computer + " beats "  + userVal, 1];
    }
}

let userScore = 0;
let computerScore = 0;
 window.addEventListener('click', function(e) {
    const playerChoice = e.target.className;
    if(userScore < 5 && computerScore < 5){
        const computerChoice = getComputerChoice();
        if(playerChoice == '' || computerChoice =="") return;
        console.log(playerChoice, computerChoice);
        const [string, winner] = playRound(computerChoice, playerChoice);
        if(winner === 0) {
            userScore++;
            const content = document.querySelector('.game_text');
            content.textContent = string + ' Player: ' + userScore + ' Computer: ' + computerScore;
        } else if(winner === 1) {
            computerScore++;
            const content = document.querySelector('.game_text');
            content.textContent = string + ' Player: ' + userScore + ' Computer: ' + computerScore;
         } else if(winner === 2) {
            const content = document.querySelector('.game_text');
            content.textContent = string + ' Player: ' + userScore + ' Computer: ' + computerScore;
         }
    } else if(userScore > computerScore) {
            const content = document.querySelector('.game_text');
            content.textContent = 'You win the game!  Final score is: '+ userScore + ' - ' + computerScore;
    } else if(computerScore > userScore){
            const content = document.querySelector('.game_text');
            content.textContent = 'Computer wins the game!  Final score is: '+ computerScore + ' - ' + userScore;
        }
    });