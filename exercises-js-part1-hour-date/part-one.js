//Exercises from https://www.youtube.com/watch?v=N65RvNkZFGE


// 1- Check 2 numbers and return true if one of them is 100 or the sum of both is 100

let numCheck = function(numOne, numTwo) {
    if (numOne === 100 || numTwo === 100 || numOne + numTwo === 100) {
        console.log(true);
    } else {
        console.log(false);
    }
}

//Versión actual con Arrow Functions. Non fai falta if/else
/*
const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a + b) === 100;
*/

/*----------------------------------------------------------------------------------------------------------------------------------------------*/

// 2- Get the extension of a filename

let fileExtension = (str) => str.slice(str.lastIndexOf("."));
console.log(fileExtension("example.html"));

// con lastIndexOf saca a posición e con slice recorta a extensión

/*----------------------------------------------------------------------------------------------------------------------------------------------*/

// 3- Replace ecery character in a string with the next character in the alphabet

let replaceLetters = (str) => str.split("").map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join("");
console.log(replaceLetters("casa"));

// Revisar

/*----------------------------------------------------------------------------------------------------------------------------------------------*/

// 4- Get the current date

let currentDate = (date = new Date()) => {
    let days = date.getDate();
    let months = date.getMonth() + 1;
    let years = date.getFullYear();
return `${days}-${months}-${years}`;
}
currentDate();

// en months súmase 1 xa que comeza en 0 ata 11 meses

// para a hora: 

let currentTime = (date = new Date()) => {
    let hours = date.getHours();
    hours = hours < 10 ? "0" + hours : hours;
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let seconds = date.getSeconds();
    seconds = seconds < 10 ? "0" + seconds : seconds;
return `${hours}:${minutes}:${seconds}`;
}
curentTime();

/*----------------------------------------------------------------------------------------------------------------------------------------------*/

// 5- Create a new string with "NEW!" if front of the given string. If it already begins with NEW!, then return the original one.

let newString = (str) => {
    if (str.startsWith("NEW!")) {
        return str;
    } else {
        return `NEW!${str}`;
    }
}
newString();

// forma máis corta:
/*
let newString = (str) => str.indexOf("NEW!") === 0 ? str : `NEW!${str}`;
mewString();
*/