
// atributos o metodos privados con una FC(funcion constructora)
function User(a) {
  let name = a; // atributo privado
  this.getName = function () { return name; } // metodo publico por usar this.
}

const u = new User('Chanchito feliz');
console.log(u.name); // da undefined pq es privado
console.log(u.getName()); // ahora si se puede obtener la variable privada

// atributos y metodos privado en clases

class UserClass {
  #name; // privada
  constructor(name){
    this.#name = name;
  }
  #logger() { // metodo privado, aparece en chrome como privated methods
    console.log('logger');
  }
  getName() {
    this.#logger();
    return this.#name;
  }
}

const u2 = new UserClass('Ricado');
// en chrome nos aparece la propiedad, pero es solo para depurar, en si si es privado
console.log(u2); // aparece un objeto vacio
//console.log(u2.#name); // indica que no se puede acceder fuera de la clase
console.log(u2.getName());

// -----------------------
// tampoco se puede acceder asi
console.log(u2['#name']); // undefined

// y si lo asignamos
//u2['#name'] = 'Lals';
//console.log(u2['#name']); // Aparece lals y tenemos 2 #name, en chrome el privado es 
// el que tiene # blanco
// no se deberia hacer esto
