/** 
 * 
 */


//(aun mas alla)function webserver(config){
  // solo queremos url de un objeto que pueda tener cientas de propiedades
  //const url = config.url;

  // una mejor manera
  //const { url } = config;

  // aun mas alla
function webserver({ url}){
  return url;
}

console.log(webserver({ url: 'https://holamundo.io'}));

// ---------------------------------------------------------------------

// que pasa si tenemos varias propiedadaes que devolver

const config = {
  url: 'https://holamundo.io',
  direccion: {
    calle: 'st andres',
    numero: 112
  },
}

function webserver2({ url, direccion:{calle}}){
  console.log(calle);
  return url;
}


// se puede usar rest
function webserver2rest({ url, ...rest}){
  console.log(rest);
  return url;
}

// tambien deentro se puede usar rest
function webserver3rest(config){
  const { url, ...rest} = config;
  console.log(rest);
  return url;
}

console.log(webserver2(config));
console.log(webserver2rest(config));
console.log(webserver3rest(config));

// pero esto mientras mas lo usemos mas engorroso se vuelve, puesto que podemos
// tener function webserver2({ url, direccion:{calle: { ...etc }}}){
// mejor evitarlo si se puede

// -----------------------------------------------------------------------------

// ahora hagamoslo con un array

const configArray = [
  'https://chaomundo.io',
  145,
  80
];

// (bien pero puede mejorar)function webserver3(configuration){
  // funciona, pero es algo tedioso
  //const url = configuration[0]; 
  // para ello existe array destructoring

  // mucho mejhor
  //const [url, bucket, puerto] = configuration;
  // y podedmos llevarlo al siguiente nivel
//function webserver3([url, bucket, puerto]){

// tambien podemos usar ...rest

function webserver3([url, ...rest]){
  console.log(rest);
  
  return url;
}

console.log(webserver3(configArray));
