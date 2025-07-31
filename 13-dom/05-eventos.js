// eventos en js
// gatillados por el usuario cuando un usuario esta interactuando con
// el sitio web

let form = document.createElement('form');
form.id = 'mi-formulario';
let input = document.createElement('input');
input.setAttribute('type', 'text');
let btn = document.createElement('button');
btn.innerText = 'Enviar';
form.append(input);
form.append(btn);

document.body.append(form);

// 1. evento mouseenter
// cuando el usuario pasa el mouse en el eleemnto
form.onmouseenter = e => {
  console.log('entra el mouse', e); 
  // nos muestra la pos del mouse
  // que lo gatillo
  // y el target(importante)
  // entre muchos mas
}

form.onmouseleave = e => {
  console.log('sale el mouse');
  // contraparte del anterior
}

input.onfocus = e => {
  console.log('input con focus');
  // al hacer click en el input
}

input.onblur = e => {
  console.log('input perdio el foco');
  // cadavez que el usuario clickee fuera de un elemento seleccionado
}

input.onchange = e => {
  console.log('valor cambia', e.target.value);
  // al cambiar el valor del form o el elemento
}

//btn.onclick = e => {
//  e.preventDefault(); // no refersca la pag web, esto por ser un form
//  console.log('boton clickeado');
//  // al hacer click en el elemento
//}

// alguna otras apps ejecutanm appeventlistener

btn.addEventListener('click', e => {
  e.preventDefault(); // no refersca la pag web, esto por ser un form
  console.log('boton clickeado');
  // al hacer click en el elemento
})