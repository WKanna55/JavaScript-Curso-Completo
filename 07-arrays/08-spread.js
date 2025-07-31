/**
 * Operador spread : spread operator (...)
 * este operador nos sirve para combinar distintos arrays ded una forma mas
 * facil para leer y mas flexible
 * 
 * nueva funcionalidad de ECMA Script 2015
 * 
 * Tambien se vio en un ejercicio que separa un array en sus elementos
 */

let arr1 = [1, 2];
let arr2 = [5, 6];

// crea un nuevo arreglo el cual contiene el/los arrays que queremos 
// y hasta nuevos valores
let arr3 = [0, ...arr1, 3, 4, ...arr2, 7, 8];

console.log(arr3);

// una ventaja tambien es qque puede generar copias de los arrays

let arr4 = [...arr3];
arr3.pop();

// anteriormente 
// let arr5 = arr3.slice();

console.log(arr3, arr4); // array 4 es una copia no una referencia

