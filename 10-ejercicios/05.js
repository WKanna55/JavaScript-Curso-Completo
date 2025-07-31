/** Ejercicio 05: 
 * Implementar la funcion ordenar(), esta funcion va a recibir el resultado final
 * que se encarga de calcular la funcion de ordenar
 * que hace? recibe un argumento string, y el segundo otra funcion
 * toma todos los caracteres del string y los ordena alfabeticamente sin espacios
 * y se lo pasa a la fn(parametro de funcion), esta funcion imprime el resultado de 
 * ordenar
 */

/* Estructura
function ordenar(texto, fn) {
}
ordenar('hola mundo', console.log); 
*/

// Resolucuin propia
function ordenar(texto, fn) {
  let ordenado = [...texto.replace(' ', '')]
                  .sort((a , b) => {
                    alower = a.toLowerCase();
                    blower = b.toLowerCase();
                    if (alower > blower) return 1;
                    if (alower < blower) return -1;
                    return 0;
                  }).join('');
  fn(ordenado)
}
ordenar('Hola Mundo1', console.log); 

// resolucion clase

function ordenar2(texto, fn) {
  let ordenado = texto.toLowerCase()
                  .split('')
                  .filter(x => x !== ' ')
                  .sort().join('');
  fn(ordenado)
}
ordenar2('hola mundo2', console.log);
