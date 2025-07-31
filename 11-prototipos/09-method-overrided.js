function getProto(entidad){
  return Object.getPrototypeOf(entidad);
}
function Entidad() {}
Entidad.prototype.save = function() {
  console.log('guardando desde entidad...', this.name);
}

function User() {}
// function Product() {}
// function Category() {}

// esto es OVERRIDE, poner un metodo ya implementado en un prototipo de nivel inferior
User.prototype.save = function () {
  console.log('Guardando desde user...');
}

Object.setPrototypeOf(User.prototype, Entidad.prototype);

// supongamos que uno de estos objetos comparte save pero no deberia tener la misma
// funcionalidad que su prototipo padre
// que hacemos?

const u = new User();
console.log(u);
u.save();

// como llamar al metodo save dentro del prototipo de entidad

console.log(Object.getPrototypeOf(u)); // User
// esto es demasiado engorroso, por ello podemos ecapsularlo
//console.log(Object.getPrototypeOf(Object.getPrototypeOf(u)).save()); // Entidad

console.log(getProto(getProto(u)).save());