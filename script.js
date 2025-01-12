// Gets computer choice.
function getComputerChoice(){
    randomValue = Math.random();

    if (randomValue < 0.33){
        return "Rock";
    } else if (randomValue < 0.66){
        return "Paper";
    } else {
        return "Scissors";
    }
};

// Gets human choice.
function getHumanChoice(){
    let playerChoice = prompt('Choose either rock, paper, or scissors.');
    
    // Defaults to 'rock if the playerChoice is undefined.
    if(playerChoice === undefined) {
        console.log("The prompt will default to 'rock'.")
        return 'rock'
    }

    // Checks whether the player entered the correct input.
    if(playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        return playerChoice;
    } else {
        console.log('You\'ve entered an invalid input. Try again.');
        return 'rock'; // Returns default input 'rock'
    }
};

let humanScore = 0;
let computerScore = 0;

// Plays a single round
function playRound(humanChoice, computerChoice){
    const choice0 = humanChoice.toLowerCase();
    const choice1 = computerChoice.toLowerCase();

    // Compares the players choice and the computers choice.
    if(choice0 == choice1) {
        console.log("Its a draw");
    } else if(
        (choice0 == 'rock' && choice1 == 'scissors') ||
        (choice0 == 'paper' && choice1 ==  'rock') ||
        (choice0 == 'scissors' && choice1 == 'paper')
        ) {
        humanScore++;
        console.log("You win!");
    } else {
        computerScore++;
        console.log("You lose!");
    }
};



// Plays the game for 5 rounds
function playGame() {
for (let i = 0; i < 6; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(`Round ${i + 1}: Human: ${humanSelection}, Computer: ${computerSelection}`);// Shows the round and choice for both human and computer.
    playRound(humanSelection, computerSelection);
}

// Show the status of the entire game.
if (humanScore > computerScore){
    console.log("You win the game!");
} else if (humanScore === computerScore){ 
    console.log("Game is tied, well played!");
} else{
    console.log("You lose the game!");
}
};

playGame();