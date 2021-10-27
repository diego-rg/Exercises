const express = require("express");
const app = express();
const methodOverride = require("method-override");//Uso de npm methor-override para poder usar patch en sitios como forms
const path = require("path");
const { v4: uuidv4 } = require('uuid');//npm creación de id para solucionar falta id en creados etc Pégase directo no sitio d id
uuidv4();

//Formatos para mandar datos con POST. Débese especificar senón sale undefined por defecto na reposta!
//app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(methodOverride("_method"));//Uso de npm methor-override para poder usar patch en sitios como forms
app.set("view engine", "ejs");

//Array con datos simulando unha database
let comments = [
    {
        id: uuidv4(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuidv4(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuidv4(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuidv4(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
];

//path para ver comentarios
app.get("/comments", (req, res) => {
    res.render("comments/index.ejs", { comments });
});

//path para crear comentario, necesita despois de un post para crealo propio comentario
app.get("/comments/new", (req, res) => {
    res.render("comments/new");
});
//post que completa a creación de comentario
app.post("/comments", (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuidv4() });
    res.redirect("/comments");
});

//path para editar comentarios. Requiere usar postman ou crear un formulario de edición
app.patch("/comments/:id", (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect("/comments");
});

app.get("/comments/:id/edit", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/edit", { comment });
});

app.delete("/comments/:id", (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect("/comments");
});

//path para ver detalles por id do comentario
app.get("/comments/:id", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/details.ejs", { comment });
});

// //outro exercicio
// app.get("/tacos", (req, res) => {
//     res.send("GET /tacos response");
// });

// app.post("/tacos", (req, res) => {
//     const { meat, qty } = req.body;
//     res.send(`Aquí tes o teu pedido de ${qty} tacos de ${meat}!`);
// });

//porto
app.listen(3000, () => {
    console.log("Experando no porto 3000...");
});