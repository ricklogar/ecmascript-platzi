//Operador de reposo, extrae propiedades de un objeto que auno no se ha construido
const obj = {
    name: 'Oscar',
    age: 32,
    country: 'MX'
};

let { name, ...all} = obj; //Desestructuramos el objeto, extrae name y todo lo demas lo encapsula en el valor all
console.log(name, all);

let { country, ...all2} = obj;  //Ayuda a extraer sin necesidad de crear otro objeto
console.log(all2);



//Utilizando las propiedades de propagacion, podemos unir uno o n elementos de objetos a un nuevo objeto
const obj = {
    name: 'Oscar',
    age: 32
};

const obj1 = {
    ...obj, //Une este objeto con el otro gracias al operador de propagacion (...)
    country: 'MX'
}

console.log(obj1); //obj1 ahora tiene todo lo de obj y lo suyo de obj1



//Promise.finally, podemos saber cuando termino el llamado y podemos ejecutar codigo segun sea el caso
const helloWorld = () => { //Promesa
    return new Promise((resolve, reject) => {
        (true)
        // ? resolve('Hello World')
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    });
};
        //Esto los vimos en la clase de async await
helloWorld() //Llamamos a la funcion
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizo')) //NUEVA FORMA





//Regex es utili para trabajar con fechas
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/; //[0-9] indican el rango de los numeros, mientras que {4} o {2} indican el numero maximo de digitos
const match = regexData.exec('2018-12-20');//Permite saber si los datos estan establecidos en el regex
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year, month, day);