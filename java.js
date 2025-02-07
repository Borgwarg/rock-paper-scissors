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

function playRound(humanChoice, computerChoice) {

    if (computerChoice == "rock" && humanChoice == "paper") {
        console.log("You win!");
        humanScore += 1;
    } else if (computerChoice == "rock" && humanChoice == "scissors") {
        console.log("You lose!");
        computerScore += 1;
    } else if (computerChoice == "paper" && humanChoice == "scissors") {
        console.log("You win!");
        humanScore += 1;
    } else if (computerChoice == "paper" && humanChoice == "rock") {
        console.log("You lose!");
        computerScore += 1
    } else if (computerChoice == "scissors" && humanChoice == "rock") {
        console.log("You win!");
        humanScore += 1;
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
        console.log("You lose!");
        computerScore += 1;
    } else {
        console.log("Draw!");
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

function playGame(rounds) {
    let played_rounds = 0;

    for (let i = 1; i <= rounds; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        played_rounds += 1;
    }
    
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("You lose the game") 
    } else {
        console.log("Draw!")
    }
}

playGame(5);