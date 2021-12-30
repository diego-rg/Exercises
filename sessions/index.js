//Sessions: Datos almacenados no servidor aos que se pode acceder mediante cookies.(ej session id para os datos da cesta de compra de un cliente non rexistrado)
const express = require("express");
const app = express();
const session = require("express-session")

app.use(session({ secret: "secretKey99", resave: false, saveUninitialized: false }));

app.get("/viewcount", (req, res) => {
    if(req.session.count) {
        req.session.count +=1;
    } else {
        req.session.count = 1;
    }
    res.send(`You have visited this site ${req.session.count} times!`)//Por defecto, garda a info na memoria. En producción hai que cambialo
})

app.get("/register", (req, res) => {
    const { username = "NoName" } = req.query;
    req.session.username = username;
    res.redirect("/greet");
})

app.get("/greet", (req, res) => {
    const { username } = req.session;
    res.send(`Welcome back ${username}`);
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})