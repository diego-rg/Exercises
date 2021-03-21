// 1-Check if  year is a leap year

const bisiesto = num => num % 4 === 0;



// 2-Compare 2 objects to determine if the first one contains the same properties as the second one

const objOne = {
    a: 1,
    b: 2,
    c: 3
};

const objTwo = {
    a: 1,
    b: 2,
    c: 3
};

const objThree = {
    a: 1,
    y: 2,
    z:3
};

const compObj = (a,b) => Object.keys(a).every(key => b[key]);
console.log(compObj(objOne,objTwo));
console.log(compObj(objOne,objThree));



// 3-Convert this string CSV (comma separated values) into a 2D array
/*
abc,def,ghi
jkl,mno,pqr
stu,vwx,yza
*/

const toArray = str => str.split("\n").map(row => row.split(","));
const str = `abc,def,ghi
jkl,mno,pqr
stu,vwx,yza`;
console.log(toArray(str));



// 4-Generate a random hexadecimal color code
// Hexadecimal: RGB (red green blue), Hexadecimal: valores 0123456789abcdef: #XXXXXX

const hexValues = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f".split(",");

let randomHex = console.log(`#${hexValues[Math.floor(Math.random() * hexValues.length)]}`+
`${hexValues[Math.floor(Math.random() * hexValues.length)]}`+
`${hexValues[Math.floor(Math.random() * hexValues.length)]}`+
`${hexValues[Math.floor(Math.random() * hexValues.length)]}`+
`${hexValues[Math.floor(Math.random() * hexValues.length)]}`+
`${hexValues[Math.floor(Math.random() * hexValues.length)]}`);

/*
Mellor?

const getRandomHexNumber = () =>
    Math.floor(Math.random() * 16).toString(16);

const getRandomHexColor = () => "#" + Array.from(
    {length: 6}).map(getRandomHexNumber).join("");
*/

// 5-Return a new string with letters in alphabetical order

const orderedString = (str) => {
    return (((str.split("")).sort()).toString()).replace(/,/g, "");
}


//Mellor forma??
/*
const alpOrder = (str) =>
    str.split("").sort((a,b) => a > b ? 1 : -1).join("");
*/