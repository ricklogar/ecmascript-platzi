//--------------method flat---------------/
//devolver una matriz con una submatriz aplanada, 
//recibe como argunmento la profundidad
let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2));


//-------------flatMap---------------------------/
//mapear cada elemento, luego pasarle una funcion y aplanar
let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));




//----------------trim---------------------------/
//Permite eliminar espacios en blanco de un string
let hello = '         hello world';
console.log(hello);
console.log(hello.trimStart());

//Opcion para eliminar espacios al final del texto
let hello = 'hello world          ';
console.log(hello);
console.log(hello.trimEnd());





//-------------optional catch biding-------------/
//Podemos pasar de forma opcional el paramatro de error al catch
try {
    
} catch /*(error) ya no es necesario colocarlo*/ {
    error
}




//-------------fromEntries----------------------/
//Va a transformar clave valor en un objeto
// array to object
let entries = [["name", "oscar"], ["age", 32]]; 
console.log(Object.fromEntries(entries))



//-------------symbol object--------------------/
//Permite acceder a una descripcion
let mySymbol = `My Symbol description`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);