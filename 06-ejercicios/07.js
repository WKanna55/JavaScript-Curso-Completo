/**
 * Ejercicio 07: Agregar ID
 * Tomar un objeto que se le agregue la propiedad de ID
 * que se genera de manera aleatorio
 */
// Estructura
// let objeto = { name: 'Nicolas'};
// function agregarId(obj){
// }
// agregarId(objeto);
// console.log(objeto);

// resolucion

let objeto = { name: 'Nicolas'};
function agregarId(obj){
  
  if ( typeof obj === 'object'){
    obj.id = Math.random();
  }
  return obj;
}

agregarId(objeto);
console.log(objeto);
