// Ahora que sabemos las fat arrow function podemos hacer una busqueda por referencia

const usuarios = [
  { id: 1, name: 'Chanchito'},
  { id: 1, name: 'Felipe'},
  { id: 2, name: 'Feliz'},
  { id: 3, name: 'Feliz'},
]


// si seguimos con la logica de busqueda de primitivos hariamos esto
// pero esto es erroneo, nos da -1
// cuando pasamos este objeto en la busqueda, se crea un nuevo objeto literalmente
// este nuevo objeto no comparte la misma direccion en memoria que el objeto que
// queremos buscar
console.log(usuarios.indexOf({ id: 1, name: 'Chanchito'}));

// entonces como lo hacemos?

// seria con el metodo .find
// find a diferencia de idnexOf recibe una funcion, y esta funcion recibe un parametro
// este parametro es un elemento del array que estamos iterando
// emtonces va comprobando objeto por objeto
// usuario representaria a un usuario(objeto) de nuestro array usuarios
// aglo asi como un for of(for each)
const resultado = usuarios.find(function(usuario) {
  // return true; // tenemos que retornar un booleano
  // por ejemplo queremos retornar por busqueda de id, seria asi
  // una cosa interesante es que reconoce el id
  return usuario.id === 1;
  //return usuario.name === 'Feliz';
  // que pasa si 2 o mas objetos tienen el mismo valor en la propiedad
  // find siempre devolvera el primer elemento que encuentre que cumpla
  // la condicion, asi que debemos asegurarnos que la propiedad a buscar
  // sea unica
});

console.log(resultado);


/**
 * Ahora, a estas funciones que reciben otra funcion como paramentro
 * se les llama "predicate"
 *    predicate: funcion que devuelve true o false;
 * 
 * La funcion .find usada anteriomente se puede simplificaar usando 
 * las fat arrow function
 * de esta manera
 */
const resultado2 = usuarios.find(usuario => usuario.name === 'Felipe');
console.log(resultado2);

// ahora, si queremos solo el indice podemos usar el metodo .findIndex
const resultado3 = usuarios.findIndex(usuario => usuario.name === 'Feliz');
console.log(resultado3);
