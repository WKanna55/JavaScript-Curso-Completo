/**
 * Promesas: Representan el estado de una peticion.
 * - Pendiente (pending)  :
 * - Rechazada (rejected) : ocurrio algo
 * - Terminada (fulfilled): tarea con exito
 * 
 * Se usa para
 * - Consulta a BDs
 * - Realizar peticion a servidores
 * - Webworkers: Cuando se tiene que realizar un calculo muy pesado que no lo hace el 
 *    navegador
 * 
 */

let promesa = new Promise((resolve, reject) => {
  //resolve(42); // fullfiled si no tiene temporizador, resultado 42
  //setTimeout(() => resolve(42), 10000); // temporizador 10 segundos, promesa pendiente, 
  //                                      // resultado undefined
  //setTimeout(() => reject('Error de carga'), 1000); // da error, no se menejan errores de la promesa
                                      // estado rejected,
  setTimeout(() => resolve('Hola mundo'), 1000);
});

// en el navegador al escribir promesa nos sale el objeto promesa su estado y su valor(42)

// metodo then(): capturar datos cuando sean exitoso o rechazada
// primer argumento onfulfilled, segundo argumento onrejected
promesa.then(
  valor => console.log(valor),
  e => console.log('error', e),
);

// la gracia de la promesa es que pueden ser encadenadas
// lo vemos en la siguiente leccion
