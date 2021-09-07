const Hospital = require('./modeloHospital');

const modelo = {}

modelo.documentos = [
    new Hospital('hospital_00001' ,'Hospital del IESS', 'Hospital ubicado en la avenida del bombero','Av. del Bomber', '(04)254-6589', 'iess.com.gob.ec', 'https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/TA3A6BM325FNRKF7TP4HLPUIP4.jpg', 'https://www.htmc.gob.ec/wp-content/uploads/2020/08/LOGO-MINI.png', '20 Km de aqui', '231'),
    new Hospital('hospital_00002' ,'Hospital Teodoro Maldonado Carbo', 'Hospital ubicado en la avenida 25 de julio','Av. 25 de Julio', '(04)297-6410', 'iess.com.gob.ec', 'https://www.veolia.com/latamib/sites/g/files/dvc3286/files/image/2020/11/HISTORIA-HTMC.jpg', 'https://www.htmc.gob.ec/wp-content/uploads/2020/08/LOGO-MINI.png', '10 km de aqui', '213'),
];

module.exports = modelo; 