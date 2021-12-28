const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const methodOverride = require("method-override");//Instalamos e requerimos Method Override para crear metodo PUT e DELETE para editar
app.use(methodOverride("_method"));

const categories = ['fruit', 'vegetable'];//Mellor afcelo coma en nono, sacando valor do array do schema? Así non actualiza...

const Product = require("./models/product.js");
const Farm = require("./models/farm");

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

//FARM routes
app.get("/farms", async (req, res) =>{
    const farms = await Farm.find({})
    res.render("farms/index", { farms });
})

app.get("/farms/new", (req, res) => {
    res.render("farms/new")
})

app.post("/farms", async (req, res) => {
    const newFarm = new Farm(req.body);
    await newFarm.save();
    console.log(newFarm);
    res.redirect(`/farms/${newFarm._id}`)
})

//Para crear producto asociado a granja:
app.get("/farms/:id/products/new", async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    res.render("products/new", { categories, farm })
})

app.post("/farms/:id/products", async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    const { name, price, category } = req.body;
    const product = new Product({ name, price, category });
    farm.products.push(product);
    product.farm = farm;
    await farm.save();
    await product.save();
    res.redirect(`/farms/${farm._id}`)
})

//ID despois de NEW senón da erro
app.get("/farms/:id", async (req, res) =>{
    const { id } = req.params;
    const farm = await Farm.findById(id).populate("products");//Uso de populate para pasar todos os datos de product
    res.render("farms/show", { farm })
})

app.delete("/farms/:id", async (req, res) => {
    const farm = await Farm.findByIdAndDelete(req.params.id);
    res.redirect("/farms");
})

//PRODUCT REST routes
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
    const product = await Product.findById(id).populate("farm", "name");
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