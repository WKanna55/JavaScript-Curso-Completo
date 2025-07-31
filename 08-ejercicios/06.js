/** Ejercicio 06:
 * Tenemos que crear una funcion para dividir un array por tipo de dato
 * esta vez usando reduce
 * los tipos pueden ser cualquiera, no necesariamente unos establecidos
 */
/* estructura
function dividePorTipo(arr) {
}
const miArray = [
  "Hola",
  12,
  true,
  "Mundo",
  {},
  { id: 15 },
  ['lala'],
];
let arr = dividePorTipo(miArray);
console.log(arr);
 */

// Resolucion:

const miArray = [
  "Hola",
  12,
  true,
  "Mundo",
  {},
  { id: 15 },
  ['lala'],
];

function dividePorTipo(arr) {
  //return arr.reduce((acc, el) => {
  //  switch(typeof el){
  //    case 'number':
  //      acc.numeros.push(el);
  //      break;
  //    case 'string':
  //      acc.strings.push(el);
  //      break;
  //    case 'boolean':
  //      acc.booleanos.push(el);
  //      break;
  //    case 'object':
  //      acc.objetos.push(el);
  //      break;
  //  };
  //  return acc;
  //}, 
  //{numeros: [], strings: [], booleanos: [], objetos: []});

  // mejor y mas optimizado
  return arr.reduce((acc, el) => {
    let llave = typeof el;
    acc[llave] = acc[llave] ? acc[llave] : []; //validar si la propiedad existe, sino crearla
    acc[llave].push(el); // agregar a su tipo correspondiente
    return acc;
  }, {});
}

let arr = dividePorTipo(miArray);
console.log(arr);