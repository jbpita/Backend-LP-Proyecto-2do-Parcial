const Hotel = require('./modeloHotel');

const modelo = {}

modelo.documentos = [
    new Hotel('hotel_00001' ,'Hotel Sol De Oriente', 'Hotel 5 estrellas ubicado en el norte de la ciudad de Guayaquil','Av. francisco de Orellana', '(04)243-4671', 'soloriente@gmail.com', 'logoSolDeOriente', 'SolDeOriente', '30 km de aqui', '112'),
    new Hotel('hotel_00002' ,'Hotel Wyndham', 'Explora la vibrante cultura artística local de Las Peñas. Reserva en Wyndham Guayaquil! Disfruta de nuestra piscina en la terraza, spa y gimnasio',' Numa Pompilio Llona S-N, Guayaquil 090013', '(04) 371-7800', 'soloriente@gmail.com', 'logoSolDeOriente', 'SolDeOriente', '20 km de aqui', '112'),
];

module.exports = modelo; 

