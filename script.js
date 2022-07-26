

// let userScore = 0;
// let computerScore = 0;
//  window.addEventListener('click', function(e) {
//     const playerChoice = e.target.className;
//     if(userScore < 5 && computerScore < 5){
//         const computerChoice = getComputerChoice();
//         if(playerChoice == '' || computerChoice =="") return;
//         console.log(playerChoice, computerChoice);
//         const [string, winner] = playRound(computerChoice, playerChoice);
//         if(winner === 0) {
//             userScore++;
//             const content = document.querySelector('.game_text');
//             content.textContent = string + ' Player: ' + userScore + ' Computer: ' + computerScore;
//         } else if(winner === 1) {
//             computerScore++;
//             const content = document.querySelector('.game_text');
//             content.textContent = string + ' Player: ' + userScore + ' Computer: ' + computerScore;
//          } else if(winner === 2) {
//             const content = document.querySelector('.game_text');
//             content.textContent = string + ' Player: ' + userScore + ' Computer: ' + computerScore;
//          }
//     } else if(userScore > computerScore) {
//             const content = document.querySelector('.game_text');
//             content.textContent = 'You win the game!  Final score is: '+ userScore + ' - ' + computerScore;
//     } else if(computerScore > userScore){
//             const content = document.querySelector('.game_text');
//             content.textContent = 'Computer wins the game!  Final score is: '+ computerScore + ' - ' + userScore;
//         }
//     });

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function gameOver() {
    return (userScore === 5 || computerScore === 5);
}

let userScore = 0;
let computerScore = 0;
let roundWinner = '';

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const paraUpdate = document.querySelector('.paraUpdates');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close');
const modalText = document.querySelector('.modal-text');

// handle clicks

rockBtn.addEventListener('click', () => 
    handleClick('rock'));
paperBtn.addEventListener('click', () => 
    handleClick('paper'));
scissorsBtn.addEventListener('click', () => 
    handleClick('scissors'));

 closeModal.addEventListener('click', () =>
  modalClose());

function handleClick(userChoice) {
    if(gameOver()){
        openModal();
        return;
    }
  const computerChoice = getComputerChoice();
   playRound(computerChoice, userChoice);
   
   if(gameOver()){
    openModal();
    return;
}
   
}



function playRound(computer, user) {
    const userVal = user.toLowerCase()
    if(computer === userVal) {
        console.log('tie game');
        roundWinner = 'tie';
    } else if(computer === 'rock' && userVal === 'paper' || computer === 'paper' && userVal === 'scissors' || computer === 'scissors' && userVal === 'rock') {
        console.log('You win');
        userScore++;
        roundWinner = 'player';
    } else {
         console.log('You lose');
       computerScore++;
        roundWinner = 'computer';
    }

    roundMessage(roundWinner, userVal, computer);
}

function roundMessage(winner, user, computer) {
    if(winner === 'tie') {
        paraUpdate.textContent = 'Its a tie ' + userScore + '-' + computerScore;
    }
    if(winner === 'player') {
        paraUpdate.textContent = 'You win! ' + userScore + '-' + computerScore;
    }
    if(winner === 'computer') {
        paraUpdate.textContent = 'You lose. ' + userScore + '-' + computerScore;
    }
}

function openModal() {
    modal.style.display = 'block';

    if(userScore === 5 && computerScore < 5) {
        modalText.textContent = 'YOU WIN!'
    }
    if(userScore < 5 && computerScore === 5) {
        modalText.textContent = 'YOU LOSE!'
    }
}

function modalClose(){
    modal.style.display = 'none';
};