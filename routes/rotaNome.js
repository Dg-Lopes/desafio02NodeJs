const express = require('express');
const nomeController = require('../controller/nomeController');

const router = express.Router();

router.get('/nomealeatorio', nomeController.criaNome);

module.exports = router;