class Entidad {
  constructor(id){
    this.id = id;
    this.created_at = new Date();
  }
  save(){ 
    console.log('save entidad');
    
  }
}

class User extends Entidad {
  constructor(name){
    super(1); 
    this.name = name;
  }
  save() { // simplemente añadimos un metodo con el mismo nombre y tomara primero el de User
    super.save(); // se puede reutilizar el metodo save del padre con super
    console.log('save en usuario');
  }
}

const u = new User('chanchito feliz');
console.log(u); 
u.save();

