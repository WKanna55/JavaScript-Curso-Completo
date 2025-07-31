// arreglos o arrays, arrays significa coleccion

let animales = ['chanchito', 'caballo']; // array literal

console.log(animales); // respeta el orden en el que se le pasa los elementos
// los elementos comienzan con 0 como indice

// como acceder a un elemento del array
// tenemos que usar el indice
console.log(animales[0]); 

// agregar elementos
animales[2] = 'dragon';
console.log(animales); 
// cuidado si pasamos un indice sin sentido, por ejemplo
animales[10] = 'pez';
console.log(animales); // se crean 7 espacios vacios sin valor
console.log(animales[7]); // da undefined
console.log(typeof animales); // nos dice que es un objeto
console.log(animales.length);

 