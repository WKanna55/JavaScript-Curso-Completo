/**
 * Ejercicio 01:
 * Construir una funcion que reciba un array de listado de numeros 
 * negativos o positivos, y deberia devolvernos los numeros absolutos
 * del array
 */
// estructura
// function paraAbsoluto(arr) {
// }
// const ns = [-2, 3, 5, -15];
// const absolutos = paraAbsoluto(ns);
// console.log(absolutos);

// Resolucion:

function paraAbsoluto(arr) {
  return arr.map(elemento => Math.abs(elemento));
}

const ns = [-2, 3, 5, -15];
const absolutos = paraAbsoluto(ns);
console.log(ns, absolutos);
