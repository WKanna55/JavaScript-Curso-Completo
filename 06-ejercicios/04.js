/**
 * Ejercicio 04: cuales son metodos
 * construir una funcion que permita determinar cuales propiedades 
 * de un objeto son metodos(funciones)
 * 
 */
// estructura
// let  objeto = {
//   id: 1,
//   name: 'Chanchito',
//   login: function (){},
//   logout: function(){},
// }
// function cualesMetodos(obj){
// }
// cualesMetodos(objeto);

// resolucion:

let  objeto = {
  id: 1,
  name: 'Chanchito',
  login: function (){},
  logout: function (){},
}
function cualesMetodos(obj){
  for (let item of Object.values(obj)){
    if (typeof item === 'function'){
      console.log(item.name);
    }
  }
}
cualesMetodos(objeto);