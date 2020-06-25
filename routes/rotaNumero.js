const express = require('express');
const numeroController = require("../controller/numeroController");

const router = express.Router();

router.get("/numeroaleatorio", numeroController.criaNumero);

module.exports = router;