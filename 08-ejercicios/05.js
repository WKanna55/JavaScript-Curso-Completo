/** Ejercicio 05:
 * Crear una funcion para obtener el mayor de edad de una lista de usuarios
 * y tiene que devolver el objeto con el usuario mayor de edad
 */

/* Estructura:
const usuarios = [
  { edad:17, nombre: 'Nico', plan: 'premium' },
  { edad:40, nombre: 'Willian', plan: 'free' },
  { edad:13, nombre: 'Chanchito', plan: 'premium' },
  { edad:25, nombre: 'Felipe', plan: 'gold' },
  { edad:18, nombre: 'Fernanda', plan: 'gold' },
];
function obtenerMayor(usrs) {
}
const mayor = obtenerMayor(usuarios);
console.log(mayor);
 */

// Resolucion

const usuarios = [
  { edad:17, nombre: 'Nico', plan: 'premium' },
  { edad:40, nombre: 'Willian', plan: 'free' },
  { edad:13, nombre: 'Chanchito', plan: 'premium' },
  { edad:25, nombre: 'Felipe', plan: 'gold' },
  { edad:18, nombre: 'Fernanda', plan: 'gold' },
];
function obtenerMayor(usrs) {
  //return usrs.sort((a, b) => {
  //  if (a.edad > b.edad ) return 1;
  //  if (a.edad < b.edad ) return -1;
  //  return 0;
  //}).pop();

  // lo que se vio
  //let mayor = usrs[0];
  //for (let usuario of usrs){
  //  if (usuario.edad > mayor.edad) mayor = usuario;
  //}
  //return mayor;
  
  return usrs.reduce((acc, el) => el.edad > acc.edad ? {...el} : {...acc}, {edad: 0});
}


const mayor = obtenerMayor(usuarios);
console.log(mayor);