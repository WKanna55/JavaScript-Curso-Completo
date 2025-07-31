/** Getters y Setteres:
 * 
 */

const usuario = {
  nombre: 'Chanchito',
  apellido: 'Feliz',
  // crear metodos getter and setter
  // obtener como una propiedad
  get nombreCompleto(){
    return `${usuario.nombre} ${usuario.apellido}`;
  },
  // setear como una propiedad
  // siempre requiere un parametro
  set nombreCompleto(valor){
    const [nombre, apellido] = valor.split(' ');
    this.nombre = nombre;
    this.apellido = apellido;
  }

};

// digamos que queremos acceder al nombre completo del usuario
// seria entonces:
//console.log(`${usuario.nombre} ${usuario.apellido}`);

// pero esto es un poco engorroso
// hay un metodo mejor
console.log(usuario.nombreCompleto);

// que pasa si queremos setear
// si no tenemos un seter no funciona
usuario.nombreCompleto = 'Hola Mundo';
console.log(usuario.nombreCompleto); // funciona al tener el setter

// que pasa si pasamos solo el nombre o un valor que no es string
// usuario.nombreCompleto = 'Hola'; // hola undefined
// usuario.nombreCompleto = 12; // error

// en la siguiente leccion veremos como se manejan las excepciones
