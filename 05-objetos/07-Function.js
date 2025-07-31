// existe un constructor que se llama function
// ademas, existen propiedades de las funciones que sirven para 
// reutilizar codigo

function Punto(x, y){
  this.x = x;
  this.y = y;
  this.dibujar = function() { console.log('Dibujando...'); }
}

// se puede crear la funcion anterior de este manera usando Function
// Nunca usar esto ya que ya no es convencional
const Point = new Function('x', 'y', `
  this.x = x;
  this.y = y;
  this.dibujar = function() { console.log('Dibujando...'); }
  `);

const p = new Point(1, 2);
console.log(p);

// ahora veremos el metodo .call de las funciones

Punto.call({}, 2, 3); // esto devuelve void aun usando new

// y si hacemos esto
// let p = new Punto.call({}, 2, 3);
// indica que call no es una funcion constructor

let punto = {z: 7};
Punto.call(punto, 1, 2);

console.log(punto);

// lo que pasa aca es que al crear el objeto punto con {z:7} ahora
// call lo toma como this, entonces this = {z:7},
// y llama a la funcion Punto y le agrega el x, y y sus metodos
// algo asi -> Punto {z:7}.x = 1; {z:7,x:1}.y = 2; etc...

// esto sirve para extender objetos y funciones

// otra forma de aplicar call es apply, solo que debemos pasar los argumentos con array []

Punto.apply(punto, [2,3]);
console.log(punto);
