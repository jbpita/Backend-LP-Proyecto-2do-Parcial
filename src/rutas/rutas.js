const express = require('express');
const hotelRouter = require('./hoteles');
const hospitalRouter = require('./hospitales');

const router = express.Router();

router.use('/hoteles' , hotelRouter);//jorge hizo esto  
router.use('/hospitales', hospitalRouter); // Edwars realizó esto: tabla de hospital, su modelo, cargar documento, y ruta

module.exports = router; 