

let promesa1 = param1 => new Promise((res, rej) => {
  // calcular algo...
  const b = 'Hola mundo';
  res(b);
});

let promesa2 = param2 => new Promise((res, rej) => {
  // calcular algo...
  res(param2 + ', Hola Mundo');
});

let promesa3 = (param1, param2) => new Promise((res, rej) => {
  res('chanchito feliz');
})

// cadena serie
//Promise.resolve('Primer valor') // 'primer valor' se le injecta a promesa1
//  //.then(a => promesa1(a)) // para pasar el dato de promesa 1
//  //.then(b => promesa2(b))
//  //.then((a,b) => promesa2(b)) // esto no se puede hacer estamos niveles 
//  //                            // abajo y no se sube varios niveles de la cadena
//  // se puede hacer esto, pero...
//  .then(a => {
//    return promesa1(a)
//      .then(b => { 
//        return promesa2(b)
//          .then(() => promesa3(a, b));
//      });
//  });

  // este es un anti patron llamado: piramide de la muerte
  // Triangulo de la tortura o simplemente mala practica
  // este caso se ve mucho

// lo podemos resolver con un contexto
// hay una manera de poner contexto a todas las promesas
// ejemplo y asi para todas las promesas
// let promesax = param1 => new Promise((res, rej) => {
//   // calcular algo...
//   const b = 'Hola mundo';
//   res({ contexto: b});
// });

// pero esto es tedioso, en js tenemos una forma de crear contexto de forma
// muy sencilla


async function main() {
  try {
    // al usar await el valor de a sera el valor que resolvio esa promesa
    // ya que si no ponemos await a seria el objeto Promise y no su valor
    const a = await Promise.resolve('Primer valor');
    const b = await promesa1(a);
    const c = await promesa2(b);
    const d = await promesa3(a, b);
    console.log(d);
  } catch (error) {
    console.log(error);
  }
}

console.log(main());
