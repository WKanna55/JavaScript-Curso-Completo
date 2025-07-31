// como cambiar el contexto de this o pasar otro objeto
// para que tome el contexto de this dentro de otra funcion

function saludar(...rest) {
  console.log(this, rest);
}


// ------ Primera forma de cambiar el contexto de this

// el primer argumento es el contexto de this
// y los siguientes vienen a ser los argumentos que le queremos pasar
// a la funcion de saludar

saludar.call({ propiedad: 'Hola mundo' }, 1, 5 );

// ahora this es el objeto, y ademas los paraemotrs que le psasamos

// ------ Segunda forma de cambiar el contexto de this

// la unica diferencia de apply con call
// son la forma de pasar los argumentos a la funcion
// que ahora debe ser un array

saludar.apply({ propiedad: 'Hola mundo' }, [1, 5 ]);

// ------ Ultima forma de cambiar el contexto de this
// con bind, solo cambia el contexto de this
// se usaria de estas maneras:

saludar.bind({ propiedad: 'Hola mundo' })(1,5);
let nuevoSaludar = saludar.bind({ propiedad: 'Hola mundo' });
nuevoSaludar(1, 5);

// ya que se aplica a funciones podemos tomar directamente nuestra funcion
// y aplicarle bind

(function saludar2(...rest) {
  console.log(this, rest);
}).bind({ propiedad: 'Hola mundo' })(2,3);


//------ entonces esto se puede aplicar a nuestra funcion de la clase anterior
const usuario = {
  nombre: 'Nicolas',
  ciudadanias: ['Chile', 'Colombia', 'New Zealand'],
  mostrarCiudadanias(){
    this.ciudadanias.forEach(function (ciudadania) { 
      console.log(this.nombre, ciudadania);
    }.bind(this));
  },
}
usuario.mostrarCiudadanias();

// otra forma de cambiar el contexto de this en nuestro caso
// y que se usaba antiguamente era este
const usuario2 = {
  nombre: 'Nicolas',
  ciudadanias: ['Chile', 'Colombia', 'New Zealand'],
  mostrarCiudadanias(){

    let self = this;

    this.ciudadanias.forEach(function (ciudadania) { 
      console.log(self.nombre, ciudadania);
    }.bind(this));
  },
}
usuario2.mostrarCiudadanias();

// La ultima forma de cambiar sin usar self ni bind
// foreach recibe como ultimo parametro el contexto de this
// ojo que no todos las funciones tienen este parametro

const usuario3 = {
  nombre: 'Nicolas',
  ciudadanias: ['Chile', 'Colombia', 'New Zealand'],
  mostrarCiudadanias(){
    this.ciudadanias.forEach(function (ciudadania) { 
      console.log(this.nombre, ciudadania);
    }.bind(this), this);
  },
}
usuario3.mostrarCiudadanias();