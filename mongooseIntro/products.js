const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/shopApp")
    .then(() => {
        console.log("Connected to the mongoDB");
    })
    .catch(err => {
        console.log("Error: cant connect to the mongoDB");
        console.log(err)
    });

//Schema Completo, con requisitos. Require nome obligatorioamente neste caso
//Se se inclúe información extra que non sale no Schema, non da erro pero tampouco pasa o dato extra
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
          type: Number,
          min: [0, "Price must be positive!"]//Crea mensaxe de erro ademáis da restricción se o precio é negativo//Opción1
     },
    size: {
        type: String,
        enum: ["S", "M", "L"]//Valida entre esas opcións
    }
});

const Product = mongoose.model("Product", productSchema);

//Se non se pon un nome, da o erro:         Path `name` is required.        Según o noso código línea34 e mongoose.
const bike = new Product({name: "mountain Bike BH Pro", price: -600});//Se se inclúe información extra que non sale no Schema, non da erro pero tampouco pasa o dato extra
bike.save()
    .then(data =>{
        console.log("New product added");
        console.log(data);
    })
    .catch(err => {
        console.log("Error: cant add the product");
        console.log(err);
        //Opción2: // console.log(err.errors.name.properties.message);//saca a mensaxe de erro de mongoose
    });

//Se fas un update, como findOneAndUpdate, hay que poñer:     runValidators: true     para que volva a ter en conta as restricións! Senón update ignóraas