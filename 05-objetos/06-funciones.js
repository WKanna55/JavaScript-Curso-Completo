// las funciones en js son objetos de primera clase
// esto significa que tienen prop, pueden ser asignadas como variables, 
// argumentos o retornadas por otras funciones

function Usuario(nombre){
  this.nombre = nombre;
}

// funcioens son objetos, tienen sus propiedades
console.log(Usuario);

console.log(Usuario.name);

console.log(Usuario.length);

// funcion asignada a una variable
const U = Usuario;
let user = new U("Nicolas");
console.log(user);

// funcion asignada como parametro de otra funcion
// of va a recibir una funcion constructora 
function of(Fn, arg){
  return new Fn(arg);
}
let user1 = of(Usuario, "Chanchito")
console.log(user1);

// funcion retornada de otra funcion
function returned(){
  return function() {
    console.log('Hola mundo');
  }
}
let saludo = returned();

saludo();