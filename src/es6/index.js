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
