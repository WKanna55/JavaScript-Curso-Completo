
// cuando los valores estan en la funcion se llama parametro
function suma(numero1, numero2) {
  // variable especial arguments, accede a todos los valores que se le pasa a la func
  console.log(arguments);
  return numero1 + numero2;
}

// cuando los valores estan en el llamado se llaman argumentos 
let resultado = suma(1, 3);
console.log(resultado);
console.log(typeof suma); // tipo function

// variable especial arguments uso
let resultados1 = suma(1, 3, 4, 7, 9);