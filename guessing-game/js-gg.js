//Ask for a maximum-limit value
let maxNumber = parseInt(prompt("Enter the maximum number"));

//Check if its a valid number and ask once again if not
while (!maxNumber){
    maxNumber = parseInt(prompt("Enter a valid number!"));
}

//Generate the number to guess
const targetNumber = Math.floor(Math.random() * maxNumber) + 1;

//First try for the user to guess the number. We use parseInt because prompt generates a string and we need a number
let guess = parseInt(prompt("Enter your fist guess"));

//Guesses meter. Starts as 1 because the user already tried once
let attempts = 1;

//Loop. We use parse int at the beginning because we now also accept strings q and quit  to leave the game
while (parseInt(guess) !== targetNumber){
    if(guess === "q" || guess === "quit") break;
    attempts++;
    if (guess > targetNumber){
        guess = prompt("Too high! Try again");
    } else {
        guess = prompt("Too low! Try again");
    }
}

//Win or lose endings
if(guess === "q" || guess === "quit") {
    alert(`You lose! You did ${attempts} attempts`);
} else {
    alert(`Yes! you did it! It took you ${attempts} attempts`);
}