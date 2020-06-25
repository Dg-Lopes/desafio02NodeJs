const express = require('express');
const inversoController = require('../controller/InversoController');

const router = express.Router();

router.get('/nomeinverso/:nome', inversoController.criaInverso);

module.exports = router