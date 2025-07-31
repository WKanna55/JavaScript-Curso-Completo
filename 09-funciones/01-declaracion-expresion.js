/** Declaracion de funciones: Function declaration
 * 
 */

//-------------------------- declaracion ---------------------------------

// Se le conoce como funcion nombrada -> named fucntion
function suma(){
  console.log('sumando...');
}

// Se le conoce como funcion anonima -> Anonymous function
// esto funciona cuando se ejecuta inmediatamente la funcion
/* function (){
  console.log('funcion anonima');
} */

// ------------------------- expression ----------------------------------


// Expresion de funciones -> function expression
// Expresion de funcion anonima
let resta = function () { // Anonymous function expression
  console.log('restando...');  
}

const multiplica = function multi () { // Named function expression
  console.log('multiplicando...');  
}

const divide = () => { // Siempre es anonima
  console.log('Dividiendo...');  
}

// ------------------------ Entonces en que se diferencian?
// si no ponemos () la declaracion se ejecuta normal, pero,
// la Expression da error(se necesita inicializacion)

// Declaracion
console.log(suma); 

// Expresion
console.log(resta); // Hoisting -> Izar o levantar (explicacion en 02-let-var...)