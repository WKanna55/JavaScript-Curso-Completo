/** Supongamos que queremos crear este objeto
 * que contiene la configuracion de nuestra app
 * {
 *  url: ...
 *  bucket: amazon s3 - archivos app
 *  port: 80
 * }
 * 
 * 
 */

function configurarAPI(url = 'https://facebook.com') {
  // tener un valor por defecto
  // se realizaba de esta manera antiguamente
  //const defaultURL = url || 'https://facebook.com';
  //return `${defaultURL}`;

  // como se puede ver, se establecio un parametro por dedfecto con =
  // por lo que funciona igual
  return `${url}`;
}

console.log(configurarAPI('https://holamundo.io'));
console.log(configurarAPI('https://apirest.io'));

// puede ser un caso donde no queremos pasar la url
// si no usar un valor por defecto, para ello, lo definimos en la funcion
console.log(configurarAPI());

// genial, pero nosotros inicialmente queriamos pasar un objeto y de este
// scar la URL, esto se hace con object destructuring

const config = {
  url: 'https://kana.github.io',
  bucket: 'Amazon-S3-bucket',
  port: 80
};

// de un objeto saca la propiedad url
function configurarAPIURL({ url }) {
  return `${url}`;
}

console.log(configurarAPIURL(config));

// que pasa si no paso el objeto

//console.log(configurarAPIURL()); // da error

// indica url of undefined es undefined
// js esta intentando obetner url de undefined y esto no es posible

// por ello tambien podemos poner un valor por defecto
function configurarAPIURLdefault({ url } = { url: 'https://miurl.def' }) {
  return `${url}`;
}

console.log(configurarAPIURLdefault());

// -------------------------------------------------------------
// queremos una url formateada
// si asignamos un valor por defecto a un parametro que esta en el centro
// necesariamente tenemos que asignar valores por dedfecto a los parametros
// de la derecha, sino nos dara undefineds
//
function confApi(url, bucket = '111', port = 80){
  return `${url}/${bucket}:${port}`
}
// una manera de que no asignemos parametros por defecto a la derecha
// es hacer esto:
// pero esto es muy raro y no recomendado
//console.log(confApi('holamundo.io', undefined, 80));

console.log(confApi('holamundo.io'));

