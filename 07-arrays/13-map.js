/**
 * Map()
 * usado bastante
 * para crear nuevos arrays apartir de un array existente
 */

const usuarios = [
  { edad:17, nombre: 'Nico' },
  { edad:40, nombre: 'Willian' },
  { edad:13, nombre: 'Chanchito' },
  { edad:11, nombre: 'Felipe' },
  { edad:18, nombre: 'Fernanda' },
];

// supongamos que queremos generar una lista html <li> con los nombres
// de estos usuarios, para ello es util map();

// map(elem, indic, arr): recibe estos 3 argumentos
// pero son opcionales
// el valor que retorna la fat arrow function es el que 
// se quedara finalmente en la lista
// si retornamos 1 este se quedara con puros 1
const lista = usuarios.map(u => u.nombre);
console.log(lista);

console.log("----------------------------------------------------------------");
// hasta aca esta genial, pero lo que queremos es devovler una lista html
// para ello se puede hacer de esta forma

const listahtml = usuarios.map(u => `<li>${u.nombre}</li>`);
console.log(listahtml);

// va tomando forma,. ahora podemos usar un .join para mejorarlo mas

const html = `<ol>${listahtml.join('')}</ol>`
console.log(html);
console.log("----------------------------------------------------------------");
/**
 * Pero esto no es lo unico que se puede hacer con map()
 * no solo podemos obtener una propiedad
 * sino que tambien podemos crear nuevos objetos
 * apartir del listado de objetos que nosotros tenemos
 */

// creemos nuevos objetos que si el usuario es mayor de edad 
// tenga una propiedad mayor de edad true

const mapped = usuarios.map(u => {
  return {
    ...u,
    mayor : u.edad >= 18
  }
});

console.log(mapped);

console.log("----------------------------------------------------------------");

// hasta ahi esta bien, pero se puede simplificar la lectura del codigo,
// ya que se retorna un objeto en una linea se puede hacer perfectamente
// de esta menera

const mapped2 = usuarios.map(u => ({...u,mayor : u.edad >= 18}) );

console.log(mapped2);

console.log("----------------------------------------------------------------");

/**
 * Una ultima cosa es que podedmos encadenar filter, 
 * map ya que estos crean un nuevo array
 */

// ejemplo
const lista2 = usuarios
    .filter(u => u.edad >=18)
    .map(u => `<li>${u.nombre}</li>`);
const html2 = `<ol>${lista2.join('')}</ol>`
console.log(html2);