const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/shopApp")
    .then(() => {
        console.log("Connected to the mongoDB");
    })
    .catch(err => {
        console.log("Error: cant connect to the mongoDB");
        console.log(err)
    });

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
            type: Number,
        },
    onSale: {
        type: Boolean,
        default: false
    }
});

// Creamos un instance method ANTES DE MODEL
// productSchema.methods.greet = function () {
//     console.log("Boas!!!");
// };
//Creamos un novo producto en node:     const p = new Product({name: "bike", price: 100})
//E ejecutamos p.greet() para usar o método

//Método para poñer/quitar da venta un producto:
productSchema.methods.toggleOnSale = function() {
    this.onSale = !this.onSale;
    return this.save();
};

const Product = mongoose.model("Product", productSchema);//MODEL

//Método para poñer/quitar da venta un producto:
const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    console.log(foundProduct)
};