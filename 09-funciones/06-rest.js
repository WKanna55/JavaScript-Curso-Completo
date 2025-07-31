/** Operador Rest
 * 
 */

function sumaAnterior (a, b) {
  console.log(arguments);
}

sumaAnterior(1,2,3,4);

// Pero hay una mejor forma de acceder a los parametros:
// ...rest, tambien se puede llamar ...args, ...argumentos, ...resto, etc
// ...rest tiene que ser el argumento final, sino error:
// ejemplo:  "function suma (a, b, ...rest, c) {" da error
function suma (a, b, ...rest) {
  console.log(rest);
}

// nos da los argumentos 3, 4, 5, 6
suma(1,2,3,4, 5, 6);

// lo interesante es que funciona con las fat arrow functions

const sumaArrow = (a, b, ...rest) => {
  console.log(rest);
}

sumaArrow(1,2,3,4,5,6);

// una aplicacion de la vida real seria imprimir mensajes de error
// y queremos saber de donde vienen

const logMsg = (desc, ...msgs) => {
  for (let msg of msgs){
    console.log(desc, msg);
  };
}

logMsg('Servidor:', 'Error 1', 'Peticion aceptada', 'socket activo');

let mensajes = ['Error 1', 'Peticion aceptada', 'socket activo'];

// podemos usar spread oeprator si usamos un array
// se puede agregar mas elementos
logMsg('Cliente Movil:', ...mensajes, 'Otro Error!');

// tambien funciona con una funcion normal si no usamos fat arrow function
