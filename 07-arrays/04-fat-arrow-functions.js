// ahora le daremos un uso un poco acotado, posteriormente se usara completamente

// anteriormente haciamos esto
function hola(){
  return 'Hola Mundo';
}
const resultado = hola();

// pero hay una alternativa a esto llamada fat arrow function

// para definir fat arrow funciont es preferible usar const
// todas las fatarrow function son completamente anonimas
// si queremos reutilizar tenemos que si o si asignarla a una constante o variable
// esto es lo mismo que la funcion anterior
const holaFatArrowFunction = () =>{
  return 'Hola Mundo';
}

// Y para llamarla es igual a como seria una funcion cualquiera
const resultado2 = holaFatArrowFunction();

/**
 * Sin embargo, las fat arrow function tienen una funcionalidad especial
 * llamada return implicito que mostraremos a continuacion
 */
// esto solo funciona si tenemos una linea de codigo
// si son mas, usamos las llaves {}
const holaImplicito = () => 'Hola Mundo';
// esto es exactamento lo mismo a lo que teniamos antes
const resultado3 = holaImplicito();
console.log(resultado3);

// Extendamos esto un poco mas

// que pasa con los parametros
// serian asi
const holaParametros = mensaje => mensaje + ` Hola mundo! ${mensaje}`;

// si vamos a usar mas de un parametro usamos los parentesis ()
// pero si no, como la primera forma
//const holaParametros = mensaje => `Hola mundo! ${mensaje}`;
//const holaParametros = (mensaje) => `Hola mundo! ${mensaje}`;
//const holaParametros = (mensaje, parametro2) => `Hola mundo! ${mensaje}`;

const resultado4 = holaParametros('Chanchito feliz');
console.log(resultado4);

// nos van a ayudar a hacer calculos y operaciones de una manera mas facil de leer