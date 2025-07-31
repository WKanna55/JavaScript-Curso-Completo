// se crea una "variable" con el nombre de saludar que podremos referenciar despues
// No se ejecuta si no se llama
function saludar() {
  console.log('Hola mundo');
}

// llamando a la funcion saludar
saludar();


function suma(){
  return 2 + 2; // permite reutilizar codigo devuelto
}

let resultado = suma();
//console.log(resultado);
console.log(suma());

