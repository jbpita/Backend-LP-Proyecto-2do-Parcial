const modeloHotel = require('./db_Hotel');
const controlador = require('../controlador/cargaDatos');
const {storage} = require('../confirguracion/configuracion_firebase');


const inicializarDB  = () => {
    controlador.subirDocumento('HOTELES' , modeloHotel);  
}
 
module.exports.inicializarDB = inicializarDB;