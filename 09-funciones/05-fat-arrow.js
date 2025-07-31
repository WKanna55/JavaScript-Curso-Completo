
function sumaAnterior (a, b) {
  return Array.from(arguments)
    .reduce((acc, el) => acc+el);
  // let total = 0;
  // for (let valor of arguments){
  //   total += valor;
  // }
  // return total;
}

console.log(sumaAnterior(1,2,3,4));

// Segun la funcion anterior hecha
// vamos a transformarlo en una fat arrow function

const suma = (a, b) => {
  return Array.from(arguments)
    .reduce((acc, el) => acc+el);
  // let total = 0;
  // for (let valor of arguments){
  //   total += valor;
  // }
  // return total;
}

// Nos da un error que indica que arguments no esta definida
// por que?
console.log(suma(1,2,3,4));

// las fat arrow functions no tienen ARGUMENTS
// tampoco tienen super, ni this

// las fat arrow function son una funcion reducida de las normales
// por ello si se pasa este limite no se deberia usar
