/*  Problem description:
Write a program that takes input from a user, 
compares that input to input from the computer 
and outputs the outcome of that comparison to the user.

Subproblems:
1-Write function to get computerchoice
2-Write function to get userchoice
3-Keep track of score
4-Write logic to play single round
5-Write logic to play entire game
-->

<!-- 1 - Pseudocode computer choice function: 
    FUNCTION that randomly returns number 1, 2 or 3:

    FUNCTION to return computer choice:
        IF function returns 1:
            return rock
        ELSE IF function returns 2:
            return paper
        ELSE:
            return scissors  
            
        store the result in variable
*/


function getComputerChoice() {
    number = Math.floor((Math.random() * 3) + 1);
    if (number === 1) {
        return "rock"
    } else if (number === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}



/* Pseudocode human choice function
    FUNCTION human choice:
        LET empty variable chocie
        WHILE choice is not equal to rock OR paper OR scissors:
            -PROMPT user for input "Rock, Paper, Scissors?"
            -Store input in variable choice
        RETURN choice
*/

function getHumanChoice() {
    let choice = "";

    while (choice !== "rock" && choice !== "paper" && choice !== 'scissors') {
        choice = prompt("Rock, Paper, Scissors?");
        choice = choice.toLowerCase();
    }
    return choice;
}



/* Pseudocode single round
    FUNCTION single round - takes two arguments: humanChoice and ComputerChoice
    IF computerchoice equals rock AND humanchoice equals paper:
        -Display message "You win!"
        -Increment playerscore by 1
    ELSE IF computerchoice equals rock AND humanchoice equals scissors:
        -display message "You lose"
        -increment computerscore by 1
    ELSE IF computerchoice equals paper AND humanchoice equals scissors:
        -display message "You win"
        -increment playerscore by 1
    ELSE IF computerchoice equals paper AND humanchoice equals rock:
        -display message "You lose"
        -increment computerscore by 1
    ELSE IF computerchoice equals scissors AND humanchoice equals rock:
        -display message "You win"
        -increment playerscore by 1
    ELSE IF computerchoice equals scissors AND humanchoice equals paper:
        -display "you lose"
        -increment computerscore by 1
    ELSE
        -display message "Draw"
*/

let humanScore = 0;
let computerScore = 0;

let result = document.querySelector("#result");
let computerscore = document.querySelector("#computerscore");
let playerscore = document.querySelector("#playerscore");

function playRound(humanChoice, computerChoice) {

    if (computerChoice == "rock" && humanChoice == "paper") {
        result.textContent = "You win!";
        humanScore += 1;
    } else if (computerChoice == "rock" && humanChoice == "scissors") {
        result.textContent = "You lose!";
        computerScore += 1;
    } else if (computerChoice == "paper" && humanChoice == "scissors") {
        result.textContent = "You win!";
        humanScore += 1;
    } else if (computerChoice == "paper" && humanChoice == "rock") {
        result.textContent = "You lose!";
        computerScore += 1
    } else if (computerChoice == "scissors" && humanChoice == "rock") {
        result.textContent = "You win!";
        humanScore += 1;
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
        result.textContent = "You lose!";
        computerScore += 1;
    } else {
        result.textContent = "Draw!";
    }

    playerscore.textContent = `Playerscore: ${humanScore}`;
    computerscore.textContent =  `Computerscore: ${computerScore}`;

    if (humanScore === 5) {
        result.textContent = "You win the game!";
    } else if (computerScore === 5) {
        result.textContent = "You lose the game!"
    }

}



/* Pseudocode for playing x rounds
    FUNCTION to play x rounds - takes number of rounds as argument
        LET variable to store score of player
        LET variable to store score of computer
        LET variable to store number of played rounds
        WHILE number of played rounds does not equal function argument:
            CALL playround function
            Increment number of rounds  
        IF humanscore is greater than computerscore:
            -Display message "You win the game!"
        ELSE IF humanscore is less than computerscore:
            -Display message "You lose the game"
        ELSE
            -Display message "Draw!"
*/

// function playGame(rounds) {
//     let played_rounds = 0;

//     for (let i = 1; i <= rounds; i++) {
//         playRound(getHumanChoice(), getComputerChoice());
//         console.log(`Your score is: ${humanScore}`);
//         console.log (`Computerscore is: ${computerScore}`);
//         played_rounds += 1;
//     }
    
    
//     if (humanScore > computerScore) {
//         console.log("You win the game!");
//     } else if (humanScore < computerScore) {
//     } else {
//         console.log("Draw!")
//     }
// }

// playGame(5);

/* Pseudocode playerSelection buttons

Input: user selects on of three buttons
Output: playRound funtion is called using playerSelection
Steps:
    -Create three buttonelements in HTML
    -Store buttonelements in java-variables using queryselector 
    -Create div buttons and add eventlistener for click to div
    -Eventlistener calls function taking event as parameter to determine target.id
    -Call playRound function using switch statement and target id to play correct playerselection
*/

function playGame() {
    const rockbtn = document.querySelector("#rock");
    const paperbtn = document.querySelector("#paper");
    const scissorsbtn = document.querySelector("#scissors");

    const selectors = document.querySelector("#selectors");

    selectors.addEventListener("click", (e) => {
        let target = e.target;

        switch (target.id) {
            case "rock":
                playRound("rock", getComputerChoice());
                break;

            case "paper":
                playRound("paper", getComputerChoice());
                break;
            case "scissors":
                playRound("scissors", getComputerChoice());
                break;
        }
    });
}

playGame();

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    playerscore.textContent = "";
    computerscore.textContent = "";  
    result.textContent = ""
}

resetButton = document.querySelector("#resetbtn");
resetButton.addEventListener("click", resetGame);