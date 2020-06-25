const express = require('express');
const rotaInversoNome = require("./routes/rotaInverso");
const rotaNumber = require("./routes/rotaNumero");
const rotaNome = require('./routes/rotaNome');

const app = express();

app.use('/rotaInverso', rotaInversoNome);
app.use('/rotaNumero', rotaNumber);
app.use('/rotaNome', rotaNome);

app.listen(5000);