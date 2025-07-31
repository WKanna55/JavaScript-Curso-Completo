// digamos que queremos agregar un metodo .save() y uno .validate()
// sin herencia tendriamos que asignar a cada uno de los prototipos este metodo

// pero podemos crear un nuevo Objeto que tenga save y validate y pasar su prototipo
// a User y Product

function User() {
  this.name = 'Hola mundo';
}

function Product() {
  this.name = 'product';
}

function Entidad() {}
Entidad.prototype.save = function() {
  console.log('guardando', this.name);
}
Entidad.prototype.validate = function() {
  console.log('validando', this.name);
}

// Hay varia formas de psar el prototipo

// primera: asignar el prototipo de usuarioa prototipo de entidad

//User.prototype = Entidad.prototype; //si solo ponemos esto no esta bien, -Entidad- -> User
//User.prototype.constructor = User; // esto soluciona lo anterior

// sin embargo, al hacer esto la funcion constructora de Entidad se perdio

// si queremos mantener entidad y que quede asi obj->User->Entidad->Object
// existe un metodo para esto

//User.prototype = Object.create(Entidad.prototype); // solo esto no preserva el constr del usuario

// para preservarlo hacemos esto
//User.prototype.constructor = User;

// de esta manera pudimos el comportamiento sin heredar

// pero esto es la forma antigua

// ---------------------- Forma nueva por ECMA script 6
// lo que hacemos aca es tomar el prototipo de entidad
// y se lo asignamos como  prototipo al prototipo de User
Object.setPrototypeOf(User.prototype, Entidad.prototype);
Object.setPrototypeOf(Product.prototype, Entidad.prototype);

const user = new User();
console.log(user);
// 

console.log([]);