// Existen situaciones donde tenemos que combinar y dividir arrays
//

/**
 * Combinar 2 arrays:
 * usamos el metodo .concat()
 * concat se usa de un array a otro
 * no midifica ambos arrays, asi que se tiene que asignar a otra variable
 */
let arr1 = [1, 2];
let arr2 = [3, 4];
let combinados = arr1.concat(arr2);
console.log(arr1, arr2, combinados);

/**
 * Dividir un array:
 * usamnos el metodo .slice()
 * este metodo tiene 2 argumentos desde donde empieza a dividirse 
 * el array y donde termina de dividirse, este debe ser uno
 * de los indices del array
 */

let divididos = combinados.slice(1, 3);
let divididos2 = combinados.slice(2);
console.log(divididos, divididos2);

// tambien con slice se puede crear una copia del array objetivo
let copia = combinados.slice();
console.log(copia, combinados);
console.log(copia === combinados); // no es una referencia, es una copia