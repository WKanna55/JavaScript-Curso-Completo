class Entidad {
  constructor(id){
    this.id = id;
    this.created_at = new Date();
  }
  save(){ 
    //...
  }
}

// para heredar usamos extends
// cada vez que usamos extends tenemos que llamar al constructor padre con super()
class User extends Entidad {
  constructor(name){
    super(1); // tenemos que pasar los parametros que requiere el padre
    this.name = name;
  }
}

const u = new User('');
console.log(u); // hereda correctamente de entidad
