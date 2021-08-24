const modeloHotel = require('./db_Hotel');
const modeloHospital = require('./db_Hospital');

const controlador = require('../controlador/cargaDatos');
const {storage} = require('../confirguracion/configuracion_firebase');


const inicializarDB  = () => {
    controlador.subirDocumento('HOTELES' , modeloHotel);
    controlador.subirDocumento('HOSPITALES' , modeloHospital); 
}
 
module.exports.inicializarDB = inicializarDB;