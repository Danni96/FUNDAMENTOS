function saludar(nombre) {
    // console.log(arguments);
    // console.log('Hola mundo ' + nombre );
    return [1, 2, 3, 4, 5];
    // Etso nunca se va ejecutar despues del return
    console.log('soy un codifo despues del return');
};

const saludar2 = function( nombre){
    console.log('hola mundo ' + nombre);
};

const saludarFlecha = () =>{
    console.log('Hola Flecha '  );
}

const saludarFlecha2 = (nombre) =>{
    console.log('Hola Flecha ' + nombre );
}

const retornoSaludar = saludar('Dannis', 40, true, 'SV');
// saludarFlecha2('Dannis');
// console.log(retornoSaludar[0]);


function sumar(a, b){
    return a + b;
}

// const sumar2 = (a,b) => {
//     return a + b;
// }

// simplificar cuando es solo una linea
const sumar2 = (a,b) => a + b;

// console.log( sumar2(2,2) );


function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());