// SWITCH => indicar al codigo explicitamente que tiene que 
//            hacer dependiendo el valor de una variable

let accion = 'listar';

switch (accion) {
  case 'listar': 
    console.log('Accion de listar');
    break; // si no se pone break todo las demas condiciones 
            //   se van a ejecutar aunque no se cumplan
  case 'guardar':
    console.log('Accion de guardar');
    break;
  default:
    console.log('Accion no reconocida');
    break;
}

// diferencia con de switch vs if else
// depende del programador, ambos funcionan similar, 
//  aunque hay librerias que prefieren usar switch como REDUX