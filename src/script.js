
const game = () => {

    // init variables/
    const totalRounds = 5;

    // UI elememts
    const iconChoiceComputer = document.querySelector('[data-computer-choice]');
    const iconChoiceUser = document.querySelector('[data-user-choice]');
    const choices = Array.from(document.querySelectorAll('ul.controls li'));
    const playerScoreEl = document.querySelector('[data-score-player]');
    const computerScoreEl = document.querySelector('[data-score-computer]');
    const currentRoundEl = document.querySelector('[data-current-round]');
    const currentRoundResultEl = document.querySelector('[data-current-round-result]');

    // game function, play Xnb rounds, best of X wins
    const playGame = () => {
        // init variables
        let playerScore = 0;
        let computerScore = 0;
        let result = 0;
        let currentRound = 1;

        // start the game on click of options
        choices.forEach(choice => choice.addEventListener('click', () => {
            //update round count
            currentRound++;
            let currentRoundResult = "";
            // play a round with user choice and computer choice
            result = playRound(choice.getAttribute('data-choice'), getComputerChoice());
            if (result === -1) {
                currentRoundResult = 'You lose this round!';
                computerScore++;
            } else if (result === 1) {
                currentRoundResult = 'You win this round!';
                playerScore++;
            } else {
                currentRoundResult = 'It\'s a tie!';
            }
            // update UI with results for this round
            playerScoreEl.innerHTML = playerScore;
            computerScoreEl.innerHTML = computerScore;
            currentRoundResultEl.innerHTML = currentRoundResult;

            // timer 3 sec pause until new turn
            setTimeout(function () {
                resetAnimationChoice();
                currentRoundEl.innerHTML = currentRound;
                currentRoundResultEl.innerHTML="";
            }, 3000);

            // end of game
            if (currentRound === totalRounds) {
                let endgameResult = "";
                if (playerScore > computerScore) {
                    endgameResult = "You win the game!";
                } else if (playerScore < computerScore) {
                    endgameResult = "You lost the game!";
                } else {
                    endgameResult = "Tie! No winner";
                }
                // display final result
                document.querySelector('.endgame-result').innerHTML = endgameResult;
                // hide game area once game is finished
                document.querySelector("#gamearea").classList.add("hidden");
                document.querySelector(".nav-area").classList.add("hidden");
                document.querySelector(".game-info").classList.add("hidden");
                document.querySelector("#endgame").classList.remove("hidden");
            }
        }));
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
        // compare user choice against computer selection and decide who wins
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
    function resetAnimationChoice() {
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