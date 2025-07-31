/** Ejercicio 02:
 * Tenemos un lsitado que contiene diferentes datos primitivos y referencia
 * que sea por 3 tipos: numeros, strings, objects
 * la funcion que debemos hacer debe tener como parametro el array
 * y devolver un objeto con las propiedades: numeros, strings, objetos
 * y cada propiedad debe contener de valores solamente los tipos de datos que 
 * correspondan a dichas propiedades(en arrays)
 */
/** estructura
 const miArray = [
   "Hola",
   12,
   "Mundo",
   {},
   { id: 15 },
   ['lala'],
 ];
 function dividePorTipo(arr) {
 }
 const nuevoArray = dividePorTipo(miArray);
 console.log(nuevoArray);
*/

// Resolucion:

const miArray = [
  "Hola",
  12,
  "Mundo",
  {},
  { id: 15 },
  ['lala'],
];

function dividePorTipo(arr) {
  //const numeros = [];
  //const strings = [];
  //const objetos = [];
  //for(let elemento of miArray){
  //  if(typeof elemento === 'number') numeros.push(elemento);
  //  else if(typeof elemento === 'string') strings.push(elemento);
  //  else if(typeof elemento === 'object') objetos.push(elemento);
  //}
  //return {numeros, strings, objetos};

  return {
    strings: arr.filter(element => typeof element === 'string'),
    numeros: arr.filter(element => typeof element === 'number'),
    objetos: arr.filter(element => typeof element === 'object'),
  }

}

const nuevoArray = dividePorTipo(miArray);
console.log(nuevoArray);
