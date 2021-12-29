const express = require("express");
const router = express.Router();//Usamos o router

//ejemplo middleware que se aplicará solo a estas rutas
router.use((req, res, next) => {
    if(req.query.isAdmin) {
        next();
    }
    res.send("You are not an admin!");
});

router.get("/", (req, res) => {
    res.send("All cats");
});

router.get("/:id", (req, res) => {
    res.send("One cat");
});

router.post("/", (req, res) => {
    res.send("New cat");
});

router.get("/:id/edit", (req, res) => {
    res.send("Edit one cat");
});

module.exports = router;//exportamos as rutas