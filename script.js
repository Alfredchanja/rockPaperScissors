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
    if (playerChoice != 'rock' || playerChoice != 'paper' || playerChoice != 'rock') {
        return "You've enter an invalid choice. Try again.";
    } else {
        return playerChoice;
    }
};

var humanScore = 0;
var computerScore = 0;

// Plays a single round
function playRound(humanChoice, computerChoice){
    const choice0 = humanChoice.toLowerCase();
    const choice1 = computerChoice.toLowerCase();

    if(choice0 == choice1) {
        return "Its a draw";
    } else if(choice0 == 'rock' && choice1 == 'scissors') {
        humanScore++;
        return "You win!";
    } else if(choice0 == 'rock' && choice1 == 'paper') {
        computerScore++;
        return "You lose!";
    } else if(choice0 == 'paper' && choice1 ==  'rock') {
        humanScore++;
        return "You win!";
    } else if (choice0 == 'paper' && choice1 == 'scissors') {
        computerScore++;
        return "You lose!";
    } else if (choice0 == 'scissors' && choice1 == 'paper') {
        humanScore++;
        return "You win!";
    } else if (choice0 == 'scissors' && choice1 == 'rock') {
        humanScore++;
        return "You lose!";
    }
};



// Plays the game for 5 rounds
function playGame() {
for (let i = 0; i < 6; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}

if (humanScore > computerScore){
    console.log("You win the game!");
} else if (humanScore === computerScore){ 
    console.log("Game is tied, well played!");
} else{
    console.log("You lose the game!");
}
};

playGame()