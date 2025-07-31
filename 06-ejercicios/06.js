/**
 * Ejercicio 06: Crear Copias
 * Crear una funcion que copie un objeto que pasemos
 * no usar ... ni Object.assign, ni ninguna funcion de js
 * para crear copias
 */
//estructura
// let obj1 = {id: 1, name: 'Chanchito'};
// function crearCopia(obj){
// }
// let obj2 = crearCopia(obj1);
// console.log({ obj1, obj2});
// console.log((obj1 === obj2));

// Resolucion:

let obj1 = {id: 1, name: 'Chanchito'};

function crearCopia(obj){
  let newObjeto = {};
  for (let prop in obj){
    newObjeto[prop] = obj[prop];
  }
  return newObjeto;
}
let obj2 = crearCopia(obj1);

console.log({ obj1, obj2});
console.log((obj1 === obj2));
