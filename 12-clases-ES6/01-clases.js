
// implmentacion usando Funcion constructora - prototype
// function User(name){
//   this.name = name;
//   this.instancia = function () {}
// }
// User.prototype.login = function () {
// }
// const u = new User('Chanchito Feliz');


// implementacion usando clases
class User {
  constructor(name){
    this.name = name;
    this.instancia = function (){} // este metodo se añade a la instancia
  }
  activo = true; // se le asigna a la instancia
  logout = () => { // esto se agrega a la instancia, no al prototipo
    console.log('logout');
  }
  login(){ // este metodo se agrega directamente al prototipo y no a la instancia
    console.log('Hola mundo');
  }
}

const u = new User('Chanchito Feliz');
console.log(u); 
// cuando vamos al prototype en el constructor sale "constructor: class User"
// esta es la unica difenencia entre crear objetos con FC o class

// otra cosa interesante es que cuando no ponemos new al querer instanciar un objeto
// js nos dará error si usamos una clase

// con FC solo nos daria indefinido, pero con clases nos da error directamente
const u2 = User('Chanchito dx');
console.log(u2); 

// tambien con clases el hoisting se ve afectado por el orden
// si instanciamos antes de crear la clase nos dará error
// const u3 = User('Chanchito 3x'); // esto en la linea 1
