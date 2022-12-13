// Create empty user choice variable 
let userChoice = 'empty';
// Generate & store Computer random number between 1 - 3
let computerChoiceNum = Math.floor(Math.random() * 3 + 1);
console.log(`1: ${computerChoiceNum}`);

// Var to store computer choice string
let computerChoiceString = 'empty1';

// Collect user choice string and store in userChoice variable 
function getUserChoice() {
    userChoice = (prompt("Enter either: Sock, Paper or Rizzla"))
    userChoice = userChoice.toLowerCase();
}

// Convert the computer choice number to a string
function convertCompChoice(computerChoiceNum) {
    if (computerChoiceNum === 1) {
        computerChoiceString = 'sock';
    } else if (computerChoiceNum === 2) {
        computerChoiceString = 'paper';
    } else if (computerChoiceNum === 3) {
        computerChoiceString = 'rizzla';
    } else {
        console.log('error with computer choice');
    };
}



getUserChoice();
convertCompChoice(computerChoiceNum);
console.log(`2: ${userChoice}`);
console.log(`3: ${computerChoiceString}`);