/*function crearPersona(nombre, apellido){
    return {
        nombre: nombre,
        apellido: apellido
    }
}
*/



// Reduciendo la funcion anterior
/* function crearPersona(nombre, apellido){
    return {
        nombre,
        apellido
    }
}
*/


// Ahora como una funcion de flecha

const crearPersona = (nombre, apellido) => ({nombre, apellido});


const persona = crearPersona( 'Dannis', 'Sanchez' );
console.log( persona );

function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos2 = ( edad, ...args) =>{
    // console.log({edad, args});
    return args;
}

const [casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Dannis', 'hola');
console.log({casado, vivo, nombre, saludo});


const { apellido: nuevoApellido } = crearPersona( 'Dannis', 'Sanchez' );
console.log({nuevoApellido});



const tony = {
    nombre: 'Dannis',
    codeName: 'Ironman',
    vivo: false,
    trajes: ['Mark I', 'Mark V', 'HulkBusster'],  
};

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 20, trajes }) => {
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
}

imprimePropiedades(tony);