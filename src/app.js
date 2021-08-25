const express = require('express');
const {inicializarDB} = require('./modelo/cargarDocumentos');
const apiRouter = require('./rutas/rutas');
const indexRouter = require('./rutas/index');

app = express();
//configuracion exprress
app.set("port" , process.env.PORT || 8000);


//middleware

app.use('/', indexRouter);
app.use('/api', apiRouter );

//incializacion db
inicializarDB();

module.exports = app;