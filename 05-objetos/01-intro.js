
// se pueden poner objetos dentro de objetos
// tambien se pueden poner acciones funciones
// PÖO, programacion orientada a objetos
// tambien OOP
let user = {
  email: 'myemail@mail.com',
  name: 'Nicolas',
  direccion: {
    calle: 'Queen st',
    numero: 15,
  },
  activo: true,
  // esto se conoce como funcion anonima,
  // util para una propiedad funcion dado que al 
  // colocarle otra vez el mismo nombre genera redundancia
  recuperarClave: function () {
    console.log('Recuperando Clave');
  }, 
};

