// Create empty user choice variable 
let userChoice = 'empty';
// Generate & store Computer random number between 1 - 3
let computerChoiceNum = Math.floor(Math.random() * 3 + 1);
console.log(`1: ${computerChoiceNum}`);

// Var to store computer choice string
let computerChoiceString = 'empty1';

// Points Variables
let userPoints = 0;
let computerPoints = 0;





// Collect user choice string and store in userChoice variable 
const para = document.querySelector('p');




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

convertCompChoice(computerChoiceNum);
console.log(`2: ${userChoice}`);
console.log(`3: ${computerChoiceString}`);


// Build core game logic which compares userinput with computer input
function gameBuild(userChoice, computerChoiceString) {
    if (userChoice === 'sock' && computerChoiceString === 'sock') {
        console.log('game is draw');
    } else if (userChoice === 'sock' && computerChoiceString === 'rizzla') {
        console.log('user wins with sock, computer had rizzla');
        userPoints ++; 
    } else if (userChoice === 'sock' && computerChoiceString === 'paper') {
        console.log('computer wins with paper, user had sock');
        computerPoints ++;
    } else if (userChoice === 'paper' && computerChoiceString === 'paper') {
        console.log('game is draw');
    } else if (userChoice === 'paper' && computerChoiceString === 'sock') {
        console.log('user wins with paper, computer had sock');
        userPoints ++;
    } else if (userChoice === 'paper' && computerChoiceString === 'rizzla') {
        console.log('computer wines with rizzla, user had paper');
        computerPoints ++;
    } else if (userChoice === 'rizzla' && computerChoiceString === 'rizzla') {
        console.log('game is draw');
    } else if (userChoice === 'rizzla' && computerChoiceString === 'paper') {
        console.log('user wins with rizzla, compueter had paper');
        userPoints ++;
    } else if (userChoice === 'rizzla' && computerChoiceString === 'sock') {
        console.log('computer wins with sock, user had rizzla');
        computerPoints ++;
    } 
}

gameBuild(userChoice, computerChoiceString);

console.log(computerPoints);
console.log(userPoints);




