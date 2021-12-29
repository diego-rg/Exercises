const express = require("express");
const app = express();

//firma de cookies usa HMAC (código de autenficación basado en hash). Encripta os datos da cookie e da clave secreta firmadas e compara esa clave co valor actual para verificalas
const cookieParser = require("cookie-parser");//npm de express para traballar con cookies
const { createSecretKey } = require("crypto");

app.use(cookieParser("secretStringForSign"));//Clave para firma de cookies. Debe estar pasada aquí como unha variable externa para que non se vexa

app.get("/greet", (req, res) => {
    const { name = "noName" } = req.cookies;//Dispoñible despois de pasar as cookies
    res.send(`Hello ${name}`);
})

app.get("/setname", (req, res) => {
    res.cookie("name", "big chicken");//Enviar cookies. Datos que almacena o navegador. Unha vez recibidos, quedan gardados e pódese requerir noutras rutas
    res.cookie("animal", "not a chicken");
    res.send("Cokkie sent!");
})

app.get("/getsignedcookies", (req, res) => {//Firma de cookies
    res.cookie("mode", "dark", { signed: true });
    res.send("Cookies signed");
})

app.get("/verifycookies", (req, res) => {
    // res.send(req.cookies);//Envía solo as non firmadas
    res.send(req.signedCookies);//Envía as firmadas. Se se modifican as cookies completamente (ej co devtools do navegador) non envía nada xa que deixan de estar firmadas
})//Se se modifica solo o valor devolver false


app.listen(3000, () => {
    console.log("Listening oon port 3000");
})