const express = require("express");
const router = express.Router();//Usamos o router

//creamos as rutas. Como o router xa usa /shelters non fai falta poñelo nas rutas
router.get("/", (req, res) => {
    res.send("All shelters");
});

router.get("/:id", (req, res) => {
    res.send("One shelter");
});

router.post("/", (req, res) => {
    res.send("New shelter");
});

router.get("/:id/edit", (req, res) => {
    res.send("Edit one shelter");
});

module.exports = router;//exportamos as rutas