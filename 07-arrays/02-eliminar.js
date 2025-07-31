// eliminar elementos de un array
const letras = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(letras);

// quitar elementos del final del array con .pop()
// este tambien nos puede devolver el elemento del final
// una vez quitado
const final = letras.pop();

console.log(letras, final);

// eliminar el primer elemento de un array
// usamos .shift()
// tambien nos puede devolver el elemento que se elimina
const comienzo = letras.shift();

console.log(letras, comienzo);

// eliminar elementos entre medio o una pos especifica de un array
// usamos .splice() esto sabiendo el indice
// si queremos eliminar 2 elementos apartir de 'c' hasta ahora seria el indice 2
letras.splice(1, 2)
console.log(letras);