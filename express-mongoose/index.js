const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const methodOverride = require("method-override");//Instalamos e requerimos Method Override para crear metodo PUT e DELETE para editar
app.use(methodOverride("_method"));

const Product = require("./models/product.js");

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!")
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR!")
        console.log(err)
    })

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }))//para usar middeware para post

//REST routes
app.get("/products", async (req, res) =>{
    const products = await Product.find({})
    res.render("products/index", { products });
})

//Novo producto: composto por Crear e Enviar
//Crear: non async xa que non hai q esperar a nada
app.get("/products/new", (req, res) => {
    res.render("products/new")
})

//Enviar a db. Redirigir siempre para evitar quedar nun bucle que cree o producto varias veces
app.post("/products", async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct);
    res.redirect(`/products/${newProduct._id}`)
})

app.get("/products/:id", async (req, res) =>{
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render("products/show", { product })
})

//Editar
app.get("/products/:id/edit", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product })
})

app.put("/products/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true });
    res.redirect(`/products/${product._id}`);
})

app.delete("/products/:id", async (req, res) => {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    res.redirect("/products");
})

app.listen(3000, () =>{
    console.log("Listening on port 3000");
})