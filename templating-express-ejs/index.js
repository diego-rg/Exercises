//mkdir "carpeta", npm init, npm i express+ejs+nodemon, mkdir views e touch subrredir.ejs nela para EJS, copiar o archivo coa data do proxecto.

const express = require("express");//express
const app = express();//express
const path = require("path");//ejs path
const redditData = require("./data.json");//datos archivo json

app.set("view engine", "ejs");//ejs path
app.set("views", path.join(__dirname, "/views"))//ejs path

app.get("/r/:subreddit", (req, res) => {//resposta en /r/:subreddit
    const { subreddit } = req.params;//Usa destructuring. req.params é un objeto igual a subreddit: nome do subreddit escrito (saca valor de /r/:). Ver console.logs
    console.log(`req.params é: ${req.params}`);
    console.log(req.params);
    console.log(subreddit);
    const data = redditData[subreddit];//saca o objeto que ten o nome subreddit dentro do archivo json de data
    if(data) {
        res.render("subreddit", { ...data });//responde co html/ejs subreddit e permitelle usar datos de data.json nel
    } else {
        res.render("error", { subreddit })
    }
});//+ SPREAD (...) que permite acceder aos valores de data para non ter que usar en subreddit.ejs data.name, data.description etc

app.listen(3000, () => {//express iniciar puerto
    console.log("Listening on port 3000...");
});