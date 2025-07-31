/**
 * Ordenar un array:
 * para esto existe un metodo llamado .sort()
 * 
 */
let numeros = [15, 10, -3];

// ordena el array de menor a mayor 
numeros.sort();
console.log(numeros);

// tambien podemos ordenarlo en mayor a menor
numeros.reverse();
console.log(numeros);
console.log("-------------------------------------");
/**
 * Tambien funciona si estamos usando caracteres de A - Z
 */

let letras = ['z', 'a', 'g'];

// de a -> z
letras.sort();
console.log(letras);

// de z -> a
letras.reverse();
console.log(letras);
console.log("-------------------------------------");
/**
 * Cuando trabajamos con letras o strings existe un problema
 * Las mayusculas
 * a los caracteres se les asigna un numero 
 * y sort ordena estos numeros
 * las mayusculas estan antes que las minusculas
 * por lo que tienen un numero menor
 * Buscar ASCII table
 */

let conMayusculas = ['Z', 'a', 'f'];

// la z se encuentra al comienzo cuando deberia estar al final
conMayusculas.sort();
console.log(conMayusculas);

// para solucionar esto le pasamos una funcion como argumento al metodo .sort();

conMayusculas.sort((a, b) => {
  /**
   * a y b vienen a ser 2 elementos del array que se comparan entre si
   *               => devolver
   * a antes que b => -1
   * b antes que a => 1
   * iguales       => 0
   */
  // convertimos a lowercase los elemntos que se comparan
  let alower = a.toLowerCase();
  let blower = b.toLowerCase();
  if (alower < blower){
    return -1;
  }
  if (alower > blower){
    return 1;
  }
  return 0;
});
console.log(conMayusculas);
console.log("-------------------------------------");

/**
 * Esto mismo lo podemos usar con objetos
 */

let usuarios = [
  { edad: 15, nombre: 'Felipe'},
  { edad: 25, nombre: 'Nicolas'},
  { edad: 13, nombre: 'Poli'},
];

// ordenamos por una propiedad, en este caso al edad
usuarios.sort((a, b) => {
  if (a.edad < b.edad) return -1;
  if (a.edad > b.edad) return 1;
  return 0;
});

console.log(usuarios);
