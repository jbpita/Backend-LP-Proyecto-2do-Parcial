const express = require('express');
const {inicializarDB} = require('./modelo/cargarDocumentos');
const apiRouter = require('./rutas/rutas');
const indexRouter = require('./rutas/index');
const cors = require('cors');

app = express();
//configuracion exprress
app.set("port" , process.env.PORT || 8000);


//middleware
app.use((req , res , next) => {

    res.header('Access-Control-Allow-Origin' , '*');

    res.header('Access-Control-Allow-Methods' , 'GET,PUT,POST,DELETE');

    next();

})
app.use(cors());
app.use('/', indexRouter);
app.use('/api', apiRouter );

//incializacion db
inicializarDB();

module.exports = app;