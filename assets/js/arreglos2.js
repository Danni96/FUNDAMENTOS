let juegos = ['Mario', 'Kratos', 'Fifa', 'Minecraft'];
console.log('Largo: ', juegos.length);

let primero = juegos[0];
// saber el ultimo elemento de un arreglo
let ultimo = juegos[juegos.length - 1];

console.log({primero, ultimo});


juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

let nueva = juegos.push('F-Zero');
console.log({nueva, juegos});

nueva = juegos.unshift('Star');
console.log({nueva, juegos});

let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

let pos = 1;
console.log(juegos);
let borrados = juegos.splice(pos, 2);
console.log({borrados, juegos});

let nuevaPos = juegos.indexOf('Fifa');
console.log({nuevaPos});

