const { Module } = require('module');
const {db , storage} = require('../confirguracion/configuracion_firebase');

const controlador = {};

controlador.subirDocumento = (coleccion , {documentos}) => {
    //console.log(documentos);
    documentos.map(doc => db.collection(coleccion).doc(doc.id).set(Object.assign({}, doc)));
}


controlador.cargarDocumentos =  (coleccion ,res ) => {
/*
    const peticion = async (coleccion) => {
        const obj = await db.collection(coleccion).get();
        const {docs} = obj;
        const array = docs.map( doc => ({id: doc.id , datos: doc.data()}));
        return array;
    }

    return peticion(coleccion);
*/   //res.status(200)
    db.collection(coleccion).get().then((querySnapshot) => {
        //console.log(querySnapshot);
        const json = {
            coleccionName: coleccion,
            datos: []
        }
        querySnapshot.forEach((doc) => {
            console.log( doc.data());
            json.datos.push(doc.data())
        });
        res.status(200).json(json);
    });
}



module.exports = controlador;