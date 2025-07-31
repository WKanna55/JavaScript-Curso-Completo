/**
 * Operacion Join
 * Hay mnomento donde queremos unir o separar nombres urls, etc
 */

// supongamos que queremos mostrar dentro de nuestra app
let arr1 = ['Nicolas', 'Chanchito', 'Felipe'];

// .join() pide un argumento serparador opcional, si no se pone estara todo junto
let mensaje = arr1.join(', ');

console.log(mensaje);

// ahora supongamos que no queremos mostrar los elementos juntos, sino
// separarlos en un array, para esto hay otro metodo, .split()
let saludo = "Hola mundo!! desde NZ";
// recibe un argumento para separar apartir de ese caracter
let dividido = saludo.split(" ");

console.log(dividido);

// ahora supongamos que queremos crear una url de lo anterior
console.log(dividido.join("-"));