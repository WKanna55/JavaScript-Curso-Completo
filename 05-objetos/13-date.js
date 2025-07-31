const ahora = new Date();

console.log(ahora);

// formato USA, crear una fecha con argumentos
const fecha = new Date('December 11 1990 14:15 GMT-0300')
console.log(fecha);

// crear una fecha con argumentos
const fecha2 = new Date(1986, 11, 25, 14, 15);
console.log(fecha2);

// cambiar a hora de chile
const fecha3 = new Date(1986, 11, 25, 14+15, 15);
console.log(fecha3);


// formtao mas corto
console.log('datestring', fecha3.toDateString());
// formato internacional
console.log('ISOstring', fecha3.toISOString()); // siempre usar esto para APIs
// solo horas
console.log('timestring', fecha3.toTimeString());

// con get obtienes diferentes partes como
console.log('day', fecha3.getDay());

// para cambiar una fecha se usa set, ejemplo:
fecha3.setFullYear(2000)
console.log('fehca 3 cambiada', fecha3)