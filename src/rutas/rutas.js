const express = require('express');
const hotelRouter = require('./hoteles');

const router = express.Router();

router.use('/hoteles' , hotelRouter);//jorge hizo esto  
//router.use('/hospitales' , );
//router.use('/restaurante' , );

module.exports = router; 