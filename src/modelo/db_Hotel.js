const Hotel = require('./modeloHotel');

const modelo = {}

modelo.documentos = [
    new Hotel('hotel_00001' ,'Hotel Sol De Oriente', 'Hotel 5 estrellas ubicado en el norte de la ciudad de Guayaquil','Av. francisco de Orellana', '(04)243-4671', 'soloriente@gmail.com', 'https://ftsolutions.com.ec/wp-content/uploads/2019/05/Hotel-Sol-de-Oriente-Logo-Header.png', 'https://cf.bstatic.com/xdata/images/hotel/max500/28025407.jpg?k=a7955e954e9c69ed9161773daf86255530219d337dad0fdd4e097938793b7f09&o=&hp=1', '30 km de aqui', '112'),
    new Hotel('hotel_00002' ,'Hotel Wyndham', 'Explora la vibrante cultura artística local de Las Peñas. Reserva en Wyndham Guayaquil! Disfruta de nuestra piscina en la terraza, spa y gimnasio',' Numa Pompilio Llona S-N, Guayaquil 090013', '(04) 371-7800', 'soloriente@gmail.com',  'https://e7.pngegg.com/pngimages/127/411/png-clipart-wyndham-hotels-resorts-ramada-wyndham-hotel-group-llc-wyndham-destinations-hotel-blue-text.png', 'https://static11.com-hotel.com/uploads/hotel/16156/photo/hotel-wyndham-guayaquil_15499710495.jpeg', '20 km de aqui', '112'),
];

module.exports = modelo; 

