// Existira momentos en que aplicar herencia no tiene ningun sentido
// como esta

// vuela, nada, camina, va al baño
function Pato () {}

// camina, nada, va al baño
function Perro () {}

// nada, va al baño
function Pez () {}

// vuela pero no nada, no camina, no va al baño
function Avion() {}

// no tiene sentido heredar una FC padre a todas estas FC

// pero podemos ir componiendolos para tener un objeto mas grande
// javascript tiene herramientas para esto, se llama: Mixins

// pero antes:
// al heredar, por norma general y para que el codigo sea legible,
//    tener un solo prototipo heredado(1 nivel), si se tiene más
//    mejor usar mixins
