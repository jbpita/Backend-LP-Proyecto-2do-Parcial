const Restaurante = require('./modeloRestaurante');

const modelo = {}

modelo.documentos = [
    new Restaurante('restaurante_00001' ,'Mc Donald\'s', 'Lider en segmento de restaurante de servicio rapido. Se destaca por sus hamburguesas, papas fritas y sandwiches.','Av. Francisco de Orellana', '(04)293-4321', 'mcdonalds.com.ec', 'logoMcdonalds', 'mcdonalds', '10 km de aqui', '630'),
    new Restaurante('restaurante_00002' ,'Eddy\'s BBQ', 'Restaurante especializado en la preparacion de alitas de muchos sabores','Av. Victor Emilio Estrada', '(04)293-5439', 'eddysbbq.com', 'logoEddys', 'eddys', '23 km de aqui', '250'),
];

module.exports = modelo; 

