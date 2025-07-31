// js es dinamico, los objetos se pueden agregar o quitar propiedades

const punto = {
  x: 10,
  y: 15,
  //dibujar: function () {
  dibujar() {  // se puede definir metodos de esta manera
    console.log('Dibujando...');
  }
}

//delete punto.dibujar;
//punto.dibujar(); // da error, indica que no es una funcion
if ('dibujar' in punto){
  punto.dibujar();
}

//let keys = Object.keys(punto);
console.log(Object.keys(punto)); // vemos todas las propiedades en un array

for (let llave of Object.keys(punto)){
  console.log(llave, punto[llave]);
}

// otra manera de hacer esto es:
// devuelve directo el par llave valor en formato array
for (let entry of Object.entries(punto)){
  console.log(entry);
}

// util cuando no conocemos las propiedades de un objeto

// otra manera
// esta manera es mas moderna que of
for (let llave in punto) {
  console.log(llave, punto[llave]);
}

// si nos fijamos bien, un objeto sin instanciar tiene metodos que podemos ejecutar
// a estos se les llama meotods estaticos y no es necesario instanciar un objeto

