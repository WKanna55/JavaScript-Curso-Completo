
let vuela = {
  vuela(){
    console.log('volando');
  }
}


let nada = {
  nada(){
    console.log('nadando');
  }
}


let bano = {
  bano(){
    console.log('yendo al baño');
  }
}


let camina = {
  camina(){
    console.log('caminando');
  }
}

// vuela, nada, camina, va al baño
function Pato () {
  this.name = 'Patito';
}

// camina, nada, va al baño
function Perro () {}

// nada, va al baño
function Pez () {}

// vuela pero no nada, no camina, no va al baño
function Avion() {}


// ------------------------------- Caso Avion

//Avion.prototype = vuela; // funciona, problema, agregar mas metodos
//Avion.prototype = { // aca podemos ir agregando mas metodos
//  ...vuela,
//  ...nada,
//  ...etc,
//}; // pero aun hay una forma mas sencilla

// mejor y mas legible
//Object.assign(Avion.prototype, vuela); // nada, etc
mixin(Avion, vuela); 
console.log(Avion.prototype, new Avion());

// ------------------------------- Caso Pez

//Object.assign(Pez.prototype, nada, bano);
mixin(Pez, nada, bano);
let p = new Pez();
console.log(Pez.prototype, p);

// ------------------------------- Caso Perro

//Object.assign(Perro.prototype, nada, bano, camina);
mixin(Perro, nada, bano, camina);
let perro = new Perro();
console.log(Perro.prototype, perro);

// ------------------------------- Caso Pato

//Object.assign(Pato.prototype, nada, bano, camina, vuela);
mixin(Pato, nada, bano, camina, vuela); // ejmplo con funcion encsapsulada
let pato = new Pato();
console.log(Pato.prototype, pato);

// Esta manera tiene como beneficio componer las funcionalidad es muy
// facil, ademas muchos programadores esconden este Object.assign
// en una funcion llamada mixin

function mixin(Ctr, ...args){
  Object.assign(Ctr.prototype, ...args)
}