// Agrupacion de datos que tiene sentido en conjunto

// Personaje de TV
let nombre = "Tanjiro";
let anime = "Demon slayer"; 
let edad = 16;

// dejar una coma final para github no indique 2 cambios de linea
// la notacion que se ve se llama par -> llave - valor
// otros lenguajes => atributo
// javascript => propiedad
let personaje = {
  nombre: "Tanjiro",
  anime: "Demon slayer",
  edad: 16,
}; 

console.log(personaje); // prototipe?
// javascript no asegura el orden de las propiedades

// acceder a una de las propiedades
console.log(personaje.nombre);
console.log(personaje['anime']);

// modificar una propiedad
personaje.edad = 13; // esta es mas usada si sabemos el nombre de la propiedad
let llave = 'edad';
personaje[llave] = 17; // esta es mas usada si vamos a iterar ya que podemos pasar variables

// eliminar una propiedad
delete personaje.anime;

console.log(personaje);
