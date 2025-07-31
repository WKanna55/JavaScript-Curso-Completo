//const Entidad = {
//  save(){ 
//    console.log('save entidad');
//  },
//}
//
//class User {
//  constructor(name){
//    this.name = name;
//  }
//}
//
//Object.assign(User.prototype, Entidad);
//const u = new User('chanchito');
//u.save();
//console.log(u);

// hasta aca funciona pero el orden no es el correcto

// el orden que queremos es object(user) -> User -> Entidad(save) -> Object

const Entidad = {
  save(){ 
    console.log('save entidad');
  },
}

const Actualizar = {
  update(){ 
    console.log('actualizando entidad');
  },
}

class User {
  constructor(name){
    this.name = name;
  }

  save() {
    console.log('Guardando en usuario');
  }
}

const nuevoProto = Object.assign({}, Entidad, Actualizar); // componiendo 2 objetos

Object.setPrototypeOf(User.prototype, nuevoProto);
const u = new User('chanchito');
u.save();
console.log(u);