/*  Problem description:
Write a program that takes input from a user, 
compares that input to input from the computer 
and returns the outcome of that comparison to the user.

Subproblems:
1-Write function to get computerchoice
2-Write function to get userchoice
3-Keep track of score
4-Write logic to play single round
5-Write logic to play entire game
-->

<!-- 1 - Pseudocode computer choice function: 
-input: three values: rock, paper and scissors
-desired output: one of three above values, chosen randomly
-necessary steps: 
    FUNCTION that randomly returns number 1, 2 or 3:

    Store that number in a variable

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


