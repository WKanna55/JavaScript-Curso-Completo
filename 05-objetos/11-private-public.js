// hay ocasiones donde queremos que propiedades o metodos no sean accesibles
function Usuario() {
  let id = 1;
  this.name = 'Willian';

  let log = function(){
    console.log('logging...');
  };

  this.guardar = function(){
    log();
    console.log('Guardando...');
  };
}

// si alguien cambiara esto causaria errores en la app
const usuario = new Usuario();
// se puede agregar pero no va a chocar con la funcion log del objeto
// usuario.log = function() {
//   console.log('borre la funcion'); 
// }
usuario.guardar();