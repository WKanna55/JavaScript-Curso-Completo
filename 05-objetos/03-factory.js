// permite crear objetos de manera sencilla y no repetitiva

// let user = {
//   id: 1,
//   email: 'myemail@mail.com',
//   name: 'Nicolas',
//   activo: true,
//   recuperarClave: function () {
//     console.log('Recuperando Clave');
//   }, 
// };

// crear otro usuario con una estructura similar
// let user1 = {
//   id: 2,
//   email: 'chanchito@mail.com',
//   name: 'Chanchito',
//   activo: false,
//   recuperarClave: function () {
//     console.log('Recuperando Clave');
//   }, 
// };

// que pasa si debo crear muchos usuarios...
// para ello nos sirven las factory function
// pasamos las propiedades que cambian definidos como parametros en la funcion
function crearUsuario(name, email){
  return {
    email, // se puede hacer tambien de esta manera
    name: name,
    activo: true,
    recuperarClave: function () {
      console.log('Recuperando Clave');
    }
  };
}

let user1 = crearUsuario('Willian', 'willian@mail.com')
let user2 = crearUsuario('Rena', 'rena@mail.com')

console.log(user1);
console.log(user2);

