/**
 * this puede ser mucho mas confuso en js
 * 
 */

const usuario = {
  nombre: 'Nicolas',
  ciudadanias: ['Chile', 'Colombia', 'New Zealand'],
  mostrarCiudadanias(){
    //console.log(this.ciudadanias);
    // forEach funciona igual que map, pero no retorna nada
    // pero nos permite iterar los elementos

    //this.ciudadanias.forEach(function (ciudadania) { // tiene contexto this
    this.ciudadanias.forEach(ciudadania => { // no tiene contexto this
    //console.log(ciudadania);

      // si queremos añadir el nombre del usaurio a la izquierda
      // podemos pensar que esta seria la manera
      // pero esto nos da undefined ya que this
      // dentro de una funcion hace referencia al objeto window
      // no podemos acceder a la propiedad nombre de nuestro usuario
      // usando this,
      // la solucion es usar una fat arrow function
      // ya que estas no tienen un contexto de this
      // y van a a 'heredar' el contexto de this superior
      // que en este caso seria nuestro usuario
      console.log(this.nombre, ciudadania);
    });
  },
}

// funciona, nos muestra el array de ciudadanias
// usuario.mostrarCiudadanias();

// pero si queremos que nos muestre por lineas?
//usuario.mostrarCiudadanias(); // funciona con el forEach

// pero que pasa si queremos agregar el nombre del usuario a la izquierda?
usuario.mostrarCiudadanias(); 

// en la siguiente leccion veremos un metodo de esto ams antiguo
//