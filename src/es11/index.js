//-------------Dynamic import---------------/
//Vamos a realizar la importacion dinamica de un objeto para poder llamar piezas de codigo que optimizaran el codigo
const button = document.getElementById("btn");

button.addEventListener("click", async function () { //permite escuchar algun cambio que se hace sobre el boton
    const module = await import("./file.js")//import dentro del llamado
    module.hello();
});