/** Ejercicio 08: Caso mas real
 * hacer esto:
 * - Obtener los usuarios pago
 * - Ordenar de mayor a menor edad
 * - Devolver el nombre del usuario
 * - Crear una plantilla HTML
 * - Imprimir la plantilla en consola
 * 
 * Seria algo asi:
 * <ul>
 * <li></li>
 * </ul>
 */

/* Estructura
const usuarios = [
  { edad:17, nombre: 'Nico', plan: 'premium' },
  { edad:40, nombre: 'Willian', plan: 'free' },
  { edad:13, nombre: 'Chanchito', plan: 'premium' },
  { edad:25, nombre: 'Felipe', plan: 'gold' },
  { edad:18, nombre: 'Fernanda', plan: 'gold' },
];
 */

// Resolucion mi metodo

const usuarios = [
  { edad:17, nombre: 'Nico', plan: 'premium' },
  { edad:40, nombre: 'Willian', plan: 'free' },
  { edad:13, nombre: 'Chanchito', plan: 'premium' },
  { edad:25, nombre: 'Felipe', plan: 'gold' },
  { edad:18, nombre: 'Fernanda', plan: 'gold' },
];

function plantillaUsuariosPago(usuarios) {
  const filtrado = usuarios.filter(u => u.plan !== 'free')
    .sort((a,b) => {
      if (a.edad < b.edad) return 1;
      if (a.edad > b.edad) return -1;
      return 0;
    })
    .map(u => `<li>${u.nombre}</li>`);
  const plantilla = `
<ol>
    ${filtrado.join('\n\t')}
</ol>`;
  return plantilla;
}

console.log(plantillaUsuariosPago(usuarios));
