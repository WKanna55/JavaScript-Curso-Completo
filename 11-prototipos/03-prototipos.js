/**
 * 
 */

let x = {}; // objeto literal
console.log(x); // da [[Prototype]]: Object()
// este [Prototype] no es una propiedad, por lo que no se puede acceder a ella
// sin embargo se puede usar esta funcionalidad que ya esta deprecada
// por ello no deberiamos usarlo nunca, puesto que se puede eliminar en un futuro
console.log(x.__proto__);

// Continuemos:
// a la derecha aparece el nombre de la funcion constructura del Objeto x
// [[Prototype]]: Object() 


/** En javascript la funcion constructura mas arriba de todas se llama Object()
 * este tiene su prototipo, y se le vinculaa todos los objetos que sean creados
 * por la funcion constructora Object()
 * cuando usamos {}; para crear un objeto, lo que se hace en realidad es new Objecto();
 * 
 * -------> Object()
 *            |
 *            |--------> prototype
 *                           ^
 *                           |
 * ---> {} ------------------|
 */

/** Ahora veamos las propiedades de los prototipos:
 *
 * --------------------------------------------------

constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty() 
isPrototype0f: ƒ isPrototype0f() 
propertyIsEnumerable: ƒ propertyIsEnumerable() 
toLocaleString: f toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
_defineGetter_: ƒ ___defineGetter_()
_defineSetter__: ƒ __defineSetter_()
_lookupGetter___: ƒ ___LookupGetter__() 
_lookupSetter_: ƒ ___LookupSetter__() 
_proto: Object
get __proto_: ƒ __proto__() 
set __proto__: ƒ __proto__()

 * --------------------------------------------------
 * - constructor: nos devuelve el constructor con el cual fue creado
 * - __proto__: esta deprecado no usar, no corresponde a ecmascript, en cambio...
 *      si queremos obtener el prototipo mejor usar Object.getPrototypeOf(x);
 * 
 * - tambien podemos cerciorarnos que los prototipos de x y Object() son iguales con
 *        Object.getPrototypeOf(x) === Object.prototype
 * 
 */

console.log(Object.getPrototypeOf(x));

console.log(Object.getPrototypeOf(x) === Object.prototype);

// tambien si creamos un nuevo objeto con la funcion constructora de Object()
// y comparamos con el prototype de x nos dara true
let y = {};
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));
// entonces, todos los prototipos de todos los objetos que se crean con la
// misma funcion costructora, apuntan al mismo objeto(que en este caso es
// el prototipo de Object)

// si cambiamos el prototipo de Object, se cambiara para todos los objetos
// que se hayan usado con esa funcion constructora

// ---- ejecutemos un metodo que tiene el prototipo de Object

console.log(x.toString()); // nos da '[object Object]' un string

// el objeto x es un objeto VACIO, no tiene toString() implementado,
// lo que pasa entonces es que javascript busca el metodo ahora en un
// nivel superior, que seria el prototipo de Object
// finalmente lo ejecuta
// si este metodo tampoco existiera en el prototipo de Object
// entonces daria error, puesto que Object es el maximo nivel de jerarquia
// y luego de eso buscaria en un nulo, lo cual da error

// ahora veamos que ocurre con los arrays

let array = [];

console.log(array);
// nos muestra [] -> length: 0 y [[prototype]]: Array(0)
// y si vemos el prototype nos daremos cuenta que
// todos los metodos que vimos en lecciones pasadas estan aca
// como funciones metodo
// el metodo no lo tiene el Array, lo tiene el prototipo del Objecto Array

// Y si vamos hasta el final...
// veremos un prototype, este se llama [[prototype]]: Object
// ! es el que vimos en esta seccion

/** que significa que tengamos el prototipo de Object en el prototipo de Array?
 * En js los prototipos son una cadena, digamos que tenemos:
 * 

 * ------------------------------------------------------------
 * |  Objeto -> prototipo -> prototipo -> prototipo -> null   |
 * |    a    ->     b     ->     c     ->     d               |
 * ------------------------------------------------------------
 * 
 * A esto es lo que se le llama "Cadena de prototipos" o "Prototype chain"
 * 
 * 
 * Y lo que pasa con el array es lo siguiente:
 *  Objeto -> prototipo -> prototipo -> null
 *            de la FC     de la FC
 *              Array       Object
 * 
 *    []   ->   Array   ->  Object
 *    |           |           |
 *  notiene->   tiene  x->x  tiene
 *    |
 * Busca toString
 * 
 * pero el toString de Array esta cambiado, no muestra ObjectObject como en Object
 * si no que ''
 */

console.log(array.toString());
