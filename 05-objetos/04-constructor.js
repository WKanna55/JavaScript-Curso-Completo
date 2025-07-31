// Constructor
// tenemos que darle de nombre el recurso que debe crear "construir"
// lleva U mayuscula por convencion, se usa UpperCamelCase = PascalCase

// {id: 1, recuperarClave: function(){}}
// usamos "this" para definir una propiedad 
function Usuario() {
  this.id = 1;
  this.recuperarClave = function (){ // ya no se llama funcion, ahora Metodo
    console.log('Recuperando clave');
    
  }
}

// para crear una instancia de usuario usamos "new", sino, undefined
/**
 * al usar new : ocurren 4 cosas
 *  - se crea un objeto literal del aire(de la nada) vacio {}
 *  - se vincula el prototipo de la funcion Usuario con el objeto
 *      que se acaba de crear
 *  - este objeto vacio se le asigna a la palabra reservada "this"
 *      this = {}  se asigna al objeto vacio
 *  - la funcion Usuario no retorna nada, entonces retorna de
 *      manera automatica "this"
 */
let usuario = new Usuario();

console.log(usuario);

