const Hospital = require('./modeloHospital');

const modelo = {}

modelo.documentos = [
    new Hospital('hospital_00001' ,'Hospital del IESS', 'Hospital ubicado en la avenida del bombero','Av. del Bomber', '(04)254-6589', 'iess.com.gob.ec', 'logoIESS', 'IESS', '20 Km de aqui', '231'),
    new Hospital('hospital_00002' ,'Hospital Teodoro Maldonado Carbo', 'Hospital ubicado en la avenida 25 de julio','Av. 25 de Julio', '(04)297-6410', 'iess.com.gob.ec', 'logoIESS', 'IESS', '10 km de aqui', '213'),
];

module.exports = modelo; 