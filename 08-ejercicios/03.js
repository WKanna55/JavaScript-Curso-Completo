/**Ejercicio 03:
 * Tenemos una lista de usuarios con edad, nombre y plan
 * hay 3 tipos de planes: free, premium y gold
 * tenemos que construir una funcion que tome como parametro
 * una lista de usuarios, y cuando lo llamemos
 * deberia devolvernos los usuarios que no son free
 */
/* Estructura
const usuarios = [
  { edad:17, nombre: 'Nico', plan: 'premium' },
  { edad:40, nombre: 'Willian', plan: 'free' },
  { edad:13, nombre: 'Chanchito', plan: 'free' },
  { edad:11, nombre: 'Felipe', plan: 'gold' },
  { edad:18, nombre: 'Fernanda', plan: 'gold' },
];
function getPaidUsers(usrs){
}
console.log(getPaidUsers(usuarios));
 */

// Resolucion:

const usuarios = [
  { edad:17, nombre: 'Nico', plan: 'premium' },
  { edad:40, nombre: 'Willian', plan: 'free' },
  { edad:13, nombre: 'Chanchito', plan: 'free' },
  { edad:11, nombre: 'Felipe', plan: 'gold' },
  { edad:18, nombre: 'Fernanda', plan: 'gold' },
];
function getPaidUsers(usrs){
  return usrs.filter(u => u.plan !== 'free');
}
console.log(getPaidUsers(usuarios));