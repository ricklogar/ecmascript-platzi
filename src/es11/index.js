//-------------Dynamic import---------------/
//Vamos a realizar la importacion dinamica de un objeto para poder llamar piezas de codigo que optimizaran el codigo
const button = document.getElementById("btn");

button.addEventListener("click", async function () { //permite escuchar algun cambio que se hace sobre el boton
    const module = await import("./file.js")//import dentro del llamado
    module.hello();
});








//CLASE 12
//-------------BigInt---------------/
//Permite trabajar con numeros mayores a 2^53 y tiene dos formas de trabajo:

// 1- Añadiendo una "n" al final activas el big int en el valor
const aBigNumber = 9007199254740991n;

// 2- Con el metodo BigInt activas el valor
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);



//-------------Promise All Settled---------------/
//Nps devuelve una promesa que se resuelve cuando todas las demas promesas se cumplen o se rechazan
//Promise all va a ser rechazada en el momento en el que se rechace alguna de estas promesas, con all settled no le importa el estado de las promesas
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3]) //En un arreglo, se pasan todas las promesas resueltas
.then(response => console.log(response));




//-------------Global this---------------/
//Proporciona una forma estandar de acceder al valor global

console.log(window);


console.log(globalThis);





//-------------Null Operator---------------/
//?? Operador nulo, operador logico nos devuelve su operando del lado derecho cuando el operador del lado izquierdo es nulo o indefinido y de lo contrario devuelve su operador del lado izquierdo
const fooo = null ?? 'default string';
console.log(fooo);

const fooo1 = 'asd' ?? 'default string';
console.log(fooo1); //Pone el valor primero pq no es nulo





//-------------Optional chaining---------------/
//Vamos a poder trabajar diferentes niveles de arreglos y objetos
const user = {};//Pensando en traer cosas de una API

console.log(user?.profile?.email); //Agreagamos ? despues de un valor, vamos a leer hasta este nivel dentro de este objeto pero no rompas mi aplicacion

//Ejemplo
if(user?.profile?.email){
    console.log('email')
} else {
    console.log('fail');
} //Como no tengo correo, va a pasar a fail



