/**
 * Filtrar arrays:
 * eliminar datos que no necesitamos
 * para ello existe .filter()
 * este recibe una funcion
 */

const usuarios = [
  { edad:17, nombre: 'Nico' },
  { edad:40, nombre: 'Willian' },
  { edad:13, nombre: 'Chanchito' },
  { edad:11, nombre: 'Felipe' },
  { edad:18, nombre: 'Fernanda' },
];

// .filter(x,y,z) 3 argumentos: el valor, el indice, el array que estamos iterando
// pero no es necesario
// si se cumple la condicion entonces reetorna el valor, en este caso el objeto
// y crea un nuevo array solo con los objetos que cumplierton dicha condicion
const mayores = usuarios.filter( u => u.edad >= 18);

console.log(mayores);

// en otros lenguajes existe un metodo opuesto generalmente llamado
// reject, este no existe en js
// entonces como se haria? solo cambiando la condicion
const menores = usuarios.filter( u => u.edad < 18);
console.log(menores);

