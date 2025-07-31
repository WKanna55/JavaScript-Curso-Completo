/**
 * Ejercicio 01: constructores
 * implementar el constructor de Usuario que reciba un parameotro name para ponerlo a 
 * su propiedad name, ademas un id pseudo aleatorio
 */

//    **Estructura
// function Usuario(name) {
// }
// let user = new Usuario('Felipe');
// let user2 = new Usuario('Chanchito');
//console.log(user, user2);

// Resolucion:

function Usuario(name) {
  this.name = name;
  this.id = Math.random()
}

let user = new Usuario('Felipe');
let user2 = new Usuario('Chanchito');
console.log(user, user2);
