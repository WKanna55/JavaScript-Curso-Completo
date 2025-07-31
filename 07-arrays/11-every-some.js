/**
 * Every some:
 * Si todos o algunos los elementos de un array cuentan con 
 * una carracteristica
 * Para ello existe el metodo .every() y .some()
 * ambos reciben como argumento funciones "predicates"
 */

/**
 * every(predicate);
 */
let usuarios = [
  { id: 1, activo: true },
  { id: 2, activo: false },
  { id: 3, activo: false },
];

// recibe como argumento una funcion predicate(devuelve true o false)
let todosActivos = usuarios.every( u => {
  /**
   * este metodo continua la evaluacion hasta que
   * un valor devuelva falso, por ello no se muestran todos los
   * ids de los usuarios
   */
  console.log('todos activos', u.id);
  return u.activo;
});

console.log(todosActivos);

console.log("----------------------------------------------------------------");

/**
 * .some(predicate)
 */
let algunosActivos = usuarios.some(u => {
  /**
   * Se va a ejecutar hasta que la propiedad evaluada
   * devuelva true, por ello solo al iniciar ya paro la ejecucion
   */
  console.log(u.id);
  return u.activo;
})

console.log(algunosActivos);
