
function User(){
  this.name = 'Hola mundo';
  this.login = function () {
    console.log('Iniciando sesion');
  }
}

// user1 y user2 son instanacias
const user1 = new User();
const user2 = new User();

user1.login();

// con esto comprobamos que los metodos de las instancias son diferentes
// y si nos toca mantener el codigo ded estas seria un problema si tenemos un
// monton de instancias, puesto que tendriamos que cambiar 1 por 1

console.log(user1.login == user2.login);

// entonces empecemos por ver el prototipo de la FC(funcion constructora) de User
console.log(User.prototype); // solo tiene constructor y tiene prototipo Object
// entonces la cadena de prototipos seria user1 -> User -> Object

// entonces agreguemos el login al prototipo envez de la funcion constructora

function User2(){
  this.name = 'Hola mundo';
  // Metodo de instancia
  // se usa cuando queremos la instancia tenga su propio codigo
  // no se va a optimizar esta parte
  this.logger = function(){
    console.log('loggeando...');
    this.login(); // referencia a un metodo del prototipo de User2
  }
}

// metodo de prototipo
// usado para crear una cadena de prototipos, u optimizar el codigo
User2.prototype.login = function () {
    // tambien se puede acceder a las propiedades de la Funcion Constructora como el .name
    console.log('Iniciando sesion', this.name);
  }

const user3 = new User2();

console.log(user); // solo tiene la propiiedad de name,
// la funcion login? ahora esta en el prototipo

user.login();
user.logger();

// ahora veamos un metodo de un prototipo superior (Object): toString()

User2.prototype.toString = function () {
    // tambien se puede acceder a las propiedades de la Funcion Constructora como el .name
    console.log('Usuario: ', this.name);
  }

// cambiamos de 'Object Object' a una cadena personalizada
// ya que en la cadena de prototipos vamos de nivel inferior a superior
// va buscando el metodo en los niveles inferiores, si lo encuentra ignora
// todo lo demas y ejecuta
user.toString();