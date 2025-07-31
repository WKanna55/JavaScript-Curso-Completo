// templates strings

// vimos antes esto
// si queremos poner comillas dentro del string da error
let saludo = 'Hola \\ Mundo! \nBienvenido a\t \"Ultimate JavaScript\" :)';


// pero ahora lo ahremos con templates
// tambien recibe varaiubles

const nombre = 'Willian'
const apellido = 'Kana'
const nombreCompleto = nombre + ' ' + apellido;

// otra cosa importante es que podemos transformarla en funcion

// const plantilla = `Hola ${nombreCompleto}

// Bienvenidos a "Ultimate JavaScript" :)

// Cariños ${nombre}
// `

function plantilla(nombre){
  return `Hola ${nombre}
Bienvenidos a "Ultimate JavaScript" :)
Cariños ${nombre}`;
}

console.log(plantilla(nombreCompleto));

// la gracia de esto es que podemos definir nuestras plantillas de texto que
// tengamos que enviar a los usaurios
// como correos mensjaes whatsapp etc