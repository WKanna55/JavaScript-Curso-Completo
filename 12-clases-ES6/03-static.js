// metodos estaticos
// un metodo que pertenece a la clase, no pertenece a la instancia del objeto

class Restaurants {
  static cantidad = 12; // propiedad estatica
  constructor(name){
    this.name = name;
  }
  getTimeTable() {
    console.log('horario del restaurante');
  }
  static getRestaurant(id) { // metodo estatico para devolver un restaurant por su id
    return new Restaurants('BBQ');
  }
}

// queremos un metodo para obtener un restaurante por su id
// para ello no deberia ser necesario instanciar
// se deberia poder llamar sin instanciar, eso es un metodo estatico de clase

//const r = new Restaurants(); // no
const r = Restaurants.getRestaurant(12); // esto es un metodo estatico

console.log(Restaurants.cantidad);

// metodos estaticos que hemos usado en lecciones anteriores

//Array.isArray();
//Array.from();
//Object.assign();