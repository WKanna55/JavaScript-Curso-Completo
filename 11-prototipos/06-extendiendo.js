Object.prototype.isEqual = function(obj){
  // ... objeto igual a this
}

let x = {};
x.isEqual({a});
// en teoria funciona
// pero en la practica extender el prototipo de Object puede tener muchos problemas
// talvez se actualiza una libreria, o el mismo javascript implementa el metodo etc

// por ello no se deberia extender la funcionalidad de las implementaciones ya 
// hecha por javascript (Object, Array, String, etc...)

