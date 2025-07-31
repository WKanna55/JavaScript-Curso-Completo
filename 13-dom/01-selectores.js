// elementos HTML

// nos devuelve un HTMLElement : div, p, img, etc
let htmlElement = document.getElementById('cuerpo');

console.log(htmlElement);
console.log(htmlElement.outerHTML);
console.log(Object.getPrototypeOf(htmlElement)); // ver todos los metodos

// Nos devuelve un HTMLCollection con elementos HTMl -> no es un Array, se parece
let elementosRed = document.getElementsByClassName('red');
console.log(elementosRed); 
console.log(Object.getPrototypeOf(elementosRed));

// Nos devuelve una NodeList -> parecido a un HTMLCollection pero no lo es
let elementosChanchito = document.getElementsByName("chanchito");
console.log(elementosChanchito); 
console.log(Object.getPrototypeOf(elementosChanchito));

// HTMLCollection -> devuelve todos los parrafos
let parrafo = document.getElementsByTagName('p');


// Estos 2 metodos son mas lentos que los demas


//HTMLCollection - solo un elemento
// por id seria #, por classname seria .
let el = document.querySelector('#cuerpo');

// NodeList - varios elementos
// si queremos seleccionar una etiqueta solo la escribimos
let els = document.querySelectorAll('p');


/** Diferencia entre HTMLCOllection vs Nodelist
 * - No importa cuantas veces modifiquemos el DOM con HTMLCollection siempre
 *    reflejará los ultimos cambios
 * - Nodelist no siempre sincroniza los ultimos cambios
 * Ejemplo:
 */

let plive = document.getElementsByTagName('p'); // Html collection
let pstatic = document.querySelectorAll('p'); // Node list
console.log(plive, pstatic);

// modificamos el DOM agregando un nuevo parrafo
let nuevoP = document.createElement('p');
document.body.append(nuevoP);

console.log(plive, pstatic); //HTMLcollection 5 - Nodelist 4

