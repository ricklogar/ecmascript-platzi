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





//Clase 8
const helloWorld = () => {  //Promesa
    return new Promise((resolve, reject) => {
        (true) //Se puede cambiar por false para ver el error
            ? setTimeout(() => resolve('Hellow World'),3000) // ? nos dice que si se cumple nos demoraremos 3 segundos en entregar
            : reject(new Error('Test Error')) //El : viene con el reject, esto cuando la promesa no se cumple
    })
};

//Async marca una funcion como asincrona y su valor de retrono es una promesa
const helloAsync = async () => {
    const hello = await helloWorld();//Await pone en espera la ejecucion de la funcion mientras la promesa se resuelve
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => { //Para manejo de errores en este tipo de funciones
    try{
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
    //con try escribimos el codigo que esperamos se ejecute, en caso contrario, el codigo de catch sera el que se ejecutara
}

anotherFunction();