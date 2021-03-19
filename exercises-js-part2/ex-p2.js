// 1- Create a new string form the first and last 3 characters of a given string. If the string is less than 3 characters, return the original one

const threeStr = (str) => {
    return str.length < 3 ? str : `${str.slice(0, 3)}${str.slice(-3)}`;
}



// 2- Extract the first half of a string of even length

const halfStr = (str) => {
    let strEnd = Math.floor(str.length / 2);
    return str.length % 2 === 0 ? `${str.slice(0, strEnd)}` : `${str} is not an even string`;
}



// 3- Given 2 values, find which one is nearest to 100

const nearest100 = (num1, num2) => {
    return num1 === num2 ? `Both numbers are equal!!!` : ((100 - num1) < (100 - num2) ? `${num1} is the nearest to 100` : `${num2} is the nearest to 100`);
}


// 4- Find the number of even digits in a array of integers

const evenNumbers = arrayList => {
    return (arrayList.filter(evenNumber => {
        return evenNumber % 2 === 0;
    })).length;
}

/*
Mellor version?
const countEven = (arr) =>
arr.filter(num => num % 2 === 0).length;
*/


// 4- Find the number of even values up to a given number

const evenNumbers = arrayList => {//usa funcion anterior
    return (arrayList.filter(evenNumber => {
        return evenNumber % 2 === 0;
    })).length;
}

const createArray = num => {
    const returnArray = [];
    for (let i = 1; i <= num; i++) {
        returnArray.push(i);
    }
    return returnArray;
}

console.log(evenNumbers(createArray()));


// 5- Get the largest even number from an array of integers

const largestEven = (arr) => Math.max(...arr.filter(num => num % 2 === 0));

console.log(largestEven([1, 2, 3, 5, 7, 12, 80, 79, 95, 120])); //ej


// 6- Replace the first number in a string with at least 1 character with $

const replaceFirstNum = (str) => str.replace(/[0-9]/, "$");