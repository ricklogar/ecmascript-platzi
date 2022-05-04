//Default Params
//Antes de es6
function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

//es6
function newFunction2(name = 'oscar', age=32, country = 'MX'){ //estos son los parametros por defecto
    console.log(name, age, country);
}

newFunction2();  //Toma los valores por defecto
newFunction2('Ricardo', '23', 'CO');



//---------------------Concatenacion

//Antes de es6
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);




//Clase 3-------

//Multilinea
//antes de ES 6
let lorem = "Qui consequatur, Commodi. Ipsum vel duis yet minima \n"
+ "otra frase epica que necesitamos."


//Con ES 6
let lorem2 = `otra frase que necesitamos
ahora es otra frase
`;

console.log(lorem);
console.log(lorem2);


//Desestructuracion de elementos
//Sin ES6
let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}
console.log(person.name, person.age);

//Ahora con ES6
let {name,age}=person;
console.log(name, age);



//Operador de propagacion (spread operator)
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

//Sin ES6
let education1 =['Oscar', 'Julian', 'Ricardo','Valeria', 'Yesica', 'Camila']

//Con ES6
let education2 = ['David', ...team1, ...team2];

console.log(education1, education2);


//
//var esta disponible de forma global
//let solo disponible en el scope
{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);
//console.log(globalLet);

//const permite establecer una variable a la cual no se le puede reasignar un valor, es una constante que nunca va  acambiar su valor
const a='b';
a = 'a';
console.log(a);



//CLASE 4

//antes de ES 6
let name = 'oscar';
let age = 32;

obj = { name: name, age: age};
//Con ES6
obj2 = {name, age};
console.log(obj2);


//Arrow functions

const names = [
    {name: 'Oscar', age: 32},
    {name: 'Yesica', age: 27}
]
let listOfNames = names.map(function (item){  //recibe una funcion anonima
    console.log(item.name);
})

//Con ES6
let listOfNames2 = names.map(item => console.log(item.name));  // con => establecemos que va a ser una funcion anonima que va a retornar el console

const listOfNames3 = (name, age, country) => {
    ...
}

const listOfNames4 = name => { //cuando solo voy a usar un elemento
    ...
} 

const square = num => num * num;


//Asincronismo, Promesas, algo va a pasar, en algun momento va a suceder algo que establecemos
const helloPromise = () => {
    return new Promise((resolve, reject) => { //resolve es promesa resuelta, reject es promesa rechazada
        if(false){ //intercambiar con true para ver resultados
            resolve('Hey!, todo bien');
        } else{
            reject('Ups!!');
        }
    });
}

helloPromise() //Ejecuta promesa
.then(response => console.log(response)) //Then permite obtener la respuesta (puede haber mas de uno)
.then(() => console.log('hola'))
.catch(error => console.log(error)); //Catch muestra el error en caso de que no se pueda cumplir la promesa







//Clase 5
//Clases
class calculator{
    constructor(){//constructor es el metodo para inicializar la clase
        this.valueA = 0;//asignar las variables que vana  estar en un scope global
        this.valueB =0;
    }
    sum(valueA, valueB){
        this.valueA = valueA; //Lo igualamos al valor que estamos recibiendo
        this.valueB = valueB;
        return this.valueA + this.valueB; //Regresa la suma
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));


//Modulos (Import y export)

// import { hello } from './module.js';  //Asi lo hizo el profe y no funciono
// hello();

//importacion con nodejs
const hola = require('./module');
console.log(hola());


//Generadores, suele usarse en fibonacci
//Los generadores son una Funcion especial que retorna una serie de valores segun el algoritmo definido

function* helloWorld(){
    if(true){
        yield 'Hello, '; //yield permite retornar algo y guarda el estado de forma interna
    }
    if (true){
        yield 'World'; //Segundo elemento que va a ser ejecutado cuando sea ejecutado el otro valor
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value); //Con next va a mostrar el siguiente valor
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);