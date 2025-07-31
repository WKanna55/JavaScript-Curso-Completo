// metodos estaticos

// momentos en los que queremos rechazar o resolver promesas de manera pragmatica

let promesa1 = new Promise((res, rej) => {
  res(5); // una valor menor que 10
});

let promesa2 = new Promise((res, rej) => {
  res(15);
});

promesa1
  .then(valor => {
    if (valor > 10){
      return promesa2; 
    }
    // si el valor es menor 10 y no queremos undefined en la seguna promesa
    // devolvemos una promesa con este metodo estatico de Promise
    // return Promise.reject('Valor menor que 10'); 


    // lo opuesto, si algo fallo igual queremos retornar una promesa resuelta
    // de esta manera incluso si falla y queremos volver a evaluar, podemos 
    // crear una nueva promesa que siga en la cadena, seria como un test
    return Promise.resolve(555); 
  })
  .then(valor2 => {
    console.log('Segunda promesa', valor2);
    return valor2;
  })
  .catch(e => console.log(e))
  .finally(() => console.log('Estamos en finally'));