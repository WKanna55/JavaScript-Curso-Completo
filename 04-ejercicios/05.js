/**
 * Crear un algoritmo que devuelva el numero menor y mayor de un array
 */
// let array = [2, 5, 7, -5, -100, 55];
// function getMenorMayor(arr){
// }
// let numeros = getMenorMayor(array);
// console.log(numeros);

// resolucion

let array = [2, 5, 7, -5, -100, 55];
function getMenorMayor(arr){
  let menor = arr[0];
  let mayor = arr[0];
  for (num of arr){
    if (menor > num) menor = num;
    if (mayor < num) mayor = num;
    //menor = menor < num ? menor : num;
    //mayor = mayor > num ? mayor : num;
  }
  return [menor, mayor];
}
let numeros = getMenorMayor(array);
console.log(numeros);
