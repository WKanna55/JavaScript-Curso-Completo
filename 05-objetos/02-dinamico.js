const user = { id: 1, name: 'Nico' };

// por que puedo asignarle propiedades a un objeto constante
// user = 1; // esto no se puede hacer
// pero si se puede agregar quitar modificar las propiedades
user.name = 'Nicolas';
user.guardar = function () {
  console.log('Guardando', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;

console.log(user);

// pero si queremos que no cambien las propiedades podemos usar:
const user1 = Object.freeze({ id: 1 });

// pero si queremos cambiar las propiedades mas no agregar nuevas usamos
// const user1 = Object.seal({ id: 1 });

user1.name = 'Nicolas'; // no se agrega nada 
user1.id = 2; // no se cambia
console.log(user1);

// ------------------------------
// pero si queremos cambiar las propiedades mas no agregar nuevas usamos
const user2 = Object.seal({ id: 1 });

user2.name = 'Nicolas'; // no se agrega nada 
user2.id = 2; // no se cambia
console.log(user2);
