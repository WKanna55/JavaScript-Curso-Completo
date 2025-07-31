
let user = 'chanchito feliz';

// cuando hacemos una tarea asincrona lo hacemos en medio de las llaves

// let promesa1 = new Promise((res, rej) => {
//   res(12);
// });

// let promesa2 = new Promise((res, rej) => {
//   res(15);
// });

// podemos pasar argumentos a las promesas ded esta manera

let promesa1 = user => new Promise((res, rej) => {
  res(user);
});

// pasar dato de promesa a pormesa, pensemos que promesa2 necesita tambioen el usuario
// lo hacemos asi
let promesa2 = user => new Promise((res, rej) => {
  res(user + ', Hola mundo');
});

// asi que podemos inyectar datos que necesitemos
promesa1('chanchito felizs')
  .then(user => promesa2(user)) //pasamos un dato de una promesa a otra
  .then(dato => console.log(dato))