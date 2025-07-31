// AND, OR, NOT

// AND &&, si todos son true da true ,si no, false

console.log(true && true); // usa booleandos
console.log(false && true);

let mayorEdad = true;
let suscritoNetflix = false;

console.log('Operador and',mayorEdad && suscritoNetflix); // puede ver todo el contenido o no

// OR ||, si almenos uno es true da true, si no, false

console.log('Operador or',mayorEdad || suscritoNetflix);

// NOT !, invierte el valor, si es true da false

console.log('Operador not', !mayorEdad);

let soloCatalogoInfantil =!mayorEdad;
