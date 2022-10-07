const playerSelection = "rock";
const computerSelection = getComputerChoice();

// get random choice from computer
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    return choices[random];
}

// get user choice
function getUserChoice() {
    let playerSelection = "";
    //check until prompt match the words rock, paper, scissors
    do {
        playerSelection = prompt("What's your choice? Rock, Paper, or Scissors");
        if(playerSelection!=null){
            playerSelection = playerSelection.toLowerCase();
        }
    } while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors')

    
    return playerSelection;

}
// play a round of game
function playRound(playerSelection, computerSelection) {
    let result = 0;
    console.log('You choose ' + playerSelection + ' and Computer choose ' + computerSelection);
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'rock') {
                result = 0;
            }
            else if (computerSelection === 'paper') {
                result = -1;
            }
            else if (computerSelection === 'scissors') {
                result = 1;
            }
            break;
        case 'paper':
            if (computerSelection === 'rock') {
                result = 1;
            }
            else if (computerSelection === 'paper') {
                result = 0;
            }
            else if (computerSelection === 'scissors') {
                result = -1;
            }
            break;
        case 'scissors':
            if (computerSelection === 'rock') {
                result = -1;
            }
            else if (computerSelection === 'paper') {
                result = 1;
            }
            else if (computerSelection === 'scissors') {
                result = 0;
            }
            break;
    }

    return result;
}



// game function, play 5 rounds, best of 5 wins
function playGame(rounds = 5) {
    let playerScore = 0;
    let computerScore = 0;
    let result = 0;
    for (i = 1; i <= rounds; i++) {
        console.log("=================");
        console.log("=== ROUND" + i + " ====");
        console.log("=================");
        
        result = playRound(getUserChoice(), getComputerChoice());
       
        if (result === -1) {
            console.log('you lose');
            computerScore++;
        } else if (result === 1) {
            console.log('you win');
            playerScore++;
        } else {
            console.log('Tie!');
        }
        console.log('Scores= Computer: ' + computerScore + ', User: ' + playerScore);

    }
    console.log("*********************");
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Computer win the game!");
    } else {
        console.log("No winner");
    }
}
//play game
console.log(playGame());
    