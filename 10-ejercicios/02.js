/** Ejercicio 02: extension sin usar call
 * - Similar al ejercicio anterior, pero esta vez no usamos ni call ni apply,
 * tenemos que extener el objeto agregando funcion login y logout con el contexto
 * this del nuevo objeto 
 */
/* Estructura
const obj = {
  nombre: 'Nicolas',
}
function extender(usuario) {
}
const usuario = extender(obj);
console.log(usuario);
usuario.login();
 */

// Resolucion propia
const obj = {
  nombre: 'Nicolas',
}
function extender(usuario) {
  //this.usuario = usuario;
  usuario.login = () => {
    console.log(`logueando a ${usuario.nombre}`);
  }
  usuario.logout = () => {
    console.log(`Deslogueando a ${usuario.nombre}`);
  }
  return usuario;
}

const usuario = extender(obj);
console.log(usuario);
usuario.login();


// Resolucion clase

function extender2(usuario) {
  const metodos ={
    login() {
      console.log(`logueando a ${usuario.nombre}`);
    },
    logout() {
      console.log(`Deslogueando a ${usuario.nombre}`);
    }
  }
  return Object.assign(usuario, metodos);
}

const usuario2 = extender2(obj);
console.log(usuario2);
usuario2.login();