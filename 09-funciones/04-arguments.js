/** Aragumentos
 * 
 */

function suma(a, b) {
  console.log(arguments);
  
  return a + b;
}

//funciona perfectamente
console.log(suma(1,2));

// esto es valido, pero no nos dará una respuesta esperada
// 1 + undefined = NaN (not a number)
console.log(suma(1));
// undefined + undefined = NaN (not a number)
console.log(suma());


// que pasa si le pasamos varios argumentos
// es totalemnte valido, solo que no tenemos referencias de los 
// demas argumentos
// No es comun en otros lenguajes de programacion, por lo que 
// la gente lo considera raro
console.log(suma(1,2,3,4));
// para accecer a todos los argumentos js nos proporciona una
// palabra reservada llamada arguments

// se nos muestra ahora todos los argumentos con un "indice"
// creeriamos que es un array, pero no, es un iterator que
// veremos en lecciones posteriores
// ademas, un iterator tiene de propiedades un callee, que indica que 
// llamó(en este caso que funcion) a este objeto, una longitud
// Symbol y prototype que veremos mas adelante


// entonces si queremos sumar todos los argumentos como se haria?
// de esta manera

function sumaArgs(a, b){
  let total = 0;
  for (let valor of arguments){
    total += valor;
  }
  return total;
}
// se nos muestra correctamente
console.log(sumaArgs(1,2,3,4,5));

// aunque esta forma es un poco antigua
// hay un metodo mejor
function sumaArgsAct(a,b){
  // Podemos convertir el iterator en un array
  return Array.from(arguments)
    .reduce((acc, el) => acc+el);
  // si a reduce no le ponemos el segundo argumento que inicializa el acumulador(acc)
  // entonces va a tomar el primer elemento como su valor inicial
}

console.log(sumaArgsAct(2,4,6,8));

// Hay otra manera aun mejor, pero lo veremos en la siguiente leccion
// al igual que como usar mejor arguments