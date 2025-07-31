
/*                Tipado en la programacion
  Tipado Estatico         |           Tipado Dinamico
  String nombre...                    let nombre...
  nombre = 42; error                  nombre = 11; normal
  */

/*tipado estatico (fuertemente tipado)
  Se tiene que asignar el tipo de la variable explicitamente
    Lenguajes que hacen esto => java, C#
*/

/*tipado dinamico (debilmente tipado)
  No se tiene que asignar el tipo de variable, 
  este se asigna dinamicamente segun el valor
    Lenguajes que hacen esto => javascript, python
*/

let numero = 42;
let nombre = "Hola mundo";
let verdadero = true;
let undef;
let nulo = null;
console.log(typeof(nombre));
// cambio dinamico de tipo
nombre = 53;
console.log(nombre);
console.log(typeof(nombre));

// viendo los tipos de variables
console.log("Viendo los tipos de variables");
console.log(typeof numero);
console.log(typeof nombre);
console.log(typeof verdadero);
console.log(typeof undef);
console.log(typeof nulo); // esto es un object? cuando debia ser null
// null representa un objeto vacio

