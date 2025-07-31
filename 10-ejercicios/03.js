/** Ejercicio 03: funcion como parametro de una funcion
 * IMplementar la funcion callback para que reciba la fn log
 * y le pase sus parametros a los parametros de la funcion log
 */

/* Estructura 
function callback(fn, ...rest){
}
function log(...args){
  console.log(args);
}
callback(log, 1, 2, 3, 4);
 */

// Resolucion propia

function callback(fn, ...rest){
  fn(...rest);
  //return fn(...rest); // en este caso no es necesario retornar
}
function log(...args){
  console.log(args);
}
callback(log, 1, 2, 3, 4);

// otra manera de llamarlo

callback((...args) => {console.log(args)}, 1, 2, 3, 4, 5, 6);