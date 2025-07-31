/**
 * Crear un algoritmo que devuelva un array
 * de objetos en base a pares
 */
// //entrada
// let pairs = [
//   [1, {name: 'Nicolas'}],
//   [2, {name: 'Felipe'}],
//   [3, {name: 'Chanchito'}],
// ];
// // debe devolver esto
// let array = [{
//   id: 1,
//   name: 'Nicolas',
// },
// {
//   id: 2,
//   name: 'Felipe',
// },
// {
//   id: 3,
//   name: 'Chanchito',
// },
// ];
// function toCollection(arr){
// }
// let resultado = toCollection(pairs);
// console.log(resultado);


//entrada
let pairs = [
  [1, {name: 'Nicolas'}],
  [2, {name: 'Felipe'}],
  [5, {name: 'Chanchito'}],
];
// debe devolver esto
//let array = [{
//  id: 1,
//  name: 'Nicolas',
//},
//{
//  id: 2,
//  name: 'Felipe',
//},
//{
//  id: 3,
//  name: 'Chanchito',
//},
//];

function toCollection(arr){
  let collections = [];
  for (idx in arr){
    let elemento = arr[idx];
    collections[idx] = elemento[1];
    collections[idx].id = elemento[0];
  }
  return collections;
}
let resultado = toCollection(pairs);
console.log(resultado);
