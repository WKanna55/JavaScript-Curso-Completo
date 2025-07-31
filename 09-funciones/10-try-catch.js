// creemos una funcion que cause problemas

function sumaTodo(arr) {
  // condiciones para que no nos de error
  if (!Array.isArray(arr)){
    // Esto construye un nuevo objeto en base a la funcion
    // constructor Error
    // osea que nos devuelve un errore que podemos personalizar
    throw new Error('El paramatro no es un array');
  }
  
  return arr.reduce((acc, el) => {
    // si los tipos de datos no son numeros
    // Ojo que NaN se considera un numero
    // asi que tenemos que poner esto como condicion tambien
    if (typeof el !== 'number' || Number.isNaN(el)){
      throw new Error(`Elemento ${el} no es un numero`)
    }
    return acc+el;
  });
}

console.log(sumaTodo([1,2,3,4]));

// funciona normal, pero pensemos en situaciones donde esto no es cumple
// si pasamos un objeto o cualquioer dato envez de un array
// console.log(sumaTodo({ prop: 1 })); // error

// Por ello existe el try catch

try {

  //console.log(sumaTodo({ prop: 1 })); // error no es un array

  // comportamiento no deseado
  // esto es 'Valido' en nuestra funcion, pero no es correcto
  //console.log(sumaTodo([1,2,NaN,'Hola mundo'])); // = 'NaNHola mundo'

  console.log(sumaTodo([1,2,3,4])); // correcto
} catch (error) {
  //console.log(error);
  // podemos acceder solo al mensaje de error de esta manera
  console.log(error.message);
}

// ocurre el mismo error, pero nuestra app no se esta deteniendo
// si no hacemos el bloque trycatch este error no deja ejecutar esta linea
console.log('Despues del trycatch');

// por ello, siempre envolver el codigo en bloques try catch, y luego mostrarselo al usuario

// fallar de manera elegante, no parar la app
// tambien es bueno poner condiciones en nuestras funciones para que se prevengan estos 
// errores