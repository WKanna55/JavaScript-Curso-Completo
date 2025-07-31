/**Como funnciona el Hoisting */

// Y si movemos las llamadas antes de las inicializaciones de variables
// que pasa aca?

// console.log(saludar); // (error) saludar no esta definido "Is not defined"
// console.log(saludo); // (correcto) function
// console.log(vieja); // (correcto) undefined
// console.log(hola); // (error) no se puede acceder "Cannot access before initialization"
// console.log(chao); // (error) no se puede acceder "Cannot access bef..."


function saludo() {} // se va al comienzo del archivo

          // Algunos indican que let y const no tienen Hoisting, pero no es cierto
          // Ambos let y const se van al comienzo del archivo
          // pero la diferencia con var es que este si nos va a dar error
          // hasta que pasemos esta linea
let hola = 'hola'; // Se va al comienzo del archivo
const chao = 'chao'; // Se va al comienzo del archivo


var vieja = 'ya no me uses'; // se usaba hace muhco timepo antes de ecmascript 6
                            // tambien se va al comienzo del archivo, pero hasta que 
                            // no llegue a esta linea se le asigna como undefined
                            // y no nos da error

// ---- Todo funciona como lo esperado aca ---

// console.log(saludo); 
// console.log(hola);   
// console.log(chao);   
// console.log(vieja);  




// objeto window es una variable que tienen todos los navegadores
console.log(window); // aca aparece nuestra funcion saludo, por que?
// Tambien aparece nuestra variable "vieja" hecha con var

/** Explicacion:
 * Cuando declaramos variables o funciones usando fucntion y var
 * el nombre asginado van a ir a parar siempre al objeto window,
 * pero esto no ocurre con variables declaradas con let y const.
 * Esto es importante porque existen librerias que claramente declaran
 * sus funciones y alguna que otra variable con var
 * y si nosotros declaramos una funcion con el mismo nombre
 * antes de usar la libreria, vamos a sobreescribir su funcionalidad
 * Dandonos un monton de errores.
 * Por ello no debemos usar var, que es mas comun que se comentan errores.
 * Ademas, sobre las funciones hay soluciones para que no ocurra esto,
 * se mostrara en ... esta leccion posterior.
 */

/** Conclusiones
 * - no usar nunca var pues puede traernos muchos errores
 * - tener cuidado al crear funciones usando 'function'
 */