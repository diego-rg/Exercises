//requerir mongoose despois de instalar o nmp
const mongoose = require("mongoose");

//conexión coa db (moviesApp neste caso) e control de errores
mongoose.connect("mongodb://localhost:27017/moviesApp")
    .then(() => {
        console.log("Connected to the mongoDB");
    })
    .catch(err => {
        console.log("Error: cant connect to the mongoDB");
        console.log(err)
    });

//Creación de un Schema
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

//Creación do model
const Movie = mongoose.model("Movie", movieSchema);

//Ejemplo:
const amadeus = new Movie({ title: "Amadeus", year: 1986, score: 9, rating: "A"});
//Podemos acceder a ela desde a terminal con node ejecutando:   .load index.js
//Como estamos no entorno de node, podemos chamar ao obxecto:     amadeus
//Só existe como obxecto js, non na DB, polo que:   db.movies.find()    non ensina nada
//Para pasalo para a base de datos desde node podemos usar:     amadeus.save()

//Para insertar DIRECTAMENTE varios, pódese usar insertMany de mongodb:
// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
// ])
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("Error: cant send the data to mongoDB");
//         console.log(err)
//     });

//Mongoose Queries: son similares a promesas. Usando Mongoose desde bash con node:
//Para CRUD buscar:     Movie.find({})      saca todos os valores de esa query en node
//Para sacar solo os datos (array) de dentro da query:      Movie.find({}).then(data => console.log(data))
//Ejemplo: peliculas do ano 2012:       Movie.find({year: 2012}).then(data => console.log(data))
//Buscar por id:    Movie.findById("61802c5a023188d356ba1990").then(data => console.log(data))
//Modificar:    Movie.updateOne({title: "Amadeus"}, {year: 1984}).then(data => console.log(data))
//Modificar varias:         Movie.updateMany({title: {$in: ["Amadeus", "Stand By Me"]}}, {score: 10}).then(data => console.log(data))
//modificar e sacar o novo valor:       Movie.findOneAndUpdate({title: "Amadeus"}, {score: 9}, {new: true}).then(data => console.log(data))
//Eliminar:         Movie.deleteMany({year: {$gte: 2005}}).then(data => console.log(data))
//Eliminar e ver o que eliminaches:         Movie.findOneAndDelete({title: "Alien"}).then(data => console.log(data))