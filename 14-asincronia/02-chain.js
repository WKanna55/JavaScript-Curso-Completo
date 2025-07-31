let promesa1 = new Promise((res, rej) => {
  res(12);
});

let promesa2 = new Promise((res, rej) => {
  res(15);
});

// al usar then este devuelve una promesa, por ello se le puede encadenar otra
// promesas encadenadas

// promesa1.then(valor => {
//   console.log(valor)
//   return valor + 18; // esto hara que la seguna promesa resuelva en 30
// }).then(valor2 => {
//   console.log('la segunda promesa');
//   console.log(valor2); // sale undefined | sale 30 si se retorno algo en la anterior promes
// })


// promesas encadenadas con condicional para resolver la siguiente promesa

promesa1.then(valor => {
  if (valor > 10){
    return promesa2; // retornamos la promesa 2 y se le 
                    // injecta al siguiente llamado de then()
  }
}).then(valor2 => {
  return valor2;
})