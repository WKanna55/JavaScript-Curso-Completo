let promesa1 = new Promise((res, rej) => {
  //res(8);
  rej(12); // fallo en la primera promesa
});

let promesa2 = new Promise((res, rej) => {
  res(15);
  //rej(15); // provocar fallo
});

//imaginesmos que dentro de una de estas promesas ocurre un error
// par ello usamos catch()
// este solo se ejecuta si tenemos un error en la cadena de promesas
// y desde el then() donde ocurrio el error se ignora todos los demas then()

// ------------------ finally
// ademas del catch() tenemos el finally(), este siempre se ejecuta
// no recibe argumentos
// se usa mucho en carga de applicaciones
// buscamos algo en el servidor y mientras va dando respuesta mostramos un
// icono de carga
promesa1.then(valor => {
  if (valor > 10){
    return promesa2; 
  }
}).then(valor2 => {
  console.log('Segunda promesa', valor2); // no se imprime si falla la primera promesa  
  return valor2;
}).catch(e => console.log(e))
.finally(() => console.log('Estamos en finally'));