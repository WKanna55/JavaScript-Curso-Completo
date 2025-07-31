/**
 * Crear algoritmo que devuevla el precion
 * del producto más impuesto
 */
// function precioCompleto(precio, impuestos){
// }
// let resultado = precioCompleto(19.90, 0.15);
// console.log(resultado);

// resolucion

function precioCompleto(precio, impuestos){
  return precio + precio*impuestos;
}
let resultado = precioCompleto(19.90, 0.15);
console.log(resultado);