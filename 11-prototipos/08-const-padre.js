function Entidad(entidad) {
  this.id = Math.random().toString('20');
  this.entidad = entidad;
}

function User() {
  // las FC son objetos, por ello tenemos acceso a los siguientes metodos apply call bind
  // para cambiar el contexto de this
  Entidad.call(this, 'user'); // pasa el contexto this de la FC User
                              // y solo nos preocupamos de agregar los atributos de Usuario
  this.atributos = {
    name: 'Chanchito feliz',
    email: 'Chanchito@mail.io',
  }
}

const u = new User(); 
console.log(u); // contiene las propiedades de Entidad

// esta es otra manera de reutilizar codigoi