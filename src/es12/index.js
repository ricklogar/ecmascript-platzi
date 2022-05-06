//CLASE 13
//-------------Replace all---------------/

//Funcionria como para intercambiar palabras no debidas en la aplicacion

//antes de es12
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";
const replacedString = string.replace("JavaScript", "Python"); //Solo encontraba el primer valor y lo reemplazaba
console.log(replacedString);

//con es12
const replacedString2 = string.replaceAll("JavaScript", "Python"); //El primer valor es lo que quiero reemplazar y el segundo es con lo que lo voy a hacer
console.log(replacedString2);





//-------------Metodos privados---------------/
//Vamos a usarlos dentro de clases, no va a poder ser accedido por cualquier metodo

class Message{
    #show(val) { //se pone el # para hacer ele metodo privado y solo va a poder ser accedido por la clase
        console.log(val);
    };
    // get #add(val){   //asi para los getter y asi para los setters
    //     ...
    // }
}

const message = new Message();
message.show('Hola!');




//-------------Promise Any---------------/
//Es un objeto global de primise cuyo argumento va a ser la forma de un array de promesas que vamos a pasarle, gestionando y capturando la respuesta de la primera que sea resuelta de forma satisfactoria


const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));




//-------------WeakRef---------------/
//Un objeto weak ref le permite mantener una referencia debil a otro objeto sin evitar que este objeto sea recogido por el garbage collector
class AnyClass {
    constructor(element){
        this.ref = new WeakRef(element) //referencia debil para este recurso
    }
//  {...}
}




//-------------Nuevos operadores logicos, and logico, or logico y anulacion logica---------------/

//And
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

//or
let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

//nulos
let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);


