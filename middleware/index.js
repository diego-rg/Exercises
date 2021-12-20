const express = require("express");
const app = express();
const morgan = require("morgan");
const { networkInterfaces } = require("os");

app.use(morgan("tiny"));
app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method.toUpperCase(), req.path, req.requestTime);
    next();
})

//Creamos unha función para o middleware. Neste caso pide unha "contraseña"
const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    res.send("YOU NEED A PASSWORD!")
}

app.get("/", (req, res) => {
    res.send("Home page!");
})

app.get("/dogs", (req, res) => {
    res.send("Dogs page!");
})

//Pasamos a función da "contraseña" e permítenos usala para esa ruta específica (middleware para 1 ruta)
app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS: Sometimes I wear headphones in public so I dont have to talk to anyone')
})

//Ao estar ao final, sale como ruta estándar se non hai nada na ruta que se busca (middleware para todas as rutas que non estean definidas)
app.use((req, res) => {
    res.status(404).send("Eror 404, page not found noob!!!");
})

app.listen(3000, () => {
    console.log("Running on port 3000");
})