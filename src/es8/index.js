//Object.entries devuelve la clave y los valores de una matriz
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data); //Tranformar este objeto en una matriz.
console.log(entries);

console.log(entries.length); //Si queremos saber cuantos elementos posee nuestro arreglo




//Object.values devuelve los valores de un objeto a un arreglo.
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);




//Padding nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string como tal.
const string = 'hello';
console.log(string.padStart(7,'hi')); //Se anade al inicio la palabra hi
console.log(string.padEnd(12, ' -----')); //Se anade al final los guiones

//Podría servir del lado del front, para mostrar una estructura de elementos.
console.log('food'.padEnd(12, ' -----'));


//Trailing comas, establece que puede haber mas valores o no
const data= {
    front:'Rick', 
    back: 'Rocoso', // Pueden existir mas valores y no pasa nada si se deja ahi la ,
}