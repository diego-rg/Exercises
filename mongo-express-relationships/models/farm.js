const mongoose = require("mongoose");
const Product = require("./product");//requerimos o schema de product para poder eliminar o farm e os productos de cada farm

const farmSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Farm must have a name!"]
    },
    city: {
        type: String
    },
    email: {
        type: String,
        required: [true, "You must submit an email!"]
    },
    products: [//añadimos relación cos productos que ten
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ]
});

//Uso do middleware de mongoose para eliminar o farm e os productos de un farm
farmSchema.post("findOneAndDelete", async function (farm) {
    if(farm.products.length)  {
        const res = await Product.deleteMany({ _id: { $in: farm.products } });
    }
})

const Farm = mongoose.model("Farm", farmSchema);

module.exports = Farm;