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
// function getHumanChoice(){
//     let playerChoice = prompt('Choose either rock, paper, or scissors.');
    
//     // Defaults to 'rock if the playerChoice is undefined.
//     if(playerChoice === undefined) {
//         console.log("The prompt will default to 'rock'.")
//         return 'rock'
//     }

//     // Checks whether the player entered the correct input.
//     if(playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
//         return playerChoice;
//     } else {
//         console.log('You\'ve entered an invalid input. Try again.');
//         return 'rock'; // Returns default input 'rock'
//     }
// };

let humanScore = 0;
let computerScore = 0;
let roundResult = '';

// Plays a single round
function playRound(humanChoice, computerChoice){
    const choice0 = humanChoice.toLowerCase();
    const choice1 = computerChoice.toLowerCase();

    // Compares the players choice and the computers choice.
    if(choice0 == choice1) {
        roundResult = "Its a draw";
    } else if(
        (choice0 == 'rock' && choice1 == 'scissors') ||
        (choice0 == 'paper' && choice1 ==  'rock') ||
        (choice0 == 'scissors' && choice1 == 'paper')
        ) {
        humanScore++;
        roundResult = "You win!";
    } else {
        computerScore++;
        roundResult = "You lose!";
    }
};



// Plays the game for 5 rounds
function playGame() {
    let rounds = 0;
    const maxRounds = 5;

    document.addEventListener('DOMContentLoaded', function() {
        // DOM Manipulation
        const buttons = document.querySelectorAll("button"); // Selects all buttons and creates a node list.
        
        // Loops though the node list and adds an event listener to each button.
        buttons.forEach(button => { button.addEventListener('click', function(e) {
            if(rounds < maxRounds){
                const humanSelection = e.target.id; // Selects the id of the button clicked.
                const computerSelection = getComputerChoice();
        
                playRound(humanSelection, computerSelection);
    
                // Stores the choice and result result in a variable.
                let choice = `Human: ${humanSelection}, Computer: ${computerSelection}`;
                let result = `Human score: ${humanScore}, Computer score: ${computerScore}`;
    
                // Creates a div element and appends the choice and result to the div element.
                const gmChoice = document.createElement('div');
                gmChoice.textContent = choice;
                document.body.appendChild(gmChoice);
    
                const gmResult = document.createElement('div');
                gmResult.textContent = result;
                document.body.appendChild(gmResult);
    
                // Creates a div element and appends the round result to the div element.
                const gmRound = document.createElement('div');
                gmRound.textContent = roundResult;
                document.body.appendChild(gmRound);

                rounds++;
                }
                if (rounds === maxRounds){
                    const finalResult = document.createElement('div');
                    if (humanScore > computerScore){
                        finalResult.textContent = "You win the game!";
                    } else if (humanScore === computerScore){
                        finalResult.textContent = "Game is tied, well played!";
                    }
                    else{
                        finalResult.textContent = "You lose the game!";
                    }
                    document.body.appendChild(finalResult);
                }
            })
        });
    });
};

playGame();