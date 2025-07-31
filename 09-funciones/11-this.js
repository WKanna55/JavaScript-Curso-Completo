// En un objeto   -> .this hace referencia a un objeto
// En una funcion -> .this hace referencia al objeto window(navegadores), global(nodejs)
// Si usamos new  -> .this hace referencia al objeto que será creado

// this en objetos
const user = {
  name: 'nicolas',
  login(){ // tiene nombre de funcion
    console.log(this);
  }
};

// esto es una funcion anonimo en el objeto, no tiene nombre
// user.logout = function () { // es anonima
//   console.log(this);
// }

// se soluciona asi poniendo el nombre a la funcion
//                        |
user.logout = function logout() { // es anonima
  console.log(this);
}


//user.login(); // el mismo objeto
//user.logout(); // el mismo objeto

//-------------------------------------------------------------------------------------
// this en funciones

function log(){
  console.log(this);
}

log(); // muestra el objeto de window
      // se vio en clases pasadas que hacia referencia al objeto
      // esto se debe a que no estamos usando "new"

//-------------------------------------------------------------------------------------
// this en new (funcion)

function Log(mensaje){
  this.mensaje = mensaje;
  console.log(this);
}

// al agregar new hace referencia al objeto(en este caso funcion)
/** Ocurren 4 cosas
 * - Se crea un objeto literal
 * - Se vincula este objeto a this
 * - Se vincula el prototipo
 * - si no retorna nada, entonces retorna this
 */
const l = new Log('Hola mundo'); 