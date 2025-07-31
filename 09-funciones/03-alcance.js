/** Alcance de las variables dentro de las funciones:
 * 
 */

let afuera = 'Estoy afuera';

function alcance(){
  // Nos da los mismos problemas de la leccion 02
  // pero que pasa si los colocamos fuera de la funcion?
  //console.log(saludo); // (correcto) function
  //console.log(vieja); // (correcto) undefined
  //console.log(variable); // (error) no se puede acceder
  //console.log(constante); // (error) no se puede acceder

  // que pasa con una variable fuera de la funcion}
  console.log(afuera);
  afuera = 'estoy adentro';
  

  function saludo(){}
  var vieja = 'ya no usar';
  let variable = 'Hola mundo';
  const constante = 'Hola Mundo!';

  // Todo como lo esperado, 
  // pero que pasa si lo subimos antes de las inicializaciones?
  //console.log(saludo);
  //console.log(vieja);
  //console.log(variable);
  //console.log(constante);
}

// Nada de aca esta definido, ya que estas variables y funciones
// se inicializaron en una funcion, entonces el alcance que tienen es solo
// en esa funcion
//console.log(saludo); // (error) no definido "Is not defined"
//console.log(vieja); // (error) no definido "Is not defined"
//console.log(variable); // (error) no definido "Is not defined"
//console.log(constante); // (error) no definido "Is not defined"


// ahora veamos el comportamiento de una variable afuera de la funcion
// si se puede acceder a esta dentro de la funcion
console.log(afuera); 

alcance(); // modifica afuera

console.log(afuera);
