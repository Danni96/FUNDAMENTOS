const personaje = {
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

delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// personaje = true;
console.log(personaje);

Object.freeze(personaje);
personaje.dinero = 1000000;

personaje.direcion.ubicacion = 'costa Rica';
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades, valores);