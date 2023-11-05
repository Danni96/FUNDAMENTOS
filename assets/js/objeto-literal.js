let personaje = {
    nombre: 'Dannis',
    codeName: 'Ironman',
    vivo: false,
    edad: 27,
    coords: {
        lat: 34.034,
        lat: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'HulkBusster'],
    direcion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    }

};

console.log(personaje);
console.log('Nombre: ', personaje.nombre);
console.log('Nombre: ', personaje['nombre']);
console.log('Edad: ', personaje.edad);

console.log('Coords: ', personaje.coords);
console.log('Lat: ', personaje.coords.lat);


console.log('No. Trajes: ', personaje.trajes.length);
console.log('Ultimo Traje: ', personaje.trajes[personaje.trajes.length -1]);

const x = 'vivo';

console.log('Vivo', personaje[x]);