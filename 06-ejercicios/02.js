/**
 * Ejercicio 02: factory function
 * 
 */

// **Estructura
// function createUsuario(name){
// }
// let user = createUsuario('Felipe')
// let user2 = createUsuario('Chanchito')
// console.log(user, user2);

// Resolucion

function createUsuario(name){
  return {
    //name: name,
    name, // se puede hacer mejor de esta manera
    id: Math.random(),
  }
}
let user = createUsuario('Felipe')
let user2 = createUsuario('Chanchito')
console.log(user, user2);