/**
 * Ejercicio 05: Propiedad Existente
 * Crear una funcion que evalue si un objeto tiene una propiedad en particulara
 */
// Estructura
// let  objeto = {
//   id: 1,
//   name: 'Chanchito',
//   login: function (){},
//   logout: function (){},
// };
// let propiedad = 'name';
// function tieneProp(obj, propiedad){
// }
// console.log(tieneProp(objeto, propiedad));

// resolucion

let objeto = {
  id: 1,
  name: 'Chanchito',
  login: function (){},
  logout: function (){},
};

let propiedad = 'name';

function tieneProp(obj, propiedad){
  for (let prop in obj){
    if (prop === propiedad)
      return true;
  }
  return false;
}

console.log(tieneProp(objeto, propiedad));