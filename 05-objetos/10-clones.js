// copiar las propiedades de un objeto sin referenciar a las misma propiedades

let punto = {
  x: 10,
  y: 15,
};

// podemos clonar con un metodo estatico de Object():
// con assing lo que se hace es pasar las propiedades que se encuentran
// en la derecha al objeto de la izquierda
// Object.assign(objIzquierda, PropDerecha);

//Object.assign(punto, { z: 20 });

console.log(punto);

// como usamos assign para clonar objetos, si o si usamos un objeto vacio
// ademas si ponemos una propiedad ya existente
// tomara el valor de mas derecha
let clonePunto = Object.assign({}, punto, { z: 20 , x: 1});
console.log(punto, clonePunto);

// pero si queremos referenciar:
let referenciaPunto = Object.assign(punto, { z: 20 , x: 1});
console.log(referenciaPunto);

// copia exacta de un objeto sin que referencien las mismas propiedades
let copiaPunto = Object.assign({}, punto);

console.log(copiaPunto, punto);
console.log(copiaPunto === punto);


// otra forma de generar copias es con el spreadOperator

let copia3 = { ...punto }
console.log(copia3, punto);
console.log(copia3 === punto);

// ultima forma muy antigua:
let copia4 = {};
for (let llave in punto) {
  copia4[llave] = punto[llave];
}
console.log(copia4, punto);
console.log(copia4 === punto);