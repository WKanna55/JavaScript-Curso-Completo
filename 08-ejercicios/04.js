/** Ejercicio 04:
 * tenemos que construir 2 funciones,ambos tienen que recibir el listado
 * de usuarios y devolver un numero, el numero es de cuantos son premium
 * y cuantos son mayores de edad
 * 
 */


/* Estructura:
const usuarios = [
  { edad:17, nombre: 'Nico', plan: 'premium' },
  { edad:40, nombre: 'Willian', plan: 'free' },
  { edad:13, nombre: 'Chanchito', plan: 'free' },
  { edad:11, nombre: 'Felipe', plan: 'gold' },
  { edad:18, nombre: 'Fernanda', plan: 'gold' },
];
function cuantosPremium(usrs){
}
function cuantosMayores(usrs){
}
console.log(cuantosPremium(usuarios));
console.log(cuantosMayores(usuarios));
 */

// Resolucion
const usuarios = [
  { edad:17, nombre: 'Nico', plan: 'premium' },
  { edad:40, nombre: 'Willian', plan: 'free' },
  { edad:13, nombre: 'Chanchito', plan: 'premium' },
  { edad:25, nombre: 'Felipe', plan: 'gold' },
  { edad:18, nombre: 'Fernanda', plan: 'gold' },
];
const cuantosPremium = usrs => 
  usrs.reduce((acc, el) => el.plan !== 'free' ? acc+1 : acc, 0);

const cuantosMayores = usrs => 
  usrs.reduce((acc, el) => el.edad >= 18 ? acc+1 : acc, 0);

console.log(cuantosPremium(usuarios));
console.log(cuantosMayores(usuarios));

