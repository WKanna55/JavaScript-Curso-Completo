// short-circuit

// que valores evaluan en Falso, operadores OR y AND
/**
 * Si ponemos esto en consola
 * [] || {}  -> devuelve []
 * o esto
 * [] && {}  -> devuelve {}
 * 
 * Esto sucede dependiendo del operador, 
 * AND => devuelve el ultimo elemento evaluado en true 
 * OR => el primer elemento evaluado en true 
 * 
 * para saber esto es mas facil ver los que se evaluan en false
 */

/**
 * Valores Falsy, siempre dan falso
 * - false
 * - 0
 * - ''
 * - null
 * - undefined
 * - NaN
 */

// Como usarlo, ejemplo en una plataforma donde puedes acceder sin login
let nombre = '';
// let nombre = 'Chanchito Feliz';
let username = nombre || 'Anonimo';
console.log(username);

// AND, se usa en funciones
function fn1(){
  console.log('Soy funcion 1');
  return true; // siempre evaluara esta
}

function fn2(){
  console.log('Soy funcion 2');
  return false; // esta evalua dependiendo de la anterior, 
  // si la anterior es true pasa a evaluar esta aunque esta de false
}

// muestra ambas, ejecuta ambas si ambas son true
let x = fn1() && fn2(); 
