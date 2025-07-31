/**
 * Ejercicio 03: Objetos similares
 * saber si 2 objetos tienen las mismas propiedades y valores en dichas
 * propiedades, y devolver true o false
 */
//    **Estructura
// function similares(obj1, obj2){
// }
// let resultado = similares(
//   {id:1, name:'Nico'},
//   {id:1, name:'Nico'},
// )
// console.log(resultado);

// Resolucion:

function similares(obj1, obj2){
  const entriesObj1 = Object.entries(obj1);
  const entriesObj2 = Object.entries(obj2);
  if (entriesObj1.length !== entriesObj2.length)
    return false;
  for (let i=0; i<entriesObj1.length; i++){
    for (let x= 0; x<entriesObj1[i].length; x++){
      if(entriesObj1[i][x] !== entriesObj2[i][x]){
        return false;
      }
    }
  }
  return true;
}

let resultado = similares(
  {id:1, name:'Nico'},
  {id:1, name:'Nico'},
)

console.log(resultado);
