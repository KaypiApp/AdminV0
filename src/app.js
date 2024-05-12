const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(require('./routes/lineasRoute'));
app.use(require('./routes/puntosEstrategicosRoute'));
app.use(require('./routes/notificacionesRoute'))

module.exports = app;