/** Ejercicio 09: Caso real
 * Trabajamos con 2 recursos similares pero diferentes
 * en este caso 2 proveedores de base de datos distintos
 * uno en ingles y otro en español
 * supongamos que estamos trabajando con una bd en latam
 * pero tambien con otra bd de otros desarrolladores en EEUU en ingles
 * 
 * Entonces lo que se tendria que hacer es tomar alguno de los 2 arrays
 * y cambiar su estructura para que sea igual a la otra.
 * 
 * Que se debe hacer:
 * - Unificar las estructuras de usuarios y users
 * - fusionar los arrays
 * - ordenar por edad
 * - crear una plantilla HTML:
 *    <li>Nombre: name, Edad: age</li>
 * - imprimir la plantilla en consola
 */
/* Estructura:
const usuarios = [
  {edad: 17, nombre: 'Nico', plan: 'premium'},
  {edad: 13, nombre: 'Chanchito', plan: 'free'},
  {edad: 32, nombre: 'Fernanda', plan: 'free'},
];
const users = [
  {age: 22, name: 'Michael', membership: 'premium'},
  {age: 27, name: 'Kevin', membership: 'free'},
  {age: 29, name: 'Happy pig', membership: 'free'},
];
 */

// Resolucion:

const usuarios = [
  {edad: 17, nombre: 'Nico', plan: 'premium'},
  {edad: 13, nombre: 'Chanchito', plan: 'free'},
  {edad: 32, nombre: 'Fernanda', plan: 'free'},
];
const users = [
  {age: 22, name: 'Michael', membership: 'premium'},
  {age: 27, name: 'Kevin', membership: 'free'},
  {age: 29, name: 'Happy pig', membership: 'free'},
];

function fusionData(arrEstructura, arrObjetivo){
  let llavesFinal = Object.keys(arrEstructura[0]);
  let llavesObjetivo = Object.keys(arrObjetivo[0]);  

  return arrObjetivo.map(u => {
    let transformado = {}
    for (let idx in llavesFinal){
      transformado[llavesFinal[idx]] = u[llavesObjetivo[idx]];
    }
    return transformado;
  }).concat(arrEstructura);
}

function plantillaUsuarios(usuarios) {
  const filtrado = usuarios.sort((a,b) => {
      if (a.edad < b.edad) return 1;
      if (a.edad > b.edad) return -1;
      return 0;
    })
    .map(u => `<li>Nombre: ${u.nombre}, Edad: ${u.edad}</li>`);
  const plantilla = `
<ol>
    ${filtrado.join('\n\t')}
</ol>`;
  return plantilla;
}

const resultado = plantillaUsuarios(fusionData(usuarios, users));

console.log(resultado);
