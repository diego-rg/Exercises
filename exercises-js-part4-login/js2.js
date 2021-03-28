const database = [
    {
        username: "Pepe",
        password: "123"
    },
    {
        username: "Pedro",
        password: "abc"
    },
     {
        username: "Pablo",
        password: "777"
    },
];

const newsfeed = [
    {
        username: "Mary",
        timeline: "Hi"
    },
    {
        username: "Adam",
        timeline: "Hello"
    },
    {
        username: "Colt",
        timeline: "Supp"
    }
];

let enterUserName = prompt("Write your user name.");
let enterUserPass = prompt("Write your password.");

const checkUser = (user, pass) => {
    for (let i=0; i<database.length; i++) {
        if (enterUserName === database[i].username && enterUserPass === database[i].password) {
            return true;
        }
    }
    return false;
};

const login = (user, pass) => {
    if (checkUser(user, pass)) {//require poñer os argumentos da función para que os pase
        console.log(newsfeed);
    } else {
        alert("Wrong user or password!")
    }
};

login(enterUserName, enterUserPass);