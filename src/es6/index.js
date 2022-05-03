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