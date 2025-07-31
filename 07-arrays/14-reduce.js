/**
 * Array reduce:
 * para reducir el contenido que se encuentra en un array
 */

// por ejemplo queremos sumar todos los numeros de este array
const numeros = [1, 2, 3, 4];

// se puede hacer con un bucle, pero mejor usemos reduce()
// tasmbien existe reduceRight() que hace lo mismo, pero enveez de hacerlo de
// izquierda a derecha lo hace al reves

// reduce recibe una funcion como argumento, esta funcion tiene 2 parametros
// 1. acumulador, 2 elemento a iterar
// reduce tiene un segundo argumento que s el valor inicial que tiene el acumulador
const suma = numeros.reduce((acc, el) => {
  // esto va sumando todos los valores del array
  return acc + el; // esto retorna al acumulador(acc)
}, 0);

console.log(suma);

/**
 * Tienen otros usos como:
 * si tenemos un array que contiene mas arrays
 * y queremos aplanar este array
 */

// trabajar con esto nos daria 3 elemntos , 3 iteraciones etc
const anidado = [[1, 2], 3, [4, 5]];
// queremos [1,2,3,4,5]

// que pasa aca?
// nosotros iniciamos el acumulador como un array vacio
// al ser un array puede acceder a la funcion concat()
// y simplemento concatenamos los elementos en el acumulador
const plano = anidado.reduce((acc, el)=> acc.concat(el), []);

console.log(plano);

/**
 * Existe otro uso interesante:
 * cuando estamos iterando un array enorme de miles de elementos
 * con un .find() por ejemplo, esto seria algo lento.
 * Por ello se puede crear un indice con una nueva clase Map
 * o creando un objeto con reduce
 */

const usuarios = [
  { edad:17, nombre: 'Nico' },
  { edad:40, nombre: 'Willian' },
  { edad:13, nombre: 'Chanchito' },
  { edad:11, nombre: 'Felipe' },
  { edad:18, nombre: 'Fernanda' },
];

// Que pasa aca?
// se inicia acc como un objeto
// y en cada iteracion de reduce 
// se pasa acc con los valores(en este caso propiedades: objetos) que tiene
// y se le añade una nueva propiedad
// recordemos que la funcion va retornando acc
const indexado = usuarios.reduce((acc, el) => ({
  ...acc, [el.nombre]: el,
}), {});

console.log(indexado);
// util cuando busquemos elementos de un array cuando hay milles de elementos