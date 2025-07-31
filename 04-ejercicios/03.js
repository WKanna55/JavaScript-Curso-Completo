// construir una funcion que permita obtener un elemento por su indice
/** EXTRA
 * indice valor que no sea menor a cero y que el elemento exista
 * en el array
 */
// function getByIdx(arr, idx){
// }
// let resultado = getByIdx([1,2], 1);
// console.log(resultado);

// resolucion
function getByIdx(arr, idx){
  if (idx < 0 || idx > arr.length) return 'Elemento no existe';
  return arr[idx];
}
let resultado = getByIdx([1,2], 0);
console.log(resultado);