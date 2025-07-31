// atajos constructores de javascript
let obj = {}; // este es un atajo de js para llamar al constructor de objetos

// todos los objetos creados en js tiene la propiedad llamada "constructor"
//    ademas "constructor" indica con que constructor fue creado dicho objeto
// let objeto = {};     < son iguales>       let objeto2 = new Object();
// pero este es un atajo

let obj2 = new Object(); 

/**
 * new Object(); no es el unico constructor
 * existen:
 *  - new Array(); crea un array, atajo []
 *  - new String(); crea un string, atajo "", '', ``
 *  - new Number(); crea un numero, atajo cualquier numero = 12
 *  - new Boolean(); crea un booleano, atajo true false
 */

function Usuario() {
  this.name = "Chanchito feliz";
}

let user = new Usuario();
console.log(user); // nos da propiedades extra

// Importante
// cuando hacemos esto typeof "" -> string
// pero si typeof new String() -> object
// porque los literales no devuelven object
// porque se almacenan como dato primitivo literales, pero si accedemos
//    a alguna de sus metodos, js envolvera dicho dato primitivo en un objeto 
//      para acceder a estos metodos

// los tipos literales ("", 12, true) no funcionan igual que 
// los envueltos (String(), Number(), Boolean())
// esto puede acarrear a problemas de codigo que parecen invisibles

// ejemplo de error
const s1 = "1 + 1";
const s2 = new String( "1 + 1");


console.log(eval(s1), eval(s2)); // no evalua el s2
// por ello usar string literales y cualquier tipo literal

// pero si se nesecita usar un string envuelto podemos usar el meotodo .valueof

console.log(s2.valueOf());

// este valueof tambien lo tienen los Number y Boolean