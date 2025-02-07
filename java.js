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

function getRandomInt(max) {
    return Math.floor((Math.random() * max) + 1);
}


function getComputerChoice(number) {
    if (number === 1) {
        return "Rock"
    } else if (number === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

let computerChoice = (getComputerChoice(getRandomInt(3)));


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

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

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
