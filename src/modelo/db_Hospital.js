const Hospital = require('./modeloHospital');

const modelo = {}

modelo.documentos = [
    new Hospital('hospital_00001' ,'Hospital del IESS', 'Hospital ubicado en la avenida del bombero','Av. del Bomber', '(04)254-6589', 'iess.com.gob.ec', 'https://www.htmc.gob.ec/wp-content/uploads/2020/08/LOGO-MINI.png', 'https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/TA3A6BM325FNRKF7TP4HLPUIP4.jpg', '20 Km de aqui', '231'),
    new Hospital('hospital_00002' ,'Hospital Teodoro Maldonado Carbo', 'Hospital ubicado en la avenida 25 de julio','Av. 25 de Julio', '(04)297-6410', 'iess.com.gob.ec', 'https://www.htmc.gob.ec/wp-content/uploads/2020/08/LOGO-MINI.png', 'https://www.veolia.com/latamib/sites/g/files/dvc3286/files/image/2020/11/HISTORIA-HTMC.jpg', '10 km de aqui', '213'),
    new Hospital('hospital_00003' ,'Hospital Luis Vernaza', 'Hospital ubicado en la calle Loja 700','Loja 700', '(04)243-6439', 'hospitalverna', 'https://achpe.org.ec/wp-content/uploads/2018/01/hospital-luis-vernaza.jpg', 'https://www.ecuavisa.com/binrepository/800x532/0c0/0d0/none/11705/UUGG/hospital_luis_vernaza_EC657551_MG1006945.jpg', '43 Km de aqui', '132'),
    new Hospital('hospital_00004' ,'Hospital Universitario', 'Hospital ubicado en Urdenor 1','Urdenor 1', '(04)254-5432', 'hug.gob.ec', 'https://www.htmc.gob.ec/wp-content/uploads/2020/08/LOGO-MINI.png', 'https://live.staticflickr.com/5504/13939407358_60733879dd_b.jpg', '23 km de aqui', '87'),
    new Hospital('hospital_00005' ,'Hospital Abel Gilbert Ponton', 'Hospital ubicado en la calle 29 y O\'connors','Calle 29 y O\'connors', '(04)276-5301', 'hagp.gob.ec', 'https://lh3.googleusercontent.com/proxy/0jsMSzMqfZwqmVK0yBugJWZRIj8BNq6mjkKgUp3ZXD7yKFm4pj9OSg0xdGq9w3LimADKKcbYxqCuezi-HskQXiucCsCLVfV-IN71ckU0N3iaInbZ8MS1e0nBYJknyNM2OCo', 'https://www.edicionmedica.ec/contenido/images/Covid19%20Abel%20Gilbert%20Pont%C3%B3n%281%29.jpg', '34 Km de aqui', '123'),
    new Hospital('hospital_00006' ,'Hospital Municipal Bicentenario', 'Hospital ubicado en Pedro Pablo Gomez Tama','Pedro Pablo Gomez Tama', '(04)265-5432', 'iess.com.gob.ec', 'https://pbs.twimg.com/ext_tw_video_thumb/1298690486153220101/pu/img/Szf6M2IXwyK6JoQS.jpg', 'https://pbs.twimg.com/media/EYZsHlHXQAM1qen.jpg', '78 km de aqui', '45'),
    new Hospital('hospital_00007' ,'Hospital Leon Becerra', 'Hospital ubicado en Eloy Alfaro 2402','Eloy Alfaro 2402', '(04)244-5757', 'bspi.org', 'https://asisken.com/wp-content/uploads/2021/04/LOGO-LEON-BECERRA.png', 'https://www.bspi.org/images/hlb/001.jpg', '56 Km de aqui', '90'),
    new Hospital('hospital_00008' ,'Hospital General Monte Sinai', 'Hospital ubicado en C. 22 NO','C. 22 NO', '(04)381-0400', 'salud.gob.ec', 'https://www.htmc.gob.ec/wp-content/uploads/2020/08/LOGO-MINI.png', 'https://www.salud.gob.ec/wp-content/uploads/2018/07/MonteSinai.jpg', '20 km de aqui', '89'),
];

module.exports = modelo; 