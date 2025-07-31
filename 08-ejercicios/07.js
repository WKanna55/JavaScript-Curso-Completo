/** Ejercicio 07:
 * Crear una funcion GroupBy, que agrupe un array de objetos
 * por alguna propiedad de estos objetos
 */
/* Estructura
const usuarios = [
  { edad:17, nombre: 'Nico', plan: 'premium' },
  { edad:40, nombre: 'Willian', plan: 'free' },
  { edad:13, nombre: 'Chanchito', plan: 'premium' },
  { edad:25, nombre: 'Felipe', plan: 'gold' },
  { edad:18, nombre: 'Fernanda', plan: 'gold' },
];
function groupBy(arr, prop) {
}
const grouped = groupBy(usuarios, 'plan');
console.log({ grouped });
 */

// Resolucion
const usuarios = [
  { edad:17, nombre: 'Nico', plan: 'premium' },
  { edad:40, nombre: 'Willian', plan: 'free' },
  { edad:13, nombre: 'Chanchito', plan: 'premium' },
  { edad:25, nombre: 'Felipe', plan: 'gold' },
  { edad:18, nombre: 'Fernanda', plan: 'gold' },
];
const groupBy = (arr, prop) => arr.reduce((acc, el) => {
    let llave = el[prop];
    acc[llave] = acc[llave] ? acc[llave] : [];
    acc[llave].push(el);
    return acc;
  }, {});

const grouped = groupBy(usuarios, 'plan');
console.log({ grouped });
