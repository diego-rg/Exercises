const mongoose = require("mongoose");//req mongoose

mongoose.connect('mongodb://localhost:27017/mongoRelat', { useNewUrlParser: true, useUnifiedTopology: true })//cnect mongoose
    .then(() => {
        console.log("MONGO CONNECTION OPEN!")
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR!")
        console.log(err)
    })

const userSchema = new mongoose.Schema({//mongoose schema
    first: String,
    last: String,
    adress: [
        {
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
});

const User = mongoose.model("User", userSchema);

const makeUser = async() => {//crear
    const u = new User({
        first: "Pepe2",
        last: "Popo"
    })
    u.adress.push({
        street: "Flores",
        city: "Madrid",
        state: "España",
        country: "Iberia"
    })
    const res = await u.save();
    console.log(res);   
};

makeUser();

const secondAdress = async (id) => {//añadir adress
    const user = await User.findById(id);
    user.adress.push({
        street: "Piedras",
        city: "Bilbao",
        state: "Euskadi",
        country: "Iberia"
    })
    const res = await user.save();
    console.log(res);
}

secondAdress("61c8c33b86f897c556d17ac0");