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
    res.send("All dogs");
});

router.get("/:id", (req, res) => {
    res.send("One dog");
});

router.post("/", (req, res) => {
    res.send("New dog");
});

router.get("/:id/edit", (req, res) => {
    res.send("Edit one dog");
});

module.exports = router;//exportamos as rutas