// de momento hemos visto promesas en serie, se resuelven en orden
// ahora veremos promesas paralelas, al mismo tiempo 2 o mas promesas

// si se rechaza es de manera inmediata, no espera al timeout en race() y all()
// no deberiamos pasar numeros sino la razon del fallo
//const p1 = Promise.reject('fallo en conexion al servidor '); 
const p1 = Promise.resolve(3);
const p2 = 42; // dato primitivo -> si se mete en una cadena de prmss, tambien se considera promesa
//const p2 = Promise.reject(3); // para si p1 y p2 rej entonces p3
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'foo');
  // el tercer argumento se injecta en resolve

  //setTimeout(reject, 1000, 'foo');

});

// resolver todas las promesas, al pasar esto se ejecuta codigo
// all() recibe un array con las promesas a resolverser
// va a esperar que se resuelvan todas en paralelo
// y si todas se resolvieran ejecuta then() si no catch()
// ya que es un array existe un orden que determinamos
Promise.all([p1, p2, p3])
  .then(valores => console.log('all', valores))
  .catch(e => console.log('error en all', e));

// ya que tenemos un timeout, a todas las promesas les tomara 1 segundo

// Ahora veamos race();
// este espera y devuelve la primera promesa resuelta o rechazada
// tambien recibe un array como arg
// no espera a que el resto de promesas se resuelva
// apenas se resuelva o rechaze cualquiera de las promesas, race lo devuelva
Promise.race([p1,p2,p3])
  .then(valor => console.log('race', valor))
  .catch(e => console.log('error en race', e));



// --------------- EXtra dos metodos estaticos iimportantes 

// Veamos any(), es similar a race, pero cuando la primera promse falla en resolverse
// lo ignora y sigue asi hasta que alguna promesa se resuelva
// tambien se pasa un array como argumento
Promise.any([p1,p2,p3])
  .then(valor => console.log('any', { valor }))
  .catch(e => console.log('error en any', { e })); // todas las promesas son rechazadas


// Ahora veamos allSettled(): 
// tambien recibe como argumento un array de promesas
// Nos devuelve un objketo que tiene una prop status donde se ve si se resolvio 
// o rechazo y el valor en una propiedad value
// si es resuelto es prop value, si es rechazado, prop reason.
Promise.allSettled([p1,p2,p3])
  .then(valores => console.log('allSettled', { valores }))
  .catch(e => console.log('error en allSettled', { e })); 