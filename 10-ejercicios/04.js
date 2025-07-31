/** Ejercicio 04: funcion como parametro de una funcion
 * Implementar la funcion suma() que reciba otra funcion y le pase 
 * el resultado de la suma de los otros parametros
 */
/* Estructura
function suma(fn, ...rest) {
}
suma(resultado => {
  console.log(resultado);
}, 1, 2, 3, 4);
 */

// Resoluicion propia
function suma(fn, ...rest) {
  let resultado = rest.reduce((acc, el) => acc + el);
  fn(resultado);
}
suma(resultado => {
  console.log(resultado);
}, 1, 2, 3, 4);
