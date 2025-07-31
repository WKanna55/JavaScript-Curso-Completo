// Existen 4 formas de vaciar un array

/**
 * Primera forma:
 * Reasignar el array a uno vacio
 * es comun
 */

let arr1 = [1, 2];
arr1 = []; // ya esta vacio

// esto presenta un problema, si se asigna este array a otra variable 
//

let arr2 = [1, 2];
let otroArray = arr2; 
arr2 = [];
console.log(arr2, otroArray);
// array original esta vacio, pero el otro mantiene los datos
// asi que no es recomendable en estas situaciones

/**
 * Segunda forma:
 * vaciar con su .length
 */
let arr3 = [1, 2];
arr3.length = 0;
console.log(arr3);

/**
 * Tercera forma:
 * Hacer un .splice() al array
 * Es la mas explicita en lo que estamos haciendo
 */

let arr4 = [1,2];
arr4.splice(0, arr4.length);
console.log(arr4);

/**
 * Cuarta opcion: no recomendable por su lentitud
 * Usar un loop donde se evalua la longitud del array
 */

let arr5 = [1,2];
while(arr5.length > 0){
  arr1.pop();
}
console.log(arr5);

// no hay un metodo para vaciar un array como un .empty(), asi que si no usamos POO
// para programar una funcion que haga esto, entonces usar las formas anteriores mostradas