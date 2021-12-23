const mongoose = require('mongoose');

const Product = require("./models/product");

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!")
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR!")
        console.log(err)
    })


    //Insertar un a un na db
// const p = new Product({
//     name: "Red Grapes",
//     price: 0.95,
//     category: "fruit"
// })
// p.save()
//     .then(p =>{
//         console.log(p);
//     })
//     .catch(e =>{
//         console.log(e)
//     })

//Insertar varos co many
const seedProducts = [
    {
    name: "Banana",
    price: 1.95,
    category: "fruit"
    },
    {
    name: "Potato",
    price: 0.95,
    category: "vegetable"
    }
];
Product.insertMany(seedProducts)
.then(res => {
    console.log(res)
})
.catch(e => {
    console.log(e)
})
