/**
 * Crear un algoritmo que devuelva la cantidad
 * de numeros positivos de un array
 */
// let array = [2, 5, 7, -5, -100, 55];
// function cuantosPositivos(arr){
// }
// let resultado = cuantosPositivos(array);
// console.log(resultado);

// resolucion

let array = [2, 5, 7, -5, -100, 55];
function cuantosPositivos(arr){
  let positivos = 0;
  for (num of arr){
    if (num >= 0) positivos++;
  }
  return positivos;
}
let resultado = cuantosPositivos(array);
console.log(resultado);
