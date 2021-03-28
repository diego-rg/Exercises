// using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.

// 2. Sort the array in order.

// 3. Put "Kiwi" at the end of the array.

// 4. Remove "Apples" from the array.

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

//you should have at the end:
//["Kiwi", "Oranges", "Blueberries"]

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

// 1
const arr = ["Banana", "Apples", "Oranges", "Blueberries"];
arr.shift();

// 2
arr.sort();

// 3
arr.push("Kiwi");

// 4
arr.shift();

// 5
arr.reverse();

// 6
let arr2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
arr2[1][1][0];




// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

const obj = {
    username: "stupidGuyOne",
    password: "123abc"
};

const database = [obj];

const newsfeed = [
    {
        username: "pepe",
        timeline: "asd"
    },
    {
        username: "jose",
        timeline: "qwert"
    },
    {
        username: "pedro",
        timeline: "zxcvbnm"
    }
];

// 4. Build Facebook!

let enterUserName = prompt("Write your user name.");
let enterUserPass = prompt("Write your password");

const login = (user, pass) => {
    if (enterUserName === database[0].username && enterUserPass === database[0].password) {
        console.log(newsfeed);
    } else {
        alert("Wrong user or password!")
    }
};
login(enterUserName, enterUserPass);



// 5. Improve the app!

