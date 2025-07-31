function User(){
  this.name = 'Hola mundo';
}

User.prototype.login = function () {
  console.log('Iniciando sesion', this.name);
}

const user = new User();

// si queremos iterar todas las propiedades, incluyendo las que estan
// en su prototipo tenemos que usar for in
for (let prop in user){
  console.log(prop);
}
// nos name y login
// por que pasa esto?
// for se encarga de iterar dentro del prototipo de un nivel (User)

// pero no de ,as niveles como object

// solo propiedades del objeto, no prototipo seria asi
for (let prop in user){
  if (user.hasOwnProperty(prop)){
    console.log(prop);
  }
}

// solo propiedades del prototipo, no del objeto
for (let prop in user){
  if (!user.hasOwnProperty(prop)){
    console.log(prop);
  }
}
