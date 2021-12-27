const mongoose = require("mongoose");//req mongoose

mongoose.connect('mongodb://localhost:27017/mongoRelat', { useNewUrlParser: true, useUnifiedTopology: true })//cnect mongoose
    .then(() => {
        console.log("MONGO CONNECTION OPEN!")
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR!")
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ["Primavera", "Verano", "Otoño", "Invierno"]
    }
});

const farmSchema = new mongoose.Schema({
    name: String,
    city: String,
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }]//Schema ao que referencia para sacar datos de productos. Permite usar logo populate
});

const Product = mongoose.model("Product", productSchema);
const Farm = mongoose.model("Farm", farmSchema);

// Product.insertMany([
//     { name: "Melón", price: 3, season: "Verano" },
//     { name: "Manzana", price: 4, season: "Otoño" },
//     { name: "Kiwi", price: 5, season: "Invierno" }
// ])

// const makeFarm = async () => {//Pasa a referenciaa ao producto dentro da farm
//     const farm = new Farm({ name: "Montes", city: "Ourense" });
//     const productOne = await Product.findOne({ name: "Melón" });
//     farm.products.push(productOne);
//     await farm.save();
//     console.log(farm);
// };

// makeFarm();

// const addProduct = async () => {
//     const farm = await Farm.findOne({ name: "Montes" });
//     const prodOne = await Product.findOne({ name: "Kiwi" });
//     farm.products.push(prodOne);
//     farm.save();
//     console.log(farm);
// };

// addProduct();


//POPLATE permite pasar TODOS os datos da referencia que hai (en vez de poñer a id do producto ao que se refire, pasa todos os datos)
Farm.findOne({ name: "Montes"})
    .populate("products")
    .then(farm => console.log(farm));