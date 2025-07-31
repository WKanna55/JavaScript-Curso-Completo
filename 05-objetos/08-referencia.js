let a = 1;
let b = a;

b++;

// solo aumenta b, ya que son datos primitivos y no de referencia
console.log(a, b);
console.log(a === b);

// pero que pasa con los objetos que son datos de referencia?

let c = {};
let d = c;

d.prop = 1;

// nos devuelve 2 veces el mismo objeto, ya que usamos un dato de referencia
// se tiene la misma direccion de memoria, y esta direccion apunta a las mismas propiedades
console.log(c, d);
console.log(c === d);

// otro caso interesante son las funciones, por ejemplo 

// usemos un dato primitivo
let x = 1;
function suma(n){
  n++;
}

suma(x);
console.log(x); // devuelve 1, no 2

// pasa porque js crea una variable especial para los parametros
// entonces tenemos la variable x y la variable n de la funcion
// lo cual js considera que son distintos

// PERO, que pasa si usamos un objeto(dato dee referencia)?
let y = { prop: 1};
function sumaReferencia(n){
  n.prop++;
}
sumaReferencia(y);
// que ocurrira aca?, cambiara "y" o no?
console.log(y); // cambia, ya que estamos pasando un objeto referencia

// los primitivos se copian cuando se asignan a otras variables
// los de referencia se referencian(duplican) -> objetos, arrays, funciones, String()

