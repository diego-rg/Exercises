const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const methodOverride = require("method-override");//Instalamos e requerimos Method Override para crear metodo PUT e DELETE para editar
app.use(methodOverride("_method"));
const AppError = require("./AppError");//ERROR HANDLING

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

//ERROR HANDLING
app.get("/products/new", (req, res) => {
    res.render("products/new")
})

//ERROR HANDLING: try catch para os erros da db (como non poñer un dato required)
//Enviar a db. Redirigir siempre para evitar quedar nun bucle que cree o producto varias veces
app.post("/products", async (req, res, next) => {
    try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
    } catch(e) {
        next(e);
    }

})

//ERROR HANDLING ASYNC
app.get("/products/:id", async (req, res, next) =>{
    try {
    const { id } = req.params;
    const product = await Product.findById(id)
    if(!product) {
        throw new AppError("Product not found", 404);
    }
    res.render("products/show", { product })
} catch(e) {
    next(e);
}
})

//ERROR HANDLING:
//Editar
app.get("/products/:id/edit", async (req, res, next) => {
    try {                                               //Proba si erro ao buscar na db
    const { id } = req.params;
    const product = await Product.findById(id);
    if(!product) {                                      //SE non hai producto:
        throw new AppError("Product not found, 404");  //Saca o err da nosa clase (por ejemplo, se eliminas "Fresas" e despois intentas acceder a elas para editalas co link anterior)
    }
    res.render('products/edit', { product })            //Verifica erro na resposta
    } catch(e) {
        next(e);
    }
})

app.put("/products/:id", async (req, res, next) => {
    try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true });
    res.redirect(`/products/${product._id}`);
    } catch (er) {
        next(er);
    }
})

app.delete("/products/:id", async (req, res) => {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    res.redirect("/products");
})


//ERROR HANDLING
app.use((err, req, res, next) => {
    const { status = 500, message = "This doesnt work noob dev!" } = err;
    res.status(status).send(message);
})

//ERROR HANDLING:
//Usando unha funcion personalizada para sustituir a try catch:
function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e))
    }
}

app.get('/products', wrapAsync(async (req, res, next) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category })
        res.render('products/index', { products, category })
    } else {
        const products = await Product.find({})
        res.render('products/index', { products, category: 'All' })
    }
}))

//HANDLE ERRORS MONGOOSE
const handleValidationErr = err => {
    console.dir(err);
    return new AppError(`Validation Failed...${err.message}`, 400)
}

app.use((err, req, res, next) => {
    console.log(err.name);
    if (err.name === 'ValidationError') err = handleValidationErr(err)
    next(err);
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong' } = err;
    res.status(status).send(message);
})

app.listen(3000, () =>{
    console.log("Listening on port 3000");
})