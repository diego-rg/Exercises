const express = require("express");
const app = express();
const shelterRoutes = require("./routes/shelter");//requerimos as rutas de shelter.js
const dogsRoutes = require("./routes/dogs");
const catsRoutes = require("./routes/cats");

app.use("/shelters", shelterRoutes);//Activamos o uso das rutas de shelter.js
app.use("/dogs", dogsRoutes);
app.use("/cats", catsRoutes);

app.listen(3000, () => {
    console.log("Serving app in localhost 3000");
});