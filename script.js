
const game = () => {
    // game function, play 5 rounds, best of 5 wins
    // init variables
    
    
    // UI elememts
    const iconChoiceComputer = document.querySelector('[data-computer-choice]');
    
    const iconChoiceUser = document.querySelector('[data-user-choice]');
    const choices = Array.from(document.querySelectorAll('ul.controls li'));
        const playerScoreEl = document.querySelector('[data-score-player]');
        const computerScoreEl = document.querySelector('[data-score-computer]');
        const currentRoundEl = document.querySelector('[data-current-round]');
        const currentRoundResultEl = document.querySelector('[data-current-round-result]');
    const playGame = (totalRounds = 5) => {
        // init variables
        let playerScore = 0;
        let computerScore = 0;
        let result = 0;
        let currentRound = 1;

        
        console.log("currentRoundEl: " + currentRoundEl);
        console.log("currentRoundResultEl1: " + currentRoundResultEl);
        // start the game on click of options
        choices.forEach(choice => choice.addEventListener('click', () => {
            //update round count
            currentRound++;

            console.log("=================");
            console.log("=== ROUND" + currentRound + " ====");
            console.log("=================");
            console.log(choice.getAttribute('data-choice'));

            console.log("currentRound: " + currentRound);
            console.log("currentRoundResultEl: " + currentRoundResultEl);
            // play a round with user choice and computer choice
            result = playRound(choice.getAttribute('data-choice'), getComputerChoice());
            if (result === -1) {
                console.log('you lose');

                currentRoundResultEl.innerHTML = 'You lose this round!';
                computerScore++;
            } else if (result === 1) {
                console.log('you win');
                currentRoundResultEl.innerHTML = 'You win this round!';
                playerScore++;
            } else {
                currentRoundResultEl.innerHTML = 'It\'s a tie!';
                console.log('Tie!');
            }
            playerScoreEl.innerHTML = playerScore;
            computerScoreEl.innerHTML = computerScore;
            currentRoundEl.innerHTML = currentRound;
            console.log('Scores= Computer: ' + computerScore + ', User: ' + playerScore);
            
            // timer gif returns after 5 seconds
            setTimeout(function() {
                resetAnimationChoice();
          }, 3000);

            // end of game
            if (currentRound === totalRounds) {
               
                if (playerScore > computerScore) {
                    console.log("You win the game!");
                } else if (playerScore < computerScore) {
                    console.log("Computer win the game!");
                } else {
                    console.log("No winner");
                }
                // hide game area once game is finished
                document.querySelector("#gamearea").classList.add("hidden");
                document.querySelector("#endgame").classList.remove("hidden");
                console.log(':)');
                console.log(document.querySelector("#gamearea"));

            }
            //return choice.getAttribute('data-choice');
            console.log("*********************");

        }));


        /*for (i = 1; i <= rounds; i++) {
            

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

        }*/

    }
    // get random choice from computer
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];

        let random = Math.floor(Math.random() * 3);
        let computerChoice = choices[random];
        iconChoiceComputer.classList.remove(...iconChoiceComputer.classList);
        iconChoiceComputer.classList.add('choice-' + computerChoice);
        return computerChoice;
    }

    
    // play a round of game
    function playRound(playerSelection, computerSelection) {
        let result = 0;

        console.log('You choose ' + playerSelection + ' and Computer choose ' + computerSelection);
        switch (playerSelection) {
            case 'rock':
                iconChoiceUser.classList.remove(...iconChoiceUser.classList);
                iconChoiceUser.classList.add('choice-rock');
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
                iconChoiceUser.classList.remove(...iconChoiceUser.classList);
                iconChoiceUser.classList.add('choice-paper');
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
                iconChoiceUser.classList.remove(...iconChoiceUser.classList);
                iconChoiceUser.classList.add('choice-scissors');
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
    //reset gif
    function resetAnimationChoice(){
        iconChoiceUser.classList.remove(...iconChoiceUser.classList);
        iconChoiceUser.classList.add('choice-gif');
        iconChoiceComputer.classList.remove(...iconChoiceComputer.classList);
        iconChoiceComputer.classList.add('choice-gif');
    }
    // call playgame function
    playGame();
}





//play game
game();