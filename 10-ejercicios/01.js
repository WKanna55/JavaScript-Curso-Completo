/** Ejercicio 01: Extension
 * - Crear una funcion Constructora que cambien
 * el contexto de this usando Call que contienen las funciones
 * al imprimir el objeto debe tener 2 metodos agregados
 * login() y logout(), ambas funcionales con un console.log
 */

/* Estructura
const obj = {
  nombre: 'Nicolas',
}
function Extender() {
}
Extender.call(obj);
console.log(obj);
 */

// Resolucion propia
const obj = {
  nombre: 'Nicolas',
}
function Extender() {
  //this.nombre;
  this.login = () => {
    console.log(`logueando a ${this.nombre}`);
  }
  this.logout = () =>{
    console.log(`Deslogueando a ${this.nombre}`);
  }
}
Extender.call(obj);
console.log(obj);

obj.login();
obj.logout();